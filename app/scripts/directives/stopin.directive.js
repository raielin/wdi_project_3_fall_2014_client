'use strict';

/**
 * @ngdoc directive
 * @name stopInApp.directive:stopIn
 * @description
 * # stopIn
 */
angular.module('ep', [])
  .directive('stopIn', function($window, $parse) {
    var counter = 0;
    var prefix = '__ep_stopIn_';

    return {
      restrict: 'A',
      replace: false,
      templateUrl: '/views/stopin.html',
      link: function(scope, element, attrs, controller) {
        var getter = $parse(attrs.stopIn);
        var setter = getter.assign;

        var model = scope.stopIn;
        // model.origin = '';
        // model.destination = '';
        // model.place = '';

        setter(scope, model);

        if ($window.google && $window.google.maps) {
          appInit();
        } else {
          injectGoogle();
        }

        function appInit() {
          var map;
          var directionsService = new google.maps.DirectionsService();
          var directionsDisplay;
          var infoWindow;

          var styles = [
            {
              "featureType": "landscape.man_made",
              "stylers": [
                { "saturation": 17 },
                { "lightness": 47 },
                { "hue": "#f600ff" }
              ]
            },{
              "featureType": "landscape.natural.landcover",
              "stylers": [
                { "saturation": 29 },
                { "lightness": 30 },
                { "color": "#e6f0f0" }
              ]
            },{
              "featureType": "landscape.natural.terrain",
              "stylers": [
                { "hue": "#ff0000" },
                { "saturation": 11 },
                { "lightness": -8 },
                { "color": "#80b280" }
              ]
            },{
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                { "saturation": -28 },
                { "color": "#dd8080" },
                { "lightness": 21 }
              ]
            },{
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                { "color": "#8ccce0" },
                { "saturation": -20 },
                { "lightness": 24 }
              ]
            },{
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                { "color": "#80b4ad" }
              ]
            },{
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                { "color": "#809dad" },
                { "saturation": 21 },
                { "lightness": 55 }
              ]
            }
          ]

          var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

          var boston = new google.maps.LatLng(42.358992, -71.061019);

          var mapOptions = {
            zoom: 15,
            center: boston,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
          };

          map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

          map.mapTypes.set('map_style', styledMap);
          map.setMapTypeId('map_style');

          var rendererOptions = {
            draggable: true,
            map: map
          };

          directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
          directionsDisplay.setMap(map);
          directionsDisplay.setPanel(document.getElementById('steps'));

          model.getDirections = function() {
            // $scope.origin = document.getElementById('origin').value;
            // $scope.destination = document.getElementById('destination').value;
            var request = {
                origin: model.origin,
                destination: model.destination,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, callback);
          }  // END: model.getDirections()

          function callback(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
            } else {
              if (angular.isFunction(model.showError)) {
                scope.$apply(function() {
                  model.showError(status);
                });
              }
            }
          }  // END: callback()

          function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });

            google.maps.event.addListener(marker, 'click', function() {
              infoWindow.setContent(place.name);
              infoWindow.open(map, this);
            });
          }  // END: createMarker(place)

          // invoke function initially
          model.getDirections();

        }  // END: appInit()

        function injectGoogle() {
          var cbId = prefix + ++counter;

          $window[cbId] = appInit;

          var wf = document.createElement('script');
          wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&' + 'callback=' + cbId;
          wf.type = 'text/javascript';
          wf.async = 'true';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(wf, s);
        };  // END: injectGoogle()



      }  // END: link
    };  // END: return
  });  // END: directive

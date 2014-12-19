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

        setter(scope, model);

        if ($window.google && $window.google.maps) {
          appInit();
        } else {
          injectGoogle();
        }

        function appInit() {
          scope.places = [];
          var map;
          var directionsService = new google.maps.DirectionsService();
          var directionsDisplay;
          var infoWindow;
          var placesList;
          // var originPlace;
          // var destinationPlace;

          var styles = [
            {
              'featureType': 'landscape.man_made',
              'stylers': [
                { 'saturation': 17 },
                { 'lightness': 47 },
                { 'hue': '#f600ff' }
              ]
            },{
              'featureType': 'landscape.natural.landcover',
              'stylers': [
                { 'saturation': 29 },
                { 'lightness': 30 },
                { 'color': '#e6f0f0' }
              ]
            },{
              'featureType': 'landscape.natural.terrain',
              'stylers': [
                { 'hue': '#ff0000' },
                { 'saturation': 11 },
                { 'lightness': -8 },
                { 'color': '#80b280' }
              ]
            },{
              'featureType': 'road.highway',
              'elementType': 'geometry',
              'stylers': [
                { 'saturation': -28 },
                { 'color': '#dd8080' },
                { 'lightness': 21 }
              ]
            },{
              'featureType': 'road.arterial',
              'elementType': 'geometry.stroke',
              'stylers': [
                { 'color': '#8ccce0' },
                { 'saturation': -20 },
                { 'lightness': 24 }
              ]
            },{
              'featureType': 'road.local',
              'elementType': 'geometry.stroke',
              'stylers': [
                { 'color': '#80b4ad' }
              ]
            },{
              'featureType': 'water',
              'elementType': 'geometry.fill',
              'stylers': [
                { 'color': '#809dad' },
                { 'saturation': 21 },
                { 'lightness': 55 }
              ]
            }
          ];

          var styledMap = new google.maps.StyledMapType(styles, {name: 'Styled Map'});

          // Setting default center to Boston.
          var center = new google.maps.LatLng(42.358992, -71.061019);

          var mapOptions = {
            zoom: 15,
            center: center,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
          };

          map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

          map.mapTypes.set('map_style', styledMap);
          map.setMapTypeId('map_style');

          var rendererOptions = {
            draggable: true,
            map: map,
          };

          directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
          directionsDisplay.setMap(map);
          directionsDisplay.setPanel(document.getElementById('steps'));

          model.getDirections = function() {
            var request = {
                origin: model.origin,
                destination: model.destination,
                provideRouteAlternatives: true,
                travelMode: google.maps.TravelMode.DRIVING,
                optimizeWaypoints: true
            };
            directionsService.route(request, directionsCallback);
          };  // END: model.getDirections()

          function directionsCallback(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {

              var bounds = response.routes[0].bounds;

              // originPlace = getPlace(model.origin);
              // destinationPlace = getPlace(model.destination);
              // getRouteMarkers(originPlace.geometry.location, destinationPlace.geometry.location);

              directionsDisplay.setDirections(response);
              getPlaces(bounds);

            } else {
              if (angular.isFunction(model.showError)) {
                scope.$apply(function() {
                  model.showError(status);
                });
              }
            }
          }  // END: callback()

          // function getRouteMarkers(originLatLng, destinationLatLng) {

          //   var originMarkerImg = {
          //     url: 'images/map-marker-icon-green-darker.png',
          //     scaledSize: new google.maps.Size(40, 40),
          //     origin: new google.maps.Point(0, 0),
          //     anchor: new google.maps.Point(20, 40)
          //   };

          //   var destinationMarkerImg = {
          //     url: 'images/map-marker-icon-pink.png',
          //     scaledSize: new google.maps.Size(40, 40),
          //     origin: new google.maps.Point(0, 0),
          //     anchor: new google.maps.Point(20, 40)
          //   };

          //   var originMarker = new google.maps.Marker({
          //     map: map,
          //     icon: originMarkerImg,
          //     title: originPlace.name,
          //     position: originLatLng
          //   });

          //   var destinationMarker = new google.maps.Marker({
          //     map: map,
          //     icon: destinationMarkerImg,
          //     title: destinationPlace.name,
          //     position: destination.LatLng
          //   });

          //   google.maps.event.addListener(originMarker, 'click', function() {
          //     infoWindow.setContent(originPlace.name);
          //     infoWindow.open(map, this);
          //   });

          //   google.maps.event.addListener(destinationMarker, 'click', function() {
          //     infoWindow.setContent(originPlace.name);
          //     infoWindow.open(map, this);
          //   });
          // }

          function getPlaces(bounds) {
            var request = {
              bounds: bounds,
              keyword: model.placeSelect
            };

            infoWindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, placesCallback);
          }

          function placesCallback(results, status) {
            var maxPlaces;
            if (results.length < 15) {
              maxPlaces = results.length;
            } else {
              maxPlaces = 15;
            }

            if (status === google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < maxPlaces; i++) {
                scope.places.push(results[i]);
                showPlace(results[i]);
              }
            }
          }

          // function getPlace(query) {
          //   var request = {
          //     bounds: map.getBounds(),
          //     query: query
          //   };

          //   var service = new google.maps.places.PlacesService(map);

          //   service.textSearch(request, function(results, status) {
          //     if (status == google.maps.places.PlacesServiceStatus.OK) {
          //       results[0];
          //     }
          //   });
          // }


          function getAddress(place) {
            var request = {
              placeId: place.place_id
            };

            var service = new google.maps.places.PlacesService(map);
            service.getDetails(request, function(result, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                return result.formatted_address;
              }
            });
          }

          function showPlace(place) {
            var image = {
              url: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/1226495/nVmYcB0iteYOGMg/map-marker-icon-blue.png',
              scaledSize: new google.maps.Size(40, 40),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(20, 40)
            };

            var marker = new google.maps.Marker({
              map: map,
              icon: image,
              title: place.name,
              position: place.geometry.location
            });

            // var placeAddress = getAddress(place);

            // var contentString = '<div><strong>' + place.name + '</strong><br>' + place.vacinity + '</div>';

            google.maps.event.addListener(marker, 'click', function() {
              infoWindow.setContent(place.name);
              infoWindow.open(map, this);
              var wayptLatLng = marker.getPosition();
              getStopInRoute(wayptLatLng);
            });
          }  // END: showPlace(place)

          // invoke function initially
          // model.getDirections();

          function getStopInRoute(placeLatLng) {
            var waypts = [];
            waypts.push({
              location: placeLatLng,
              stopover:true
            });
            var request = {
                origin: model.origin,
                destination: model.destination,
                waypoints: waypts,
                provideRouteAlternatives: true,
                travelMode: google.maps.TravelMode.DRIVING,
                optimizeWaypoints: true
            };
            directionsService.route(request, directionsCallback);
          };  // END: getStopInRoute(place)

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
        }  // END: injectGoogle()



      }  // END: link
    };  // END: return
  });  // END: directive

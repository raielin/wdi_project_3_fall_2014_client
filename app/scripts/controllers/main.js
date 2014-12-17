'use strict';

/**
 * @ngdoc function
 * @name stopInApp.controller:DirectionsCtrl
 * @description
 * # DirectionsCtrl
 * Controller of the stopInApp
 */


// angular.module('stopInApp').controller('MainCtrl', function($scope, InitializeMapFactory, DirectionsFactory, $window) {

//   $scope.map = InitializeMapFactory.map;
//   $scope.directionsService = DirectionsFactory.directionsService;
//   $scope.directionsDisplay = DirectionsFactory.directionsDisplay;

//   function initialize() {
//     $scope.styledMap = InitializeMapFactory.styledMap;
//     $scope.map.mapTypes.set('map_style', $scope.styledMap);
//     $scope.map.setMapTypeId('map_style');

//     $scope.directionsDisplay.setMap(map);
//     $scope.directionsDisplay.setPanel(document.getElementById('steps'));
//   };

//   $scope.getDirections = function(endPoints) {
//     $scope.origin = endPoints.origin;
//     $scope.destination = endPoints.destination;

//     var request = {
//       origin: $scope.origin,
//       destination: $scope.destination,
//       travelMode: google.maps.TravelMode.DRIVING
//     };

//     $scope.directionsService.route(request, directionsCallback);
//   };

//   function directionsCallback(response, status) {
//     if (status === google.maps.DirectionsStatus.OK) {
//       $scope.directionsDisplay.setDirections(response);
//     }
//   }

//   // initialize();
//   google.maps.event.addDomListener($window, 'load', $scope.initialize);

// });

angular.module('stopInApp').controller('MainCtrl', function($scope) {
// angular.module('stopInApp').controller('MainCtrl', function($scope, $window, InitializeMapFactory, DirectionsFactory) {
  // $scope.$on('$viewContentLoaded', function() {
  //   google.maps.event.addDomListener($window, 'load', InitializeMapFactory.initialize);
  //   google.maps.event.addDomListener($window, 'load', DirectionsFactory.initialize);
  // })


  // function initialize() {
  //     map = InitializeMapFactory.map;
  //     directionsDisplay = DirectionsFactory.directionsDisplay;
  //     directionsService = DirectionsFactory.directionsService;

  // }

  // google.maps.event.addDomListener($window, 'load', initialize);



  //  = function() {
  //   map = InitializeMapFactory.map;
  //   directionsDisplay = DirectionsFactory.dirDisplay;
  //   directionsService = DirectionsFactory.dirService;

  //   directionsDisplay.setMap(map);
  //   directionsDisplay.setPanel(document.getElementById('steps'));
  // };

  // google.maps.event.addDomListener($window, 'load', $scope.initialize);

  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});

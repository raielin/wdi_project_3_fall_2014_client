'use strict';

/**
 * @ngdoc function
 * @name stopInApp.controller:DirectionsCtrl
 * @description
 * # DirectionsCtrl
 * Controller of the stopInApp
 */
angular.module('stopInApp').controller('DirectionsCtrl', function($scope, InitializeMapFactory, DirectionsFactory) {

  $scope.map = InitializeMapFactory.map;
  $scope.directionsService = DirectionsFactory.directionsService;
  $scope.directionsDisplay = DirectionsFactory.directionsDisplay;

  $scope.directionsDisplay.setMap($scope.map);
  $scope.directionsDisplay.setPanel(document.getElementById('steps'));

  $scope.getDirections = function(endPoints) {
    $scope.origin = endPoints.origin;
    $scope.destination = endPoints.destination;

    var request = {
      origin: $scope.origin,
      destination: $scope.destination,
      travelMode: google.maps.TravelMode.DRIVING
    };

    $scope.directionsService.route(request, $scope.callback);
  };

  $scope.callback = function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      $scope.directionsDisplay.setDirections(response);
    }
  };
});

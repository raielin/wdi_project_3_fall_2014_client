'use strict';

/**
 * @ngdoc function
 * @name stopInApp.controller:InitializeMapCtrl
 * @description
 * # InitializeMapCtrl
 * Controller of the stopInApp
 */
angular.module('stopInApp').controller('InitializeMapCtrl', function($scope, $window, InitializeMapFactory, DirectionsFactory) {

  $scope.map = InitializeMapFactory.map;
  $scope.directionsService = DirectionsFactory.directionsService;
  $scope.directionsDisplay = DirectionsFactory.directionsDisplay;

  $scope.initialize = function() {
    $scope.directionsDisplay.setMap($scope.map);
    $scope.directionsDisplay.setPanel(document.getElementById('steps'));
  }

  // google.maps.event.addDomListener($window, 'load', $scope.initialize);

  $scope.initialize();

  // $scope.awesomeThings = [
  //   'HTML5 Boilerplate',
  //   'AngularJS',
  //   'Karma'
  // ];
});

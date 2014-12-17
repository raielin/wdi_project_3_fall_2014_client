// 'use strict';

// /**
//  * @ngdoc function
//  * @name stopInApp.controller:InitializeMapCtrl
//  * @description
//  * # InitializeMapCtrl
//  * Controller of the stopInApp
//  */
// angular.module('stopInApp').controller('InitializeMapCtrl', function($scope, $window, InitializeMapFactory, DirectionsFactory) {

//   function initialize() {
//     $scope.map = InitializeMapFactory.map;
//     $scope.directionsService = DirectionsFactory.directionsService;
//     $scope.directionsDisplay = DirectionsFactory.directionsDisplay;

//     $scope.directionsDisplay.setMap(map);
//     $scope.directionsDisplay.setPanel(document.getElementById('steps'));
//   }

//   google.maps.event.addDomListener($window, 'load', initialize);

//   // initialize();

//   // $scope.awesomeThings = [
//   //   'HTML5 Boilerplate',
//   //   'AngularJS',
//   //   'Karma'
//   // ];
// });

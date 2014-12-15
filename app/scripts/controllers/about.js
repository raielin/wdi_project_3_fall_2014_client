'use strict';

/**
 * @ngdoc function
 * @name stopInApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stopInApp
 */
angular.module('stopInApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc directive
 * @name stopInApp.directive:stopIn
 * @description
 * # stopIn
 */
angular.module('stopInApp')
  .directive('stopIn', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the stopIn directive');
      }
    };
  });

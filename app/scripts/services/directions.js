'use strict';

/**
 * @ngdoc service
 * @name stopInApp.directions
 * @description
 * # directions
 * Factory in the stopInApp.
 */
angular.module('stopInApp')
  .factory('directions', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

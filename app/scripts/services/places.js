'use strict';

/**
 * @ngdoc service
 * @name stopInApp.places
 * @description
 * # places
 * Factory in the stopInApp.
 */
angular.module('stopInApp')
  .factory('places', function () {
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

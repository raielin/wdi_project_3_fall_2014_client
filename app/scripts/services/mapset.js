'use strict';

/**
 * @ngdoc service
 * @name stopInApp.mapSet
 * @description
 * # mapSet
 * Factory in the stopInApp.
 */
angular.module('stopInApp')
  .factory('mapSet', function () {
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

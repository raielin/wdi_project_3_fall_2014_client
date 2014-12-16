'use strict';

/**
 * @ngdoc service
 * @name stopInApp.DirectionsFactory
 * @description
 * # DirectionsFactory
 * Factory in the stopInApp.
 */

angular.module('stopInApp').factory('DirectionsFactory', function($http, MapsAPI) {

  var directions = [];

  function fetch() {
    $http.get(MapsAPI)
  }

  return {
    someMethod: function () {
      return meaningOfLife;
    }
  };
});

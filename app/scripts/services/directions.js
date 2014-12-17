'use strict';

/**
 * @ngdoc service
 * @name stopInApp.DirectionsFactory
 * @description
 * # DirectionsFactory
 * Factory in the stopInApp.
 */

angular.module('stopInApp').factory('DirectionsFactory', function(InitializeMapFactory) {

  var map = InitializeMapFactory.map;
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay;

  // function initialize() {
    var rendererOptions = {
      draggable: true,
      map: map
    };

    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    // directionsDisplay.setMap(map);
    // directionsDisplay.setPanel(document.getElementById('steps'));
  // }

  return {
    // initialize: initialize(),
    directionsDisplay: directionsDisplay,
    directionsService: directionsService
  };
});

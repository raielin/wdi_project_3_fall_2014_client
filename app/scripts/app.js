'use strict';

/**
 * @ngdoc overview
 * @name stopInApp
 * @description
 * # stopInApp
 *
 * Main module of the application.
 */
angular.module('stopInApp', [
  'ngRoute'
]);

// .run(function(
//   $window,
//   $rootScope,
//   InitializeMapFactory,
//   DirectionsFactory
// ){
//   $rootScope.$on('$routeChangeStart', function(event, next) {
//     google.maps.event.addDomListener($window, 'load', InitializeMapFactory.initialize);
//     google.maps.event.addDomListener($window, 'load', DirectionsFactory.initialize);
//   });
// });

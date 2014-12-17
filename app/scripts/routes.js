angular.module('stopInApp').config(function($routeProvider) {
  'use strict';

  // Similar to backbone router. Angular routes gives us $routeProvider.
  // .when maps up to routes.
  // Don't need to put in the hash - Angular assumes that, can
  // see it in the browser address bar. Routing starts after the hash.
  // Templates are JUST HTML files. Go to HTML file - look for ng-view.
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

'use strict';

/**
 * @ngdoc overview
 * @name stopInApp
 * @description
 * # stopInApp
 *
 * Main module of the application.
 */
angular
  .module('stopInApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

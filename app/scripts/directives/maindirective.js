'use strict';

/**
 * @ngdoc directive
 * @name stopInApp.directive:mainDirective
 * @description
 * # mainDirective
 */
angular.module('stopInApp').directive('mainDirective', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the mainDirective directive');
    }
  };
});

// angular.module('stopInApp').directive('mainDirective', function($compile) {
//   return {
//     controller: function($scope, InitializeMapFactory, DirectionsFactory) {

//       this.initialize = function() {
//         $scope.map = InitializeMapFactory.map;
//         $scope.directionsDisplay = DirectionsFactory.directionsDisplay;
//         $scope.directionsService = DirectionsFactory.directionsService;

//         $scope.directionsDisplay.setMap($scope.map);
//         $scope.directionsDisplay.setPanel(document.getElementById('steps'));
//       };

//       this.registerMap = function(){
//         $scope.map = InitializeMapFactory.map;
//       };

//     },

//     link: function(scope, elem, attrs, ctrl) {

//     }
//   }



// });

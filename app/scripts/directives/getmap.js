'use strict';

/**
 * @ngdoc directive
 * @name stopInApp.directive:getMap
 * @description
 * # getMap
 */
angular.module('stopInApp').directive('getMap', function () {
  return function(scope, elem) {
    var map;
    var boston = new google.maps.LatLng(42.358992, -71.061019);

    var mapOptions = {
      zoom: 15,
      center: boston,
      // mapTypeControlOptions: {
      //   mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      // }
    };

    map = new google.maps.Map(elem[0], mapOptions);
  }



  // return {
  //   template: '<div></div>',
  //   restrict: 'E',
  //   link: function postLink(scope, element, attrs) {
  //     element.text('this is the getMap directive');
  //   }
  // };
});

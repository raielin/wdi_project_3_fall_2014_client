"use strict";var stopInApp=angular.module("stopInApp",["ep"]);stopInApp.controller("MainCtrl",["$scope",function(a){a.stopIn={showError:function(a){toastr.error(a)}}}]),angular.module("ep",[]).directive("stopIn",["$window","$parse",function(a,b){var c=0,d="__ep_stopIn_";return{restrict:"A",replace:!1,templateUrl:"/views/stopin.html",link:function(e,f,g){function h(){function a(a,b){b==google.maps.DirectionsStatus.OK?c.setDirections(a):angular.isFunction(l.showError)&&e.$apply(function(){l.showError(b)})}var b,c,d=new google.maps.DirectionsService,f=[{featureType:"landscape.man_made",stylers:[{saturation:17},{lightness:47},{hue:"#f600ff"}]},{featureType:"landscape.natural.landcover",stylers:[{saturation:29},{lightness:30},{color:"#e6f0f0"}]},{featureType:"landscape.natural.terrain",stylers:[{hue:"#ff0000"},{saturation:11},{lightness:-8},{color:"#80b280"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{saturation:-28},{color:"#dd8080"},{lightness:21}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#8ccce0"},{saturation:-20},{lightness:24}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#80b4ad"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#809dad"},{saturation:21},{lightness:55}]}],g=new google.maps.StyledMapType(f,{name:"Styled Map"}),h=new google.maps.LatLng(42.358992,-71.061019),i={zoom:15,center:h,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}};b=new google.maps.Map(document.getElementById("map-canvas"),i),b.mapTypes.set("map_style",g),b.setMapTypeId("map_style");var j={draggable:!0,map:b};c=new google.maps.DirectionsRenderer(j),c.setMap(b),c.setPanel(document.getElementById("steps")),l.getDirections=function(){var b={origin:l.origin,destination:l.destination,travelMode:google.maps.TravelMode.DRIVING};d.route(b,a)},l.getDirections()}function i(){var b=d+ ++c;a[b]=h;var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https":"http")+"://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&callback="+b,e.type="text/javascript",e.async="true";var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(e,f)}var j=b(g.stopIn),k=j.assign,l=e.stopIn;k(e,l),a.google&&a.google.maps?h():i()}}}]);
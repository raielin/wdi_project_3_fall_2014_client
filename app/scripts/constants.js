angular.module('stopInApp')
  // _ sets lo-dash underscore as a known element
  .constant('_', window._)
  .constant('MapsAPI', 'https://maps.googleapis.com/maps/api/js?v=3.exp')
  .constant('PlacesLibrary', 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places');

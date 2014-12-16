'use strict';

describe('Controller: MapsetCtrl', function () {

  // load the controller's module
  beforeEach(module('stopInApp'));

  var MapsetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapsetCtrl = $controller('MapsetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

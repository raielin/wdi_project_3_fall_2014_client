'use strict';

describe('Directive: getMap', function () {

  // load the directive's module
  beforeEach(module('stopInApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<get-map></get-map>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the getMap directive');
  }));
});

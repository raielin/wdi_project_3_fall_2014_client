'use strict';

describe('Directive: stopIn', function () {

  // load the directive's module
  beforeEach(module('stopInApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stop-in></stop-in>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stopIn directive');
  }));
});

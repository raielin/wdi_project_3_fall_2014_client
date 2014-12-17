'use strict';

describe('Service: InitializeMapFactory', function () {

  // load the service's module
  beforeEach(module('stopInApp'));

  // instantiate service
  var InitializeMapFactory;
  beforeEach(inject(function (_InitializeMapFactory_) {
    InitializeMapFactory = _InitializeMapFactory_;
  }));

  it('should do something', function () {
    expect(!!InitializeMapFactory).toBe(true);
  });

});

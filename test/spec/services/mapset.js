'use strict';

describe('Service: mapSetFactory', function () {

  // load the service's module
  beforeEach(module('stopInApp'));

  // instantiate service
  var mapSet;
  beforeEach(inject(function (_mapSet_) {
    mapSet = _mapSet_;
  }));

  it('should do something', function () {
    expect(!!mapSet).toBe(true);
  });

});

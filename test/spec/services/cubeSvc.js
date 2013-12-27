'use strict';

describe('Service: cubeSvc', function () {

  // load the service's module
  beforeEach(module('dewmapRadialMenuApp'));

  // instantiate service
  var cubeSvc;
  beforeEach(inject(function (_cubeSvc_) {
    cubeSvc = _cubeSvc_;
  }));

  it('should do something', function () {
    expect(!!cubeSvc).toBe(true);
  });

});

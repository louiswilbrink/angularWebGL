'use strict';

describe('Service: rendererSvc', function () {

  // load the service's module
  beforeEach(module('dewmapRadialMenuApp'));

  // instantiate service
  var rendererSvc;
  beforeEach(inject(function (_rendererSvc_) {
    rendererSvc = _rendererSvc_;
  }));

  it('should do something', function () {
    expect(!!rendererSvc).toBe(true);
  });

});

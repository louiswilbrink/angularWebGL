'use strict';

describe('Directive: renderer', function () {
  beforeEach(module('dewmapRadialMenuApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<renderer></renderer>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the renderer directive');
  }));
});

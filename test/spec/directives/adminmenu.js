'use strict';

describe('Directive: adminMenu', function () {

  // load the directive's module
  beforeEach(module('mehansApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<admin-menu></admin-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the adminMenu directive');
  }));
});

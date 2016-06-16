'use strict';

describe('Controller: LangCtrl', function () {

  // load the controller's module
  beforeEach(module('mehansApp'));

  var LangCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LangCtrl = $controller('LangCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LangCtrl.awesomeThings.length).toBe(3);
  });
});

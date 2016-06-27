'use strict';

describe('Controller: NewcarCtrl', function () {

  // load the controller's module
  beforeEach(module('mehansApp'));

  var NewcarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewcarCtrl = $controller('NewcarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewcarCtrl.awesomeThings.length).toBe(3);
  });
});

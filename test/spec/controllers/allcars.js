'use strict';

describe('Controller: AllcarsCtrl', function () {

  // load the controller's module
  beforeEach(module('mehansApp'));

  var AllcarsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllcarsCtrl = $controller('AllcarsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AllcarsCtrl.awesomeThings.length).toBe(3);
  });
});

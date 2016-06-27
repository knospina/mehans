'use strict';

describe('Controller: NewpictureCtrl', function () {

  // load the controller's module
  beforeEach(module('mehansApp'));

  var NewpictureCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewpictureCtrl = $controller('NewpictureCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewpictureCtrl.awesomeThings.length).toBe(3);
  });
});

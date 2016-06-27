'use strict';

describe('Controller: AllpicturesCtrl', function () {

  // load the controller's module
  beforeEach(module('mehansApp'));

  var AllpicturesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllpicturesCtrl = $controller('AllpicturesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AllpicturesCtrl.awesomeThings.length).toBe(3);
  });
});

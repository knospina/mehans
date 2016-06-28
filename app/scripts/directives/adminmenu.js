'use strict';

/**
 * @ngdoc directive
 * @name mehansApp.directive:adminMenu
 * @description
 * # adminMenu
 */
angular.module('mehansApp')
  .directive('adminMenu', function () {
    return {
      templateUrl: '../../views/adminmenu.html',
      restrict: 'E'
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name mehansApp.controller:LangCtrl
 * @description
 * # LangCtrl
 * Controller of the mehansApp
 */
angular.module('mehansApp')
  .controller('LangCtrl', function ($scope, $translate) {
    
    $scope.changeLang = function(lang){
        $translate.use(lang);
    };    
    
  });
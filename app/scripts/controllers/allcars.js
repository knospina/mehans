'use strict';

/**
 * @ngdoc function
 * @name mehansApp.controller:AllcarsCtrl
 * @description
 * # AllcarsCtrl
 * Controller of the mehansApp
 */
angular.module('mehansApp')
    .controller('AllcarsCtrl', function ($scope, dataService, authenticateService) {

    var token = 'not working';
    if (localStorage.token){
        try {
            token = JSON.parse(localStorage.token);
            token = token.replace(/"/g, '');

        } catch (e){
            console.log('error');
        }
    } 

    authenticateService.checkToken(token); 



    $scope.models = {};
    $scope.cars = {};
    $scope.model = '';

    dataService.allCars()
        .then(function(response){
        $scope.cars = response.data;
        $scope.itemCount = response.data.length;
    }, function(error){
        console.log('This went wrong: ' + error);
    });

});

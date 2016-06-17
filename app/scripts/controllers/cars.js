'use strict';

/**
 * @ngdoc function
 * @name mehansApp.controller:CarsCtrl
 * @description
 * # CarsCtrl
 * Controller of the mehansApp
 */
angular.module('mehansApp')
    .controller('CarsCtrl', function ($scope, dataService) {

    $scope.models = {};
    $scope.cars = {};
    $scope.itemCount = 0;
    $scope.model = '';

    dataService.allModels()
        .then(function(response){
        $scope.models = response.data;
    }, function(error){
        console.log('This went wrong: ' + error);
    });

    $scope.searchCars = function(car){

        if (typeof car === 'undefined') {
            dataService.allCars()
                .then(function(response){
                $scope.cars = response.data;
                $scope.itemCount = response.data.length;
            }, function(error){
                console.log('This went wrong: ' + error);
            });
        } else {
            dataService.carsByModel(car)
                .then(function(response){
                $scope.cars = response.data;
                $scope.itemCount = response.data.length;
                $scope.model = car;
            }, function(error){
                console.log('This went wrong: ' + error);
            });
        }
    };

});

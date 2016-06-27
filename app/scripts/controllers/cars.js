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
    $scope.model = '';

    dataService.allModels()
        .then(function(response){
        $scope.models = response.data;
    }, function(error){
        console.log('This went wrong: ' + error);
    });

    $scope.searchCars = function(car){
        
        console.log(car);

        if (typeof car === 'undefined' || car === '') {
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

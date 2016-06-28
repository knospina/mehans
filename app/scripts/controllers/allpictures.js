'use strict';

/**
 * @ngdoc function
 * @name mehansApp.controller:AllpicturesCtrl
 * @description
 * # AllpicturesCtrl
 * Controller of the mehansApp
 */
angular.module('mehansApp')
    .controller('AllpicturesCtrl', function ($scope, dataService) {
    dataService.allImages()
        .then(function(response){
        //$scope.images = ;
        $scope.chunkedData = chunk(response.data, 3);
    }, function(error){
        console.log('This went wrong: ' + error);
    });


    function chunk(arr, size) {
        var newArr = [];
        for (var i=0; i<arr.length; i+=size) {
            newArr.push(arr.slice(i, i+size));
        }
        return newArr;
    }

});

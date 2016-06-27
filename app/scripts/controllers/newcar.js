'use strict';

/**
 * @ngdoc function
 * @name mehansApp.controller:NewcarCtrl
 * @description
 * # NewcarCtrl
 * Controller of the mehansApp
 */
angular.module('mehansApp')
    .controller('NewcarCtrl', function ($scope, authenticateService, dataService) {
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
    
    var data = {
        model: '',
        mark: ''
    };

    $scope.addCar = function (){

        dataService.addPost(data)
            .then(function(response){
            $scope.blogForm.upload(response.data);
        }, function(error){
            console.log('Error was received: ' + error);
        });

    };
});

'use strict';

/**
 * @ngdoc function
 * @name mehansApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the mehansApp
 */
angular.module('mehansApp')
    .controller('AdminCtrl', function ($scope, $location, dataService) {

    $scope.loginInfo = {
        username: undefined,
        password: undefined
    };

    $scope.loginUser = function(){
        var data = {
            username: $scope.loginInfo.username,
            password: $scope.loginInfo.password
        };

        dataService.logIn(data)
            .then(function(response){
            console.log(response);
            localStorage.setItem('token', JSON.stringify(response.data));
            $location.path('/adminPanel'); //to change path
        }, function(error){
            $scope.posts = 'Error was received: ' + error;
        });

    };

});
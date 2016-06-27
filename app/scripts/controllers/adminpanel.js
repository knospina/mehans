'use strict';

/**
 * @ngdoc function
 * @name mehansApp.controller:AdminpanelCtrl
 * @description
 * # AdminpanelCtrl
 * Controller of the mehansApp
 */
angular.module('mehansApp')
    .controller('AdminpanelCtrl', function ($scope, $location, authenticateService, dataService) {

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

    $scope.logout = function(){
        var data = {
            token: token
        };  

        dataService.logOut(data)
            .then(function(response){
            console.log(response.data);
            localStorage.clear();
            $location.path('/');
        }, function(error){
            console.log('Error was received: ' + error);
        });
    };

});

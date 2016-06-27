'use strict';

/**
 * @ngdoc service
 * @name mehansApp.authenticateService
 * @description
 * # authenticateService
 * Service in the mehansApp.
 */
angular.module('mehansApp')
    .service('authenticateService', function (dataService, $location) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.checkToken = function(token){
        var data = {
            token: token
        };

        dataService.checkToken(data)
            .then(function(response){
            if (response.data === 'unauthorized'){
                $location.path('/');
            } else {
                return response.data;
            }
        }, function(error){
            console.log('Here was an error' + error);
            $location.path('/');
        });

    };
});
'use strict';

/**
 * @ngdoc function
 * @name mehansApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the mehansApp
 */
angular.module('mehansApp')
    .controller('ContactCtrl', function ($scope, $http) {

    $scope.url = 'http://lotart.lv/mehans/slim/submit.php';

    $scope.show = true;    

    $scope.formsubmit = function(isValid) {

        if (isValid) {
            $http.post($scope.url, {name: $scope.name, email: $scope.email, subject: $scope.subject, message: $scope.message}).
            success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
                $scope.show = false;
                $scope.result = data; 

            });
        }

        $scope.name = '';
        $scope.email = '';
        $scope.subject = '';
        $scope.message = '';

    };
});
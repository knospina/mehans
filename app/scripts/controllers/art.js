'use strict';

/**
 * @ngdoc function
 * @name mehansApp.controller:ArtCtrl
 * @description
 * # ArtCtrl
 * Controller of the mehansApp
 */
angular.module('mehansApp')
    .controller('ArtCtrl', function ($scope, dataService) {

    dataService.allImages()
        .then(function(response){
        $scope.images = response.data;
        console.log($scope.images);
    }, function(error){
        console.log('This went wrong: ' + error);
    });

    

    /* Gallery Start */

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.images.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.images.length - 1) ? ++$scope._Index : 0;
    };

   /* $scope.sliderHide = {
        'display':'none'
    };
    $scope.sliderHeight = {
        'height': '85px'
    };*/

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
       /* $scope.sliderHeight = {
            'height': '500px'
        };
        $scope.sliderHide = {
            'display':'block'
        };*/
    };

    /* Gallery End */


});

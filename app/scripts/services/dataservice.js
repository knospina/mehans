'use strict';

/**
 * @ngdoc service
 * @name mehansApp.dataService
 * @description
 * # dataService
 * Service in the mehansApp.
 */
angular.module('mehansApp')
    .service('dataService', function ($http) {

    var urlBase = 'http://lotart.lv/mehans/slim/db-operation.php/';

    this.allCars = function(){
        return $http.get(urlBase);
    };

    this.allModels = function(){
        return $http.get(urlBase + 'get_all_models');
    };

    this.carsByModel = function(model){
        return $http.get(urlBase + 'get_car_by_model/' + model);
    };

});
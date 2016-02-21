var Mehans = angular.module('Mehans', []);

Mehans.controller('SearchController', function($scope, $http) {
    $http.get('http://mehans.lv/api.php?action=get_all_models')
        .then(function(res){
        $scope.models = res.data;   
    });

    $scope.searchCars = function(car) {
        if (typeof car === 'undefined') {
            $http.get('http://mehans.lv/api.php?action=get_car_list')
                .then(function(res){
                console.log(res);
                $scope.cars = res.data;
                $scope.itemCount = res.data.length;
                $scope.model = car;
            });
        } else {
            console.log(car);
            $http.get('http://mehans.lv/api.php?action=get_car_by_model&model='+car)
                .then(function(res){
                console.log(res);
                $scope.cars = res.data;  
                $scope.itemCount = res.data.length;
                $scope.model = car;
            });
        }
    }


});
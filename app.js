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

Mehans.controller("formCtrl", ['$scope', '$http', '$location', function($scope, $http, $location) {
    var lang = $location.absUrl().split('?')[1];
    if (typeof lang!='undefined') {
        $scope.url = 'submit.php?' + lang;
    } else {
        $scope.url = 'submit.php';
    }    
    
    $scope.show = true;    

    $scope.formsubmit = function(isValid) {

        if (isValid) {
            $http.post($scope.url, {"name": $scope.name, "email": $scope.email, "subject": $scope.subject, "message": $scope.message}).
            success(function(data, status) {
                console.log($scope);
                $scope.status = status;
                $scope.data = data;
                $scope.show = false;
                $scope.result = data; 
                
            });
        }else{
            alert('Form is not valid');
        }
        $scope.name = '';
        $scope.email = '';
        $scope.subject = '';
        $scope.message = '';

    }

}]);
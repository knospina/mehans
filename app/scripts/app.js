'use strict';

/**
 * @ngdoc overview
 * @name mehansApp
 * @description
 * # mehansApp
 *
 * Main module of the application.
 */
angular
    .module('mehansApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
])
    .config(function ($routeProvider, $locationProvider, $translateProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
        .when('/art', {
        templateUrl: 'views/art.html',
        controller: 'ArtCtrl',
        controllerAs: 'art'
    })
        .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
    })
        .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
    })
        .when('/cars', {
        templateUrl: 'views/cars.html',
        controller: 'CarsCtrl',
        controllerAs: 'cars'
    })
        .otherwise({
        redirectTo: '/'
    });

    $locationProvider
        .html5Mode(true);
    
    
    /* Translation part TO refactor */
});

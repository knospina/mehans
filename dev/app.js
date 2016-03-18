var Mehans = angular.module('Mehans', ['angularytics', 'pascalprecht.translate', 'ngRoute']);

/* Analytics */

Mehans.config(function(AngularyticsProvider) {
    AngularyticsProvider.setEventHandlers(['GoogleUniversal']);
}).run(function(Angularytics) {
    Angularytics.init();
});


// configure our routes
Mehans.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    // route for the about page
        .when('/art', {
        templateUrl : 'pages/art.html',
        controller  : 'artController'
    })               

    // route for the about page
        .when('/cars', {
        templateUrl : 'pages/cars.html',
        controller  : 'articlesController'
    })

    // route for the contact page
        .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller  : 'contactController'
    })

        .otherwise({
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    });
});


// create the controller and inject Angular's $scope
Mehans.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

Mehans.controller('artController', function($scope) {
    $scope.message = 'Look! I am an art page.';
    $scope.$on('$viewContentLoaded', function() {
        console.log("it worked");
        gallery.init();
    });
});

Mehans.controller('articlesController', function($scope) {
    $scope.message = 'Look! I am an articles page.';
});

Mehans.controller('contactController', function($scope) {
    //$scope.msgtest = 'Contact us! JK. This is just a demo.';
});

Mehans.filter('iif', function () {
   return function(input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
   };
});


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


//var app = angular.module('theApp', ['pascalprecht.translate']);

Mehans.config(function($translateProvider) {
    $translateProvider.translations('lv', {
        /* Main menu */
        menuPakalpojumi: 'Pakalpojumi',
        menuAuto: 'Auto',
        menuMetalaMaksla: 'Metāla māksla',
        menuKontakti: 'Kontakti',
        /* Footer */
        footer: 'Izstrādātājs: ',
        /* First page */
        first1: 'Par mums',
        first2: 'Lietotu automašīnu pārstrādes un autodaļu tirdzniecības jomā darbojamies jau kopš 1998. gada.',
        first3: 'Ko mēs piedāvājam?',
        firstArt: 'radām dažādus metāldizaina priekšmetus no vecām un otrreizējai pārstrādei paredzētām metāla detaļām;',
        first4: 'Mūsu uzņēmums:',
        first5: 'pārdod lietotas autodaļas;',
        first6: 'pieņem likvidējamas automašīnas, izrakstot automašīnas īpašniekam automašīnas likvidācijas sertifikātu;',
        first7: 'veic automašīnu norakstīšanu CSDD;',
        first8: 'iegādājoties autodaļas, klientam piedāvā savus autoservisa pakalpojumus;',
        first9: 'piedāvā autoevakuatora pakalpojumus.',
        first10: '',
        /* Auto list */
        listLabel: 'Izvēlieties automašīnas marku:',
        listAllCars: 'Visi auto',
        listDisclaimer: 'Pieejamas detaļas arī no citiem automašīnu modeļiem. Detaļu klāsts nemitīgi tiek papildināts un mainās.',
        listSearch: 'Meklēt',
        contactUs1: 'Sazinieties ar mums, lai pārliecinātos par',
        contactUs2: 'detaļu pieejamību.',
        /* Art */
        artText1: 'Darbi top no otrreizējai pārstrādei paredzētām metāla detaļām. Šos un citus darbus iespējams iegādāties.',
        artText2: 'Zvaniet pa tālruni 29417373 vai rakstiet uz ',
        /* Contacts page */
        adress1: 'Adrese:',
        adress2: 'Jaunciema 3. šķērslīnija 16, Rīga, Latvija',
        phone: 'Telefons:',
        email: 'E-pasts:',
        workTimeLabel: 'Darba laiks: ',
        workTime1: 'Pr: 9:30-17:30',
        workTime2: 'Ot: 9:30-17:30',
        workTime3: 'Tr: 9:30-17:30',
        workTime4: 'Ce: 9:30-17:30',
        workTime5: 'Pk: 9:30-17:30',
        workTime6: 'Var zvanīt ārpus darba laika',
        contactForm1: 'Sazinieties ar mums',
        contactForm2: 'Vārds',
        contactForm3: 'Epasts',
        contactForm4: 'Tēma',
        contactForm5: 'Ziņa',
        contactForm6: 'Nosūtīt ziņu',
        contactForm7: 'obligāti aizpildāmie lauki',
        contactForm8: 'Nepareiza epasta adrese',
        contactForm9: 'Paldies, ziņa nosūtīta!',
        lv: 'Latviski',
        ru: 'Po russki'
    })

        .translations('ru', {
        /* Main menu */
        menuPakalpojumi: 'Услуги',
        menuAuto: 'Авто',
        menuMetalaMaksla: 'Металлодизайн',
        menuKontakti: 'Контакты',
        /* Footer */
        footer: 'Разработчик: ',
        /* First page */
        first1: 'Информация о нас',
        first2: 'Мы находимся в городе Рига в Яунциемс. В рынке переработки и продажи деталей автомашины б/у мы учавстуем с 1998 года.',
        first3: 'Что мы предлагаем?',
        firstArt: 'создаем разные предметы металодизайна из металических деталей;',
        first4: '',
        first5: 'Продаем автодетали б/у;',
        first6: 'Берём автомашины на ликвидацию, выписываем сертификат ликвидации;',
        first7: 'Списываем вашу автомашину в CSDD;',
        first8: 'Предлагаем сервисные услуги;',
        first9: 'Предлагаем услуги эвакуатора.',
        first10: 'Звоните и приезжайте – договоримся!',
        /* Auto list */
        listLabel: 'Выберите вас интересующую марку автомашины:',
        listAllCars: 'Все марки авто',
        listDisclaimer: 'Разнобразие деталей постоянно обновляем и расширяем.',
        listSearch: 'Искать',
        contactUs1: 'Свяжитесь с нами чтобы убедиться о наличии деталей',
        contactUs2: '.',
        /* Art */
        artText1: 'Произведения создаем из металических деталей и металолома. Эти и другие работы возможно приобрести.',
        artText2: 'Звоните по тел: 29417373 или пишите ',
        /* Contacts page */
        adress1: 'Aдрес:',
        adress2: 'Jaunciema 3. šķērslīnija 16, Рига, Латвия',
        phone: 'Tелефон:',
        email: 'Электронная почта:',
        workTimeLabel: 'Рабочее время:',
        workTime1: 'Пн: 9:30-17:30',
        workTime2: 'Вт: 9:30-17:30',
        workTime3: 'Ср: 9:30-17:30',
        workTime4: 'Чт: 9:30-17:30',
        workTime5: 'Пт: 9:30-17:30',
        workTime6: 'Можно звонить и в нерабочее время',
        contactForm1: 'Свяжитесь с нами',
        contactForm2: 'Имя',
        contactForm3: 'Электронная почта',
        contactForm4: 'Тема',
        contactForm5: 'Сообщение',
        contactForm6: 'Отправить',
        contactForm7: 'поле, обязательное для заполнения',
        contactForm8: 'Введите правильный адрес электронной почты',
        contactForm9: 'Спасибо, Ваше сообщение отправлено!',
        lv: 'Latviski',
        ru: 'Po RUSSKI'
    });

    $translateProvider.preferredLanguage('lv');
});


Mehans.controller('langCtrl', function($translate) {
    var ctrl = this;

    ctrl.language = 'lv';

    ctrl.languages = ['lv', 'ru'];

    ctrl.updateLanguage = function(lang) {
        $translate.use(lang);
    };
});
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

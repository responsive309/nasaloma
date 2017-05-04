'use strict';

angular.module('nasa-central', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    //getting rid the the '#' in URLs
    // $locationProvider.html5Mode(true);

    $stateProvider
        .state('main', {url: '/main', templateUrl: 'partials/main.html', controller: 'mainCtrl'})
        .state('upcoming', {url: '/upcoming', templateUrl: 'partials/upcoming.html', controller: 'upcomingCtrl'})
        ;

        $urlRouterProvider.otherwise('/main');

})

// .run(function($location, $state, $window){})
;

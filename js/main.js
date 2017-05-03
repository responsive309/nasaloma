'use strict';

angular.module('nasa-central', ['ui.router','hSweetAlert'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
        .state('main', {url: '/main', templateUrl: 'partials/main.html', controller: 'mainCtrl'})
        .state('temporary', {url: '/temporary', templateUrl: 'partials/temporary.html', controller: 'temporaryCtrl'})
        ;

        $urlRouterProvider.otherwise('/main');

})

.run(function($location, $timeout, $state, $window){

})

//controllers-----------------------------------------------------------------------------------------------------------------------------------------

.controller('mainCtrl', function($scope, $stateParams, $state, sweet, spaceshipService) {

    spaceshipService.getAllFlicks().then(function(res) {
        $scope.totalFlicks = res.data.length;
        console.log('getAllFlicks result length: ', res.data.length);
        
      })
})

.controller('temporaryCtrl', function($scope, $stateParams, $state, $location) {

})
;

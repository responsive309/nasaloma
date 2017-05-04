'use strict';

angular.module('nasa-central', ['ui.router', 'hSweetAlert'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    //getting rid the the '#' in URLs
    // $locationProvider.html5Mode(true);

    $stateProvider
        .state('main', {url: '/main', templateUrl: 'partials/main.html', controller: 'mainCtrl'})
        .state('upcoming', {url: '/upcoming', templateUrl: 'partials/upcoming.html', controller: 'upcomingCtrl'})
        ;

        $urlRouterProvider.otherwise('/main');

})

.run(function($location, $timeout, $state, $window){

})

//controllers-----------------------------------------------------------------------------------------------------------------------------------------

.controller('mainCtrl', function($scope, $stateParams, $state, sweet, spaceshipService) {
    $scope.photos = [];

    spaceshipService.getPhotosByColor(6).then(function(res) {
        $scope.photoCount = res.data.photos.total;

        for(var p = 0; p < res.data.photos.photo.length; p++){
            $scope.photos.push(res.data.photos.photo[p]);
        }

        console.log("$scope.photos: ", $scope.photos);
        
      })
})

.controller('upcomingCtrl', function($scope, $stateParams, $state, $location) {

})
;

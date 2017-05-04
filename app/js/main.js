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

    $scope.allPhotos = function(){
        $scope.photos = [];

        spaceshipService.getAllPhotos().then(function(res) {
            $scope.photoCount = res.data.photos.total;

            for(var p = 0; p < res.data.photos.photo.length; p++){
                $scope.photos.push(res.data.photos.photo[p]);
            }

            console.log("$scope.photos: ", $scope.photos);
            
        })
    }

    $scope.photosByColor = function(color){
        $scope.photos = [];

        spaceshipService.getPhotosByColor(color).then(function(res) {
            $scope.photoCount = res.data.photos.total;

            for(var p = 0; p < res.data.photos.photo.length; p++){
                $scope.photos.push(res.data.photos.photo[p]);
            }

            console.log("$scope.photos: ", $scope.photos);
            
        })
    }

    $scope.allPhotos();
    
})

.controller('upcomingCtrl', function($scope, $stateParams, $state, $location) {

})
;

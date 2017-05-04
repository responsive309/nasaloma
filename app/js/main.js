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

    var generateGallery = function(photoData){

        for(var p = 0; p < photoData.length; p++){

            var photo = {};

            photo.url = 'https://farm' + photoData[p].farm + '.staticflickr.com/' + photoData[p].server +
                        '/' + photoData[p].id + '_' + photoData[p].secret + '.jpg';
            
            photo.urlLarge = 'https://farm' + photoData[p].farm + '.staticflickr.com/' + photoData[p].server +
                        '/' + photoData[p].id + '_' + photoData[p].secret + '_b.jpg';

            photo.title = photoData[p].title;

            $scope.photos.push(photo);
        }
    }

    $scope.allPhotos = function(){

        $scope.photos = [];

        spaceshipService.getAllPhotos().then(function(res) {
            $scope.photoCount = res.data.photos.total;

            generateGallery(res.data.photos.photo);

            console.log("$scope.photos: ", $scope.photos);
            
        })
    }

    $scope.photosByColor = function(color){
        $scope.photos = [];

        spaceshipService.getPhotosByColor(color).then(function(res) {
            $scope.photoCount = res.data.photos.total;

            generateGallery(res.data.photos.photo);

            console.log("$scope.photos: ", $scope.photos);
            
        })
    }

    $scope.allPhotos();
    
})

.controller('upcomingCtrl', function($scope, $stateParams, $state, $location) {

})
;

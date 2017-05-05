'use strict';

angular.module('nasa-central')

.controller('mainCtrl', function($scope, $stateParams, $state, spaceshipService) {

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
        var page = 1;
        
        $scope.photos = [];

        spaceshipService.getAllPhotos(page).then(function(res) {
            $scope.photoCount = res.data.photos.total;

            generateGallery(res.data.photos.photo);

            $scope.morePhotos = function(){                
                spaceshipService.getAllPhotos(++page).then(function(res) {
                    $scope.photoCount = res.data.photos.total;

                    generateGallery(res.data.photos.photo);

                }, function(err) {
                        console.log('Oops, you encountered an error: ', err);
                        }
                    )
                }
            
            }, function(err) {
                console.log('Oops, you encountered an error: ', err);
            }
        )
    }

    $scope.photosByColor = function(color){
        var page = 1;

        $scope.photos = [];

        spaceshipService.getPhotosByColor(color, page).then(function(res) {
            $scope.photoCount = res.data.photos.total;

            generateGallery(res.data.photos.photo);

            $scope.morePhotos = function(){                
                spaceshipService.getPhotosByColor(color, ++page).then(function(res) {
                    $scope.photoCount = res.data.photos.total;

                    generateGallery(res.data.photos.photo);

                }, function(err) {
                    console.log('Oops, you encountered an error: ', err);
                    }
                )
            }
            
        }, function(err) {
                console.log('Oops, you encountered an error: ', err);
            })
    }

    $scope.viewPhotoDetail = function(index) {
        $scope.currentIndex = index;
    }

    $scope.allPhotos();
    
})

;

'use strict';

angular.module('nasa-central')

.service('spaceshipService', function($http, $location){
    var config = {
        apiKey: "a5e95177da353f58113fd60296e1d250",
        apiUrl: "https://api.flickr.com/services/rest/"
    };

    var photosPerPage = 20;

    this.getAllPhotos = function(page) {
        return $http({
            method: 'GET',
            url: config.apiUrl + "?method=flickr.people.getPublicPhotos&api_key=" 
                + config.apiKey + "&user_id=24662369@N07&format=json&nojsoncallback=1&page=" + page 
                + "&per_page=" + photosPerPage
        });
    };

    this.getPhotosByColor = function(color, page) {
        return $http({
            method: 'GET',
            url: config.apiUrl + "?method=flickr.photos.search&text=nasa&api_key=" 
                + config.apiKey + "&user_id=24662369@N07&format=json&nojsoncallback=1&page=" + page 
                + "&per_page=" + photosPerPage + "&color_codes=" + color
        });
    };

})
;

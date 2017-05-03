'use strict';

angular.module('nasa-central')

.service('spaceshipService', function($http, $location){
    var config = {
        apiKey: "a5e95177da353f58113fd60296e1d250",
        apiUrl: "https://api.flickr.com/services/rest/"
    };

    var offset = {
        page: 1,
        per_page: 20
    };

    this.getAllFlicks = function() {
        return $http({
            method: 'GET',
            url: config.apiUrl + "?method=flickr.people.getPublicPhotos&api_key=" 
                + config.apiKey + "&user_id=24662369@N07&format=json&nojsoncallback=1&page=" + offset.page 
                + "&per_page=" + offset.per_page
        });
    };

})
;
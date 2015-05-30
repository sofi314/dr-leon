'use strict';

app.directive('bgVideo', function($location) {
    return {
        restrict: 'E',
        replace: 'true',
        template: '<video autoplay loop poster="polina.jpg" class="bg-video"><source type="video/webm"><source src="video/leon.mp4" type="video/mp4"></video>'
    }
});
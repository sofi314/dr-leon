'use strict';

app.directive('bgVideo', function($location) {
    return {
        restrict: 'E',
        template: '<video id="bgVideo" autoplay loop poster="polina.jpg" class="bg-video"><source type="video/webm"><source src="video/leon.mp4" type="video/mp4"></video><button ng-click="toggleSound()" class="bg-video__toggle-sound">Toggle Audio</button>',
        link: function($scope, iElm, iAttrs, controller) {
            var video = document.getElementById('bgVideo');
            $scope.toggleSound = function() {
                video.muted = !video.muted;
                $scope.muted = !$scope.muted;
            }
        }
    }
});
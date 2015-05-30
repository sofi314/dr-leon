'use strict';

app.directive('bgVideo', function($location) {
    return {
        restrict: 'E',
        templateUrl: 'partials/bg-video.html',
        link: function($scope, iElm, iAttrs, controller) {
            var video = document.getElementById('bgVideo');
            $scope.toggleSound = function() {
                video.muted = !video.muted;
                $scope.muted = !$scope.muted;
            }
        }
    }
});
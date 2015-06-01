'use strict';

// Allows us to move between states whilst preserving query strings.
// Useage similar to <a href="#/partial"> but hash is not required, e.g. <div goto="/partial">

app.directive('goto', function($location) {
    return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attrs) {
            element.on('click', function() {
                scope.$apply(function() {
                    $location.path(attrs.goto);
                });
            });
        }
    }
});
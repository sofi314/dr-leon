'use strict';

app.directive('ifTouch', function() {
    return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attrs) {

            // function isTouchDevice() {
            //    var el = document.createElement('div');
            //    el.setAttribute('ongesturestart', 'return;'); // or try "ontouchstart"
            //    return typeof el.ongesturestart === "function";
            // }

            if("ontouchstart" in document.documentElement) {
                scope.mobile = true;
                console.log(scope.mobile);
            }
            else {
                scope.mobile = false;
                console.log(scope.mobile);
            }

        }
    }
});
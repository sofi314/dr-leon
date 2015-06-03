'use strict';

app.config(function($routeProvider) {
    // configure our routes
    $routeProvider
    .when('/', {
        templateUrl : 'partials/home.html',
        controller  : 'pageCtrl'
    })
    .when('/about', {
        templateUrl : 'partials/about.html',
        controller  : 'pageCtrl'
    })
    .when('/tickets', {
        templateUrl : 'partials/tickets.html',
        controller  : 'pageCtrl'
    })
    .when('/better', {
        templateUrl : 'partials/better.html',
        controller  : 'pageCtrl'
    })
    .otherwise({
        redirectTo  : '/'
    });
});
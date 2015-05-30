'use strict';

app.config(function($routeProvider) {
    // configure our routes
    $routeProvider
    .when('/', {
        templateUrl : 'partials/home.html',
        controller  : 'homeCtrl'
    })
    .when('/about', {
        templateUrl : 'partials/about.html',
        controller  : 'aboutCtrl'
    })
    .when('/tickets', {
        templateUrl : 'partials/tickets.html',
        controller  : 'ticketsCtrl'
    })
    .when('/better', {
        templateUrl : 'partials/better.html',
        controller  : 'betterCtrl'
    })
    .otherwise({
        redirectTo  : '/'
    });
});
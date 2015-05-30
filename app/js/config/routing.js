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
    .when('/book', {
        templateUrl : 'partials/book.html',
        controller  : 'bookCtrl'
    })
    .when('/better', {
        templateUrl : 'partials/better.html',
        controller  : 'betterCtrl'
    })
    .otherwise({
        redirectTo  : '/'
    });
});
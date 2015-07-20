var app = angular.module('StarterApp');

app.config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
        .state('twitter', {
            url: "/twitter",
            templateUrl: "app/twitter/index.html",
            controller: 'TwitterController'
        });
});
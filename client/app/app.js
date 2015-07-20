/**
 * Created by gabriel on 15-07-18.
 */


var app = angular.module('StarterApp', ['ngMaterial', 'ui.router'])
    .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {
        $mdThemingProvider.theme('default');

        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/state1");
        //
        // Now set up the states
        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "partials/state1.html"
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "partials/state2.html"
            });
    });

app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.toggleSidenav = function (menuId) {
        console.log('toggle');
        $mdSidenav(menuId).toggle();
    };
}]);
/**
 * Created by gabriel on 15-07-18.
 */
var app = angular.module('StarterApp', ['ngMaterial'])
    .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('indigo');
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);
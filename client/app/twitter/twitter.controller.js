var app = angular.module('StarterApp');
app.controller('TwitterController', function($scope){
    $scope.world = 'world';
    $scope.twittes = [];

    $scope.socket = io();
    $scope.socket.on('ping', function (data) {
            $scope.twittes.unshift(data);
            $scope.$digest();
        }
    );

});
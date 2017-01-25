'use strict';

angular.module('Researchers', ['Core'])
    .config(function($stateProvider) {
        $stateProvider
            .state('researchers', {
                url: "/new",
                templateUrl: "researchers/edit.html",
                controller: 'researchers.new'
            });
    });


angular.module('Button',['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

angular.module('Input',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('InputCtrl', function($scope) {
        $scope.project = {
            description: 'Nuclear Missile Defense System',
            rate: 500
        };
    });

angular.module('Date',['ngMaterial', 'ngMessages', 'material.svgAssetsCache']).controller('AppCtrl', function($scope) {
    $scope.myDate = new Date();

    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 2,
        $scope.myDate.getDate());

    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 2,
        $scope.myDate.getDate());

    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    };
});
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

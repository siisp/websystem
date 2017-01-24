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


angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);
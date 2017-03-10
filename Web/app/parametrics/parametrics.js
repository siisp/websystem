'use strict';

angular.module('Parametrics', ['Core'])
    .config(function($stateProvider) {
        $stateProvider
            .state('parametrics', {
                url: "/parametrics",
                abstract: true,
                template: "<ui-view />"
            })
            .state('parametrics.home', {
                url: "/",
                templateUrl: "parametrics/index.html",
                controller: "parametrics.index"
            })
    });
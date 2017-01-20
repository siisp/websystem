'use strict';

angular.module('Researchers', ['Core'])
    .config(function($stateProvider) {
        $stateProvider
            .state('researchers', {
                url: "/researchers",
                abstract: true,
                template: "<ui-view />"
            })
            .state('researchers.list', {
                url: "/",
                templateUrl: "researchers/index.html",
                controller: 'researchers.list'
            })
            .state('researchers.new', {
                url: "researchers/new",
                templateUrl: "researchers/edit.html",
                controller: 'researchers.new'
            });
    });

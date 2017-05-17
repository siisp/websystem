'use strict';

angular.module('Researchers', ['Core', 'Parametrics'])
    .config(function($stateProvider) {
        $stateProvider
            .state('researchers', {
                url: "/researchers",
                abstract: true,
                template: "<ui-view />"
            })
            .state('researchers.list', {
                url: "/",
                templateUrl: "researchers/index.html"
            })
            .state('researchers.new', {
                url: "/new",
                templateUrl: "researchers/edit.html",
                controller: 'researchers.new'
            })
            .state('researchers.edit', {
                url: "/edit/{id}",
                templateUrl: "researchers/edit.html",
                controller: 'researchers.new'
            })
            .state('researchers.view', {
                url: "/view/{id}",
                templateUrl: "researchers/view.html",
                controller: 'researchers.view'
            })
    });
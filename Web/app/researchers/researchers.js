'use strict';

angular.module('Researchers', ['Core'])
    .config(function($stateProvider) {
        $stateProvider
            .state('researchers', {
                url: "/new",
                templateUrl: "researchers/edit.html",
                controller: 'researchers.new'
            })
            .state('researchers.list', {
                url: "/",
                templateUrl: "researchers/index.html",
                controller: 'researchers.list'
            })
            .state('researchers.edit', {
                url: "/edit/{id}",
                templateUrl: "researchers/edit.html",
                controller: 'researchers.edit'
            })
    });






'use strict';

angular.module('Convocatories', ['Core'])
    .config(function($stateProvider) {
        $stateProvider
            .state('convocatories', {
                url: "/convocatories",
                abstract: true,
                template: "<ui-view />"
            })
            .state('convocatories.home', {
                url: "/",
                templateUrl: "convocatories/index.html",
                controller: "convocatories.index"
            })
            .state('convocatories.new', {
                url: "/new",
                templateUrl: "convocatories/edit.html",
                controller: 'convocatories.new'
            })
            .state('convocatories.edit', {
                url: "/edit/{id}",
                templateUrl: "convocatories/edit.html",
                controller: 'convocatories.new'
            })
    });
angular.module('Projects', ['Core', 'Convocatories'])
    .config(function($stateProvider) {
        $stateProvider
            .state('projects', {
                url: "/projects",
                abstract: true,
                template: "<ui-view />"
            })
            .state('projects.home', {
                url: "/",
                templateUrl: "projects/index.html",
                controller: "projects.index"
            })
            .state('projects.new', {
                url: "/new/{idConvocatory}",
                templateUrl: "projects/edit.html",
                controller: 'projects.new'
            })
            .state('projects.edit', {
                url: "/edit/{id}",
                templateUrl: "projects/edit.html",
                controller: 'projects.new'
            })
    });
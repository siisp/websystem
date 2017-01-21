'use strict';

angular.module('Researchers', ['Core'])
    .config(function($stateProvider) {
        $stateProvider
            .state('researchers', {
                url: "/researchers",
                abstract: true,
                template: "<ui-view />"
            });
    });

'use strict';

angular.module('Researchers', ['Core'])
    .config(function($stateProvider) {
        $stateProvider
            .state('researchers.new', {
                url: "/reserchers",
                templateUrl: "researchers/edit.html",
                controller: 'researchers.new'
            });
    });



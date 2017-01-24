'use strict';

angular.module('Researchers')
    .controller('researchers.new', ['$scope', '$controller',
        function($scope, $controller){
            //public
            $state.go('/researchers/edit.html');

            $controller('researchersCtrl', { $scope: $scope });
        }
    ]);

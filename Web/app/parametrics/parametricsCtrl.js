'use strict';

angular.module('Parametrics')
    .controller('parametrics.new', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function()
            {
                $scope.parametricEditing = {};
            }
            $scope.save = function()
            {
                $scope.parametricSaved = false;
                parametricService.save($scope.parametricEditing, onResearcherSaved);
            }
            var onParametricSaved = function()
            {
                $scope.researcherSaved = true;
                $scope.$apply();
            }
            $scope.setup();
        }
    ]);

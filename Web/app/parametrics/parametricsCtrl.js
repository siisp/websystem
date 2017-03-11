'use strict';

angular.module('Parametrics')
    .controller('parametrics.index', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function()
            {
                $scope.parametricTypeSelected = null;
                $scope.parametricTypes = parametricService.getParametricTypes();
                $scope.parametricEditing = {id:null};
                $scope.parametricSaved = false;
                cleanParametricEditingForm();
                parametricService.getParametrics(refreshParametrics);
            }
            $scope.save = function()
            {
                $scope.parametricSaved = false;
                parametricService.saveParametric($scope.parametricTypeSelected,$scope.parametricEditing, onParametricSaved);
            }

            $scope.saveEditing = function()
            {
                console.log($scope.parametricEditingForm.parametricEditing);
                parametricService.saveParametric($scope.parametricTypeSelected,$scope.parametricEditingForm.parametricEditing, onParametricEditUpdated);
            }

            $scope.cancelEditing = function()
            {
                cleanParametricEditingForm();
            }

            $scope.edit = function(parametric)
            {
                $scope.parametricEditingForm.parametricEditing = angular.copy(parametric);
            }

            var onParametricSaved = function()
            {
                $scope.parametricSaved = true;
                $scope.parametricEditing = {id:null};
                $scope.$apply();
            },
                refreshParametrics = function(parametrics)
                {
                    $scope.parametrics = parametrics;
                },
                cleanParametricEditingForm = function(){
                    $scope.parametricEditingForm = {parametricEditing : {id :null}};
                },
                onParametricEditUpdated = function()
                {
                    cleanParametricEditingForm();
                    $scope.$apply();
                }
            $scope.setup();
        }
    ]);

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
                parametricService.save($scope.parametricEditing, onParametricSaved);
            }
            var onParametricSaved = function()
            {
                $scope.parametricSaved = true;
                $scope.$apply();
            }
            $scope.setup();
        }
    ]);


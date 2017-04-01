'use strict';

angular.module('Parametrics')
    .controller('parametrics.index', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function()
            {
                $scope.parametricTypeSelected = null;
                $scope.parametricTypes = parametricService.getParametricTypes();
                parametricService.getParametrics(refreshParametrics);
            }
            var refreshParametrics = function(parametrics)
                {
                    $scope.parametrics = parametrics;
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
                $scope.parametricSaved = false;
                $scope.isNewParametric = true;
            }
            $scope.save = function()
            {
                $scope.parametricSaved = false;
                parametricService.saveParametric($scope. parametricTypeSelected,$scope.parametricEditing, onParametricSaved);
                setNewParametric();
            }
            $scope.parametricValidation = function(parametricType){
                $scope.isNewParametric = true;
                for (var key in $scope.parametrics[parametricType]) {
                    if($scope.parametrics[parametricType][key].name == $scope.parametricEditing.name)
                    {
                        $scope.isNewParametric = false;
                    }else{
                        $scope.isNewParametric = true;
                    }
                }
            }
            var onParametricSaved = function()
            {
                $scope.parametricSaved = true;
                $scope.$apply();
            },
                setNewParametric = function(){
                    $scope.parametricEditing = {id :null};
                }
            $scope.setup();
        }
    ]);

angular.module('Parametrics')
    .controller('parametrics.editInLine', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function ()
            {
                $scope.parametricEditing = {id:null};
                cleanParametricEditingForm();
            }
            $scope.saveEditing = function()
            {
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
            $scope.deleteParametric = function (parametricType, parametric) {
                parametricService.removeParametric(parametricType, parametric);
            }
            var onParametricEditUpdated = function()
                {
                    cleanParametricEditingForm();
                    $scope.$apply();
                },
                cleanParametricEditingForm = function(){
                    $scope.parametricEditingForm = {parametricEditing : {id :null}};
                }
            $scope.setup();
        }]);

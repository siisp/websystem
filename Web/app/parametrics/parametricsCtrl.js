'use strict';

angular.module('Parametrics')
    .controller('parametrics.index', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function()
            {
                $scope.parametricTypeSelected = null;
                $scope.parametricsSelectedToEdit = {};
                $scope.parametricTypes = parametricService.getParametricTypes();
                $scope.secretaryshipDepartmentSelected=null;
                $scope.careerSelected=null;
                parametricService.getParametrics(refreshParametrics);
            }
            
            $scope.changeParametricsToEdit = function()
            {
                if ($scope.parametricTypeSelected == null || $scope.parametricTypeSelected == 'career')
                {
                    $scope.parametricsSelectedToEdit = {};
                }else 
                {
                    $scope.parametricsSelectedToEdit = $scope.parametrics[$scope.parametricTypeSelected];
                }
            }

            $scope.secretaryshipDepartmentChanged=function()
            {
                $scope.parametricsSelectedToEdit = $scope.parametrics['secretaryshipDepartment'][$scope.secretaryshipDepartmentSelected].careers;
            }
            $scope.careerChanged=function()
            {
                $scope.parametricsSelectedToEdit = $scope.parametrics['secretaryshipDepartment'][$scope.secretaryshipDepartmentSelected].careers[$scope.careerSelected].subjects;
            }

            $scope.getParametricPathReference = function(){
                var pathReference = $scope.parametricTypeSelected;
                if($scope.parametricTypeSelected == 'career')
                {
                    pathReference = 'secretaryshipDepartment/'+$scope.secretaryshipDepartmentSelected+'/careers';
                }
                if($scope.parametricTypeSelected == 'subject')
                {
                    pathReference = 'secretaryshipDepartment/'+$scope.secretaryshipDepartmentSelected+'/careers/'+$scope.careerSelected+'/subjects';
                }
                return pathReference;
            }
            var refreshParametrics = function(parametrics)
            {
                $scope.parametrics = parametrics;
                $scope.changeParametricsToEdit();
                if($scope.parametricTypeSelected == 'career')
                {
                    $scope.secretaryshipDepartmentChanged();
                }
                if($scope.parametricTypeSelected == 'subject')
                {
                    $scope.careerChanged();
                }
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
                $scope.composedParametricEditing = {};
                $scope.parametricSaved = false;
                $scope.isNewParametric = true;
            }
            $scope.save = function()
            {
                $scope.parametricSaved = false;
                parametricService.saveParametric($scope.getParametricPathReference(),$scope.parametricEditing, onParametricSaved);
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
                setNewParametric();
                $scope.$apply();
            },
                setNewParametric = function(){
                    $scope.parametricEditing = {};
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
                parametricService.saveParametric($scope.getParametricPathReference(),$scope.parametricEditingForm.parametricEditing, onParametricEditUpdated);
            }
            $scope.cancelEditing = function()
            {
                cleanParametricEditingForm();
            }

            $scope.edit = function(parametric)
            {
                $scope.parametricEditingForm.parametricEditing = angular.copy(parametric);
            }
            $scope.deleteParametric = function (parametric) {
                var pathReference = $scope.parametricTypeSelected;
                if($scope.parametricTypeSelected == 'career')
                {
                    pathReference = 'secretaryshipDepartment/'+$scope.secretaryshipDepartmentSelected+'/careers';
                }
                if($scope.parametricTypeSelected == 'subject')
                {
                    pathReference = 'secretaryshipDepartment/'+$scope.secretaryshipDepartmentSelected+'/careers/'+$scope.careerSelected+'/subjects';
                }

                parametricService.removeParametric(pathReference, parametric);
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

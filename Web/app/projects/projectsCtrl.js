'use strict';

angular.module('Projects')
    .controller('projects.index', ['$scope', 'convocatoryService',
        function ($scope, convocatoryService) {
            $scope.setup = function()
            {
                loadConvocatories();
                $scope.convocatorySelected = null;
            };

            $scope.changeConvocatoriesToEdit = function()
            {
                setProjectsToListAndEdit();
            };

            var loadConvocatories = function () {
                    convocatoryService.getConvocatories(refreshConvocatories);
                },
                refreshConvocatories = function (convocatories) {
                    $scope.convocatories = convocatories;
                    $scope.$apply();
                },
                setProjectsToListAndEdit = function(){
                    $scope.projects =  isNullOrUndefined($scope.convocatories[$scope.convocatorySelected].projects) ? {} : $scope.convocatories[$scope.convocatorySelected].projects;
                };
            $scope.setup();
        }
    ]);

angular.module('Projects')
    .controller('projects.list', ['$scope',
        function ($scope) {
            $scope.setup = function()
            {
            }
        }
    ]);

angular.module('Projects')
    .controller('projects.projectData', ['$scope',
        function ($scope) {
            $scope.setup = function()
            {
            }
        }
    ]);

angular.module('Projects')
    .controller('projects.new', ['$scope','convocatoryService','parametricService','projectService','$stateParams',
        function ($scope, convocatoryService, parametricService,projectService, $stateParams) {
            $scope.setup = function()
            {
                if (isAddingANewProject()) {
                    $scope.projectEditing = {
                        id: null
                    };
                } else {
                    projectService.getProject($stateParams.idConvocatory, $stateParams.id, setProjectsToEdit);
                }
                $scope.projectSaved = false;
                loadConvocatories();
                loadParametrics();
                $scope.binarySeletions = [{name:'Si', value:true},{name:'No', value:false}];
                $scope.reports = ['Aprobado', 'En Observación', 'Desaprobado'];
            };
            $scope.save = function () {
                $scope.researcherSaved = false;
                console.log($stateParams.idConvocatory);
                projectService.save($stateParams.idConvocatory, $scope.projectEditing, onProjectSaved);
            };
            var loadConvocatories = function () {
                    convocatoryService.getConvocatories(refreshConvocatories);
                },
                refreshConvocatories = function (convocatories) {
                    $scope.convocatories = convocatories;
                    $scope.$apply();
                },
                loadParametrics = function () {
                parametricService.getParametrics(refreshParametrics);
                }, 
                refreshParametrics = function (parametrics) {
                $scope.parametrics = parametrics;
                },
                isAddingANewProject=function () {
                return $stateParams.id == undefined;
                },
                setProjectsToEdit = function (project) {
                    $scope.projectEditing = project;
                },
                onProjectSaved = function () {
                    $scope.projectSaved = true;
                    if(isAddingANewProject())
                    {
                        $stateParams.id = $scope.projectEditing.id;
                        projectService.getproject($scope.convocatorySelected,$scope.projectEditing.id, setProjectsToEdit);
                    }
                    else
                    {
                        $scope.$apply();
                    }
                };
            $scope.setup();
        }
    ]);
'use strict';

angular.module('Projects')
    .controller('projects.index', ['$scope', 'convocatoryService','parametricService',
        function ($scope, convocatoryService, parametricService) {
            $scope.setup = function()
            {
                loadConvocatories();
                loadParametrics();
                $scope.convocatorySelected = null;
            };

            $scope.changeConvocatoriesToEdit = function()
            {
                setProjectsToListAndEdit();
            };

            var loadParametrics = function () {
                    parametricService.getParametrics(refreshParametrics);
                },
                refreshParametrics = function (parametrics) {
                    $scope.parametrics = parametrics;
                },
                loadConvocatories = function () {
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
                    console.log($stateParams.idProject+"hola");
                    console.log($stateParams.idConvocatory+"chau");
                    projectService.getProject($stateParams.idConvocatory, $stateParams.idProject, setProjectsToEdit);
                }
                $scope.projectSaved = false;
                loadConvocatories();
                loadParametrics();
                $scope.binarySeletions = [{name:'Si', value:true},{name:'No', value:false}];
                $scope.reports = ['Aprobado', 'En Observación', 'Desaprobado'];
            };
            $scope.save = function () {
                $scope.projectSaved  = false;
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
                return $stateParams.idProject == undefined;
                },
                setProjectsToEdit = function (project) {
                    $scope.projectEditing = project;
                },
                onProjectSaved = function () {
                    $scope.projectSaved = true;
                    if(isAddingANewProject()) {
                        $stateParams.idProject = $scope.projectEditing.id;
                        projectService.getProject($stateParams.idConvocatory, $scope.projectEditing.id, setProjectsToEdit);
                    }
                    $scope.$apply();
                };
            $scope.setup();
        }
    ]);

angular.module('Projects')
    .controller('projects.otherProducts', ['$scope', 'projectService','$stateParams',
        function ($scope, projectService, $stateParams) {
            $scope.setup = function()
            {
                $scope.binaryProductSeletions = [{name:'Si', value:true},{name:'No', value:false}];
                $scope.productTypes = [{name:'Artículo', value:'article'},{name:'Ponencia', value:'lecture'}, {name:'Parte de Libro', value:'bookPart'}];
                $scope.origins = [{name:'Nacional', value:'national'},{name:'Internacional', value:'international'}];
                $scope.productType = null;
                $scope.productEditing = {};
                $scope.productEditingExisting = false;
                $scope.productSaved = false
            };
            $scope.addNewProduct = function () {
                projectService.addProduct($stateParams.idConvocatory, $scope.projectEditing, $scope.productEditing, onProductUpdated);
                console.log($scope.productSaved)
            };
            $scope.edit = function(product)
            {
                $scope.productSaved = false;
                $scope.productEditing = angular.copy(product);
                $scope.productEditingExisting = true;
            };

            var onProductUpdated = function () {
                $scope.productSaved  = true;
                $scope.productEditingExisting = false;
                $scope.productEditing = {id: null};
                $scope.$apply();
            };

           
            $scope.setup();
        }
    ]);
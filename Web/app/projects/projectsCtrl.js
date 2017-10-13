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
    .controller('projects.projectDepartment', ['$scope','$stateParams', 'projectService',
        function ($scope, $stateParams, projectService) {
            $scope.setup = function()
            {
                $scope.departmentSaved  = false;
            };
            $scope.addNewDepartment = function () {
                $scope.departmentSaved  = false;

                projectService.addDepartment($stateParams.idConvocatory,  $scope.projectEditing, $scope.parametrics['secretaryshipDepartment'][$scope.secretaryshipDepartment], onDepartmentSaved);
            };
            $scope.deleteDepartment = function (department) {
                projectService.removeDepartment($stateParams.idConvocatory,$scope.projectEditing, department);
            };
            var onDepartmentSaved = function () {
                $scope.departmentSaved = true;
                $scope.secretaryshipDepartment = null;
                $scope.$apply();
            };
        }
    ]);

angular.module('Projects')
    .controller('projects.projectFoudingSource', ['$scope','$stateParams', 'projectService',
        function ($scope, $stateParams, projectService) {
            $scope.setup = function()
            {
                $scope.fundingSourceSaved  = false;
                $scope.fundingSourceEditing = {};
                $scope.fundingSourceEditingExisting = false;
                $scope.totalAmountOfSubsidies = ['Recursos', 'Propio', 'Externo', 'Presupuestación', 'Nacional'];
            };
            $scope.addNewFundingSource = function () {
                $scope.departmentSaved  = false;
                projectService.addFundingSource($stateParams.idConvocatory,  $scope.projectEditing, $scope.fundingSourceEditing, onFundingSourceSaved);
            };
            $scope.deleteFundingSource = function (fundingSource) {
                projectService.removeFundingSource($stateParams.idConvocatory,$scope.projectEditing, fundingSource);
            };
            $scope.edit = function(fundingSource)
            {
                $scope.fundingSourceSaved = false;
                $scope.fundingSourceEditing = angular.copy(fundingSource);
                $scope.fundingSourceEditingExisting = true;
            };
            $scope.cancelEdition = function () {
                $scope.fundingSourceEditingExisting = false;
                $scope.fundingSourceEditing = {id: null};
            };
            var onFundingSourceSaved = function () {
                $scope.fundingSourceSaved = true;
                $scope.fundingSourceEditing = {id: null};
                $scope.$apply();
            };
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
                    projectService.getProject($stateParams.idConvocatory, $stateParams.idProject, setProjectsToEdit);
                }
                $scope.projectSaved = false;
                loadConvocatories();
                loadParametrics();
                $scope.binarySeletions = [{name:'Si', value:true},{name:'No', value:false}];
                $scope.reports = ['Aprobado', 'En Observación', 'Desaprobado'];
                $scope.investigactionTypes = ['Experimental', 'Aplicada', 'Básica'];
                $scope.socioEconomicObjectives = [
                    'Exploración y Explotación de la tierra',
                    'Infraestructuras y Ordenación del territorio',
                    'Control y Protección del medio ambiente',
                    'Protección y Mejora de la salud humana',
                    'Producción, Distribución y Utilización nacional de la energía',
                    'Producción y Tecnología agrícola',
                    'Producción y Tecnología industrial',
                    'Estructuras y Relaciones sociales',
                    'Exploración y Explotación del espacio',
                    'Investigación no orientada',
                    'Otra Investigación civil',
                    'Defensa'];
                $scope.fieldOfApplications = [
                    'Química, Petroquímica y Carboquímica',
                    'Desarrollo Industrial y Tecnológico',
                    'Salud Humana',
                    'Agricultura, Ganadería y Pesca',
                    'Desarrollo del Transporte',
                    'Energía, Recursos naturales y Minería',
                    'Alimentos, Bebidas y Tabaco',
                    'Textiles, Vestidos y Cuero',
                    'Desarrollo socioeconómico, Educación y Servicios',
                    'Mobiliario, Metalurgia, Productos metálicos y Equipo',
                    'Calulosa, Papel, Impresión y Encuadernación',
                    'Control y Protección del medio ambiente',
                    'Ordenamiento Territorial'];
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
                $scope.productSaved = false;
            };
            $scope.addNewProduct = function () {
                projectService.addProduct($stateParams.idConvocatory, $scope.projectEditing, $scope.productEditing, onProductUpdated);
            };
            $scope.deleteProduct = function (product) {
                projectService.removeProduct($stateParams.idConvocatory, $scope.projectEditing, product);
            };
            $scope.edit = function(product)
            {
                $scope.productSaved = false;
                $scope.productEditing = angular.copy(product);
                $scope.productEditingExisting = true;
            };
            
            $scope.permissionToSave = function () {
                $scope.productSaved  = false;
                $scope.$apply();
            }
            var onProductUpdated = function () {
                $scope.productSaved  = true;
                $scope.productEditingExisting = false;
                $scope.productEditing = {id: null};
                $scope.$apply();
            };

           
            $scope.setup();
        }
    ]);
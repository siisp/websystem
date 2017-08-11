'use strict';

angular.module('Researchers')
    .controller('researchers.new', ['$scope', '$stateParams', 'researcherService','parametricService',
        function ($scope, $stateParams, researcherService, parametricService) {
            $scope.setup = function () {
                if (isAddingANewResearcher()) {
                    $scope.researcherEditing = {
                        id: null,
                        profilePhoto: null,
                        formations: null,
                        positions: null
                    };
                } else {
                    researcherService.getResearcher($stateParams.id, setResearchersToEdit);
                }
                $scope.researcherSaved = false;
                $scope.cuilRegExpr = '^\\d{2}-\\d{8}-\\d{1}$';
                loadParametrics();
            }
            $scope.save = function () {
                $scope.researcherSaved = false;
                researcherService.save($scope.researcherEditing, onResearcherSaved);
            }

            $scope.secretaryshipDepartmentChanged = function()
            {
                $scope.positionEditing.career = null;
                $scope.positionEditing.subject = null;
            }

            $scope.careerChanged = function()
            {
                $scope.positionEditing.subject = null;
            }

            var onResearcherSaved = function () {
                $scope.researcherSaved = true;
                if(isAddingANewResearcher())
                {
                    $stateParams.id = $scope.researcherEditing.id;
                    researcherService.getResearcher($scope.researcherEditing.id, setResearchersToEdit);
                }
                else
                {
                    $scope.$apply();
                }
            }
            var setResearchersToEdit = function (researcher) {
                $scope.researcherEditing = researcher;
            }

            var loadParametrics = function () {
                parametricService.getParametrics(refreshParametrics);
            }
            var refreshParametrics = function (parametrics) {
                $scope.parametrics = parametrics;
            }

            var isAddingANewResearcher=function () {
                return $stateParams.id == undefined;
            }

            $scope.setup();
        }
    ]);


angular.module('Researchers')
    .controller('researchers.personalData', ['$scope', 'researcherService',
        function ($scope,  researcherService) {
            $scope.setup = function () {
                $scope.uploadProfilePhotoIndicator = {percentageCompleted: 0, completed: true};
                $scope.researchersList = {};
                $scope.isNewDni = true;
                loadResearchers();
            }
            var loadResearchers = function () {
                    researcherService.getResearchers(refreshResearchers);
                },
                refreshResearchers = function (researchers) {
                    if (researchers == null || Object.keys(researchers).length == 0) {
                        $scope.researchersList = null;
                    } else {
                        $scope.researchersList = researchers;
                    }
                };
            $scope.dniValidation = function(dni){
                $scope.isNewDni = true;
                for (var key in $scope.researchersList) {
                    if($scope.researchersList[key].dni == dni){
                        $scope.isNewDni = false;
                    }
                }
            }
            $scope.setProfilePhoto = function (file) {
                if (file) {
                    $scope.uploadProfilePhotoIndicator.completed = false;
                    researcherService.setProfilePhoto($scope.researcherEditing, file, $scope.uploadProfilePhotoIndicator,
                        onProfilePhotoUpdated, onUploadingProfilePhotoError);
                }
            }
            var onProfilePhotoUpdated = function () {
                    $scope.uploadProfilePhotoIndicator = {percentageCompleted: 0, completed: true};
                    $scope.$apply();
                },
                onUploadingProfilePhotoError = function (error) {
                    console.log(error);
                };
        }
    ]);

angular.module('Researchers')
    .controller('researchers.formation', ['$scope','researcherService',
        function ($scope, researcherService) {
            $scope.setup = function()
            {
                $scope.formationSaved = false;
                $scope.formationTypes = ["Grado","Posgrado"];
                $scope.studiesStates = [{name:'En curso', value:false},{name:'Terminado', value:true}];
                $scope.categorizationUniversities=["I","II","III","IV","V"];
                $scope.formationEditing = {id: null};
                $scope.formationEditingExisting = false;
            }
            $scope.addNewFormation = function () {
                researcherService.addFormation($scope.researcherEditing, $scope.formationEditing, onFormationUpdated);
            };
            $scope.cancelEdition = function () {
                $scope.formationEditingExisting = false;
                $scope.formationEditing = {id: null};
            };
            $scope.edit = function(formation)
            {
                $scope.formationSaved = false;
                $scope.formationEditing = angular.copy(formation);
                $scope.formationEditingExisting = true;
            }
            $scope.deleteFormation = function (formation) {
                researcherService.removeFormation($scope.researcherEditing, formation);
            }
            $scope.degreeAreaChanged = function () {
                $scope.formationEditing.career = null;
            }
            var onFormationUpdated = function () {
                    $scope.formationSaved = true;
                    $scope.formationEditingExisting = false;
                    $scope.formationEditing = {id: null};
                    $scope.$apply();
                }
        }
    ]);

angular.module('Researchers')
    .controller('researchers.idUndav', ['$scope', 'researcherService', 'parametricService',
        function ($scope, researcherService, parametricService) {
            $scope.setup = function()
            {
                parametricService.getParametrics(refreshEducationParametrics);
                $scope.fechaRegExpr = '^\\d{1,2}-\\d{1,2}-\\d{4}$';
                $scope.positionEditing = {id: null};
                $scope.positionSaved = false;
                $scope.licenses = [{name:'Si', value:true},{name:'No', value:false}];
                $scope.positionEditingExisting = false;
            }
            $scope.cancelEdition = function () {
                $scope.positionEditingExisting = false;
                $scope.positionEditing = {id: null};
            };
            $scope.addNewPosition = function () {
                if($scope.positionEditing.license == 'false')
                {
                    $scope.positionEditing.licenseDate = null;
                    $scope.positionEditing.resolution = null;
                }

                researcherService.addPosition($scope.researcherEditing, $scope.positionEditing, onPositionUpdated);
            };

            $scope.edit = function(position)
            {
                $scope.positionSaved = false;
                $scope.positionEditing = angular.copy(position);
                $scope.positionEditingExisting = true;
            }
            
            $scope.deletePosition = function (position) {
                researcherService.removePosition($scope.researcherEditing, position);
            }
            var onPositionUpdated = function () {
                    $scope.positionSaved = true;
                    $scope.positionEditingExisting = false;
                    $scope.positionEditing = {id: null};
                    $scope.$apply();
                },
                refreshEducationParametrics = function(parametrics)
                {
                    $scope.positionTypes = parametrics.positionType;
                    $scope.modalities = parametrics.modality;
                    $scope.idDedications = parametrics.idDedication;
                }
        }
    ]);

angular.module('Researchers')
    .controller('researchers.list', ['$scope', 'researcherService', 'parametricService', function($scope, researcherService, parametricService) {
        $scope.setup = function () {
            $scope.firstTime = true;
            loadResearchers();
            loadParametrics();
            $scope.readOnlyMode = false;
            $scope.currentPage = 0;
            $scope.pageSize = 10;
            $scope.pages = [];
        };
        var loadResearchers = function () {
            researcherService.getResearchers(refreshResearchers);
        },
        refreshResearchers = function(researchers){
           if(researchers == null || Object.keys(researchers).length==0){
               $scope.researchers = null;
           }else{
               $scope.researchers = researchers;
               $scope.configPages();
           }
           if($scope.firstTime)
           {
               $scope.$apply();
               $scope.firstTime = false;
           }
        }
        var loadParametrics = function () {
            parametricService.getParametrics(refreshParametrics);
        }
        var refreshParametrics = function (parametrics) {
            $scope.parametrics = parametrics;
            $scope.positionTypes = parametrics.positionType;
        }

        //pagination

        $scope.configPages = function() {
            $scope.pages.length = 0;
            var ini = $scope.currentPage - 4;
            var fin = $scope.currentPage + 5;
            if($scope.researchers != null || $scope.researchers != undefined){
                if (ini < 1) {
                    ini = 1;
                    if (Math.ceil(Object.keys($scope.researchers).length / $scope.pageSize) > 10)
                        fin = 10;
                    else
                        fin = Math.ceil(Object.keys($scope.researchers).length  / $scope.pageSize);
                } else {
                    if (ini >= Math.ceil(Object.keys($scope.researchers).length  / $scope.pageSize) - 10) {
                        ini = Math.ceil(Object.keys($scope.researchers).length / $scope.pageSize) - 10;
                        fin = Math.ceil(Object.keys($scope.researchers).length  / $scope.pageSize);
                    }
                }
                if (ini < 1) ini = 1;
                for (var i = ini; i <= fin; i++) {
                    $scope.pages.push({
                        no: i
                    });
                }

                if ($scope.currentPage >= $scope.pages.length)
                    $scope.currentPage = $scope.pages.length - 1;
            }
        };

        $scope.setPage = function(index) {
            $scope.currentPage = index - 1;
        };
    }
]);

angular.module('Researchers')
    .controller('researchers.view', ['$scope', '$stateParams', 'researcherService','parametricService',
        function ($scope, $stateParams, researcherService, parametricService) {
            $scope.setup = function () {
                $scope.readOnlyMode = true;
                researcherService.getResearcher($stateParams.id, setResearchersToEdit);
                loadParametrics();
            };
            var setResearchersToEdit = function (researcher) {
                $scope.researcherEditing = researcher;
            };
            var loadParametrics = function () {
                parametricService.getParametrics(refreshParametrics);
            };
            var refreshParametrics = function (parametrics) {
                $scope.parametrics = parametrics;
                $scope.positionTypes = parametrics.positionType;
            }
        }
    ]);

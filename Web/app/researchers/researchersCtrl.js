'use strict';

angular.module('Researchers')
    .controller('researchers.new', ['$scope', '$stateParams', 'researcherService','parametricService',
        function ($scope, $stateParams, researcherService, parametricService) {
            $scope.setup = function () {
                $scope.isNew = $stateParams.id == undefined;
                if (!$scope.isNew) {
                    researcherService.getResearcher($stateParams.id, setResearchersToEdit);
                } else {
                    $scope.researcherEditing = {
                        id: null,
                        profilePhoto: null,
                        formations: null,
                        radications: null
                    };
                }
                $scope.researcherSaved = false;
                $scope.cuilRegExpr = '^\\d{2}-\\d{8}-\\d{1}$';
                $scope.currentTabNeedSaveButton = true;
                loadParametrics();
            }
            $scope.save = function () {
                $scope.researcherSaved = false;
                researcherService.save($scope.researcherEditing, onResearcherSaved);
            }

            $scope.showSaveButton = function(value)
            {
                $scope.currentTabNeedSaveButton = value;
            }
            var onResearcherSaved = function () {
                $scope.researcherSaved = true;
                $scope.$apply();
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
    .controller('researchers.education', ['$scope','researcherService',
        function ($scope, researcherService) {
            $scope.setup = function()
            {
                $scope.formationSaved = false;
                $scope.educationTypes = ["Grado","Posgrado"];
                $scope.studiesStates = [{type:'En curso', name:false},{type:'Terminado', name:true}];
                $scope.formationEditing = {id: null};
                cleanFormationEditingForm();
            }
            $scope.editNewFormation = function () {
                $scope.formationEditing = {id: null};
                $scope.formationSaved = false;
            };
            $scope.addNewFormation = function () {
                researcherService.addFormation($scope.researcherEditing, $scope.formationEditing, onFormationUpdated);
            };
            $scope.saveEditing = function()
            {
                researcherService.addFormation($scope.researcherEditing, $scope.formationEditingForm.formationEditing, onFormationEditUpdated);
            }
            $scope.cancelEditing = function()
            {
                cleanFormationEditingForm();
            }
            $scope.edit = function(formation)
            {
                $scope.formationEditingForm.formationEditing = angular.copy(formation);
            }
            $scope.deleteFormation = function (formation) {
                researcherService.removeFormation($scope.researcherEditing, formation);
            }
            var cleanFormationEditingForm = function(){
                    $scope.formationEditingForm = {formationEditing : {id :null}};
                },
                onFormationEditUpdated = function()
                {
                    cleanFormationEditingForm();
                    $scope.$apply();
                },
                onFormationUpdated = function () {
                    $scope.formationSaved = true;
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
                $scope.radicationEditing = {id: null};
                $scope.radicationSaved = false;
                cleanRadicationEditingForm();
            }
            $scope.editNewRadication = function () {
                $scope.radicationEditing = {id: null};
                $scope.radicationSaved = false;
            };
            $scope.addNewRadication = function () {
                researcherService.addRadication($scope.researcherEditing, $scope.radicationEditing, onRadicationUpdated);
            };

            $scope.saveEditing = function()
            {
                researcherService.addRadication($scope.researcherEditing, $scope.radicationEditingForm.radicationEditing, onRadicationEditUpdated);
            }

            $scope.cancelEditing = function()
            {
                cleanRadicationEditingForm();
            }

            $scope.edit = function(radication)
            {
                $scope.radicationEditingForm.radicationEditing = angular.copy(radication);
            }
            $scope.deleteRadication = function (radication) {
                researcherService.removeRadication($scope.researcherEditing, radication);
            }
            var onRadicationUpdated = function () {
                    $scope.radicationSaved = true;
                    $scope.$apply();
                },
                onRadicationEditUpdated = function()
                {
                    cleanRadicationEditingForm();
                    $scope.$apply();
                },
                cleanRadicationEditingForm = function(){
                    $scope.radicationEditingForm = {radicationEditing : {id :null}};
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
    .controller('researchers.list', ['$scope', 'researcherService', function($scope, researcherService) {
        $scope.setup = function () {
            $scope.firstTime = true;
            loadResearchers();
        };
        var loadResearchers = function () {
            researcherService.getResearchers(refreshResearchers);
        },
        refreshResearchers = function(researchers){
           if(researchers == null || Object.keys(researchers).length==0){
               $scope.researchers = null;
           }else{
               $scope.researchers = researchers;
           }
           if($scope.firstTime)
           {
               $scope.$apply();
               $scope.firstTime = false;
           }
        }
    }
]);


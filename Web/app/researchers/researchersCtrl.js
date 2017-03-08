'use strict';

angular.module('Researchers')
    .controller('researchers.new', ['$scope', '$stateParams', 'researcherService',
        function ($scope, $stateParams, researcherService) {
            $scope.setup = function()
            {
                var isNew=$stateParams.id==undefined;
                if(!isNew){
                    researcherService.getResearcher($stateParams.id, setResearchersToEdit);
                }else{
                    $scope.researcherEditing = {
                        id: null,
                        profilePhoto: null,
                        formations: new Array()
                    };
                }
                $scope.researcherSaved = false;
                $scope.cuilRegExpr = '^\\d{2}-\\d{8}-\\d{1}$';
                $scope.newReasearcher = isNew;
            }
            $scope.save = function()
            {
                    $scope.researcherSaved = false;
                    researcherService.save($scope.researcherEditing, onResearcherSaved);
            }
            var onResearcherSaved = function()
            {
                $scope.researcherSaved = true;
                $scope.$apply();
            }
            var setResearchersToEdit = function(researcher) {
                $scope.researcherEditing = researcher;
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
                    console.log($scope.isNewDni);
                }
            }
            $scope.setProfilePhoto = function (file) {
                console.log(file);
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
    .controller('researchers.education', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function()
            {
                $scope.formationEditing = {};
                parametricService.getParametrics(refreshEducationParametrics);
            }
            var refreshEducationParametrics = function(parametrics)
            {
                $scope.degreeAreas = parametrics.degreeArea;
                $scope.academicDegrees = parametrics.academicDegree;
                $scope.studiesStates = parametrics.studiesState;
                $scope.educationTypes = parametrics.educationType;
                $scope.scolarshipTypes = parametrics.scolarshipType;
                $scope.scolarshipNames = parametrics.scolarshipName;
            }

            $scope.editNewFormation = function () {
                $scope.formationEditing = {id: null};
            };

            $scope.addNewFormation = function () {
                $scope.researcherEditing.formations.push($scope.formationEditing);
            };
        }
    ]);

angular.module('Researchers')
    .controller('researchers.undavData', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function()
            {
                parametricService.getParametrics(refreshEducationParametrics);
                $scope.fechaRegExpr = '^\\d{1,2}-\\d{1,2}-\\d{4}$';
            }
            var refreshEducationParametrics = function(parametrics)
            {
                $scope.positionTypes = parametrics.positionType;
                $scope.modalities = parametrics.modality;
                $scope.idDedications = parametrics.idDedication;
            }
        }
    ]);

angular.module('Researchers')
    .controller('researchers.academicData', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function()
            {
                parametricService.getParametrics(refreshEducationParametrics);
            }
            var refreshEducationParametrics = function(parametrics)
            {
                $scope.memberQualities = parametrics.memberQuality;
                $scope.scholarshipInstitutions = parametrics.scholarshipInstitution;
                $scope.workplaceProjects = parametrics.workplaceProject;
                $scope.secretaryshipDepartments = parametrics.secretaryshipDepartment;
                $scope.careers = parametrics.career;
                $scope.subjects = parametrics.subject;
            }
        }
    ]);

angular.module('Researchers')
    .controller('researchers.investigation', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function()
            {
                parametricService.getParametrics(refreshEducationParametrics);
            }
            var refreshEducationParametrics = function(parametrics)
            {
                $scope.categoryIncentivePrograms = parametrics.categoryIncentiveProgram;
                $scope.universityCategorizations = parametrics.universityCategorization;
                $scope.categorizationYears = parametrics.categorizationYear;
                $scope.conicetCareers = parametrics.conicetCareer;
                $scope.conicetCategories = parametrics.conicetCategory;
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


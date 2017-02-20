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
                    $scope.researcherEditing = {};
                }
                $scope.researcherSaved = false;
                $scope.cuilRegExpr = '^\\d{2}-\\d{8}-\\d{1}$';
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
    .controller('researchers.education', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function()
            {
                parametricService.getParametrics(refreshEducationParametrics);
            }
            var refreshEducationParametrics = function(parametrics)
            {
                $scope.degreeAreas = parametrics.degreeArea;
                $scope.academicDegrees = parametrics.academicDegree;
            }
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
               console.log(researchers);
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


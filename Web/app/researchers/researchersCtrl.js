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
    .controller('researchers.education', ['$scope', 'researcherService',
        function ($scope, researcherService) {
            $scope.setup = function()
            {
                researcherService.getParametrics(refreshEducationParametrics);
            }
            var refreshEducationParametrics = function(parametrics)
            {
                $scope.degreeAreas = parametrics.degreeArea;
                $scope.academicDegrees = parametrics.academicDegree;
            }
        }
    ]);

angular.module('Researchers')
    .controller('researchers.undavData', ['$scope', 'researcherService',
        function ($scope, researcherService) {
            $scope.setup = function()
            {
                researcherService.getParametrics(refreshEducationParametrics);
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
    .controller('researchers.list', ['$scope', 'researcherService', function($scope, researcherService) {
        $scope.setup = function () {
            $scope.firstTime = true;
            loadResearchers();
        };
        var loadResearchers = function () {
            researcherService.getResearchers(refreshResearchers);
        },
        refreshResearchers = function(researchers){
           if(Object.keys(researchers).length==0){
               $scope.researchers = null;
           }else{
               $scope.researchers = researchers;
               if($scope.firstTime)
               {
                   $scope.$apply();
                   $scope.firstTime = false;
               }
           }
        }
    }
        ]);


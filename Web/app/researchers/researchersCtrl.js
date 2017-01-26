'use strict';

angular.module('Researchers')
    .controller('researchers.new', ['$scope', 'researcherService',
        function ($scope, researcherService) {
            $scope.setup = function()
            {
                $scope.researcherEditing = {};
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
        }
    ]);

angular.module('Researchers')
    .controller('researcher.education', ['$scope', 'researcherService',
        function ($scope, researcherService) {
            $scope.setup = function()
            {
                console.log('Setup education')
                researcherService.getParametrics(refreshEducationParametrics)

            }

            var refreshEducationParametrics = function(parametrics)
            {
                $scope.degreeAreas = parametrics.degreeArea;
                $scope.academicDegrees = parametrics.academicDegree;

                console.log('Got parametrics')
            }

        }

    ]);
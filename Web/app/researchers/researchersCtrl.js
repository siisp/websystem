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
        }
    ]);


angular.module('Researchers')
    .controller('researcher.education', ['$scope', 'researcherService',
        function ($scope, researcherService) {
            $scope.setup = function()
            {
                researcherService.getParametrics(refreshEducationParametrics)
            }
            var refreshEducationParametrics = function(parametrics)
            {
                $scope.degreeAreas = parametrics.degreeArea;
                $scope.academicDegrees = parametrics.academicDegree;
            }
        }
    ]);


angular.module('Researchers')
    .controller('researchers.list', ['$scope', '$state', 'researcherService', '$mdDialog', function($scope, $state, researcherService, $mdDialog) {
        $scope.setup = function () {
            $scope.researchers = new Array();
            $scope.firstTime = true;
            loadResearchers();
        };
        var getOrderedResearchers = function(researchers) {
                if (researchers != null) {
                    var researchersToOrder = new Array;
                    for (var key in researchers) {
                        researchersToOrder.push(researchers[key]);
                    }

                    researchersToOrder.sort(function (researcherA, researcherB) {
                        return researcherA.order - researcherB.order
                    });
                    return researchersToOrder;
                }
            },
            loadResearchers = function () {
            researcherService.getResearchers(refreshResearchers);
        },

            refreshResearchers = function(researchers){
            $scope.researchers = getOrderedResearchers(researchers);
            if($scope.firstTime)
            {
                $scope.$apply();
                $scope.firstTime = false;
            }
        }
    }
        ]);


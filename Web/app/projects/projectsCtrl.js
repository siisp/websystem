'use strict';

angular.module('Projects')
    .controller('projects.index', ['$scope', 'convocatoryService',
        function ($scope, convocatoryService) {
            $scope.setup = function()
            {
                loadConvocatories();
            };

            $scope.changeConvocatoriesToEdit = function()
            {
                setProjectsToListAndEdit();
            }

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
    .controller('projects.new', ['$scope',
        function ($scope) {
            $scope.setup = function()
            {
            }
        }
    ]);
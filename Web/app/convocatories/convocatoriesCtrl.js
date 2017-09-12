'use strict';

angular.module('Convocatories')
    .controller('convocatories.index', ['$scope',
        function ($scope) {
            $scope.setup = function()
            {
            }
        }
    ]);

angular.module('Convocatories')
    .controller('convocatories.list', ['$scope','convocatoryService',
        function ($scope, convocatoryService) {
            $scope.setup = function()
            {
                loadConvocatories();
            };

            var loadConvocatories = function () {
                convocatoryService.getConvocatories(refreshConvocatories);
            },
                refreshConvocatories = function (convocatories) {
                    $scope.convocatories = convocatories;
                    convertStringToDate();
                    $scope.$apply();
                },
                convertStringToDate = function () {
                    for (var convocatory in $scope.convocatories) {
                        if (typeof $scope.convocatories[convocatory].startDate === 'string') {
                            $scope.convocatories[convocatory].startDate = new Date($scope.convocatories[convocatory].startDate);
                        }
                        if (typeof $scope.convocatories[convocatory].endDate === 'string') {
                            $scope.convocatories[convocatory].endDate = new Date($scope.convocatories[convocatory].endDate);
                        }
                    }
                };
            $scope.setup();
        }
    ]);

angular.module('Convocatories')
    .controller('convocatories.new', ['$scope', 'convocatoryService',
        function ($scope, convocatoryService) {
            $scope.setup = function()
            {
                $scope.convocatoryEditing = {
                    id: null,
                    startDate : null,
                    endDate: null,
                    type: null
                };
                $scope.convocatorySaved = false;
            }


            $scope.save = function () {
                if($scope.convocatoryEditing.startDate != undefined){
                    if (typeof $scope.convocatoryEditing.startDate != 'string') {
                        $scope.convocatoryEditing.startDate = $scope.convocatoryEditing.startDate.toJSON();
                    }
                }
                if($scope.convocatoryEditing.endDate != undefined){
                    if (typeof $scope.convocatoryEditing.endDate != 'string') {
                        $scope.convocatoryEditing.endDate = $scope.convocatoryEditing.endDate.toJSON();
                    }
                }
                $scope.convocatorySaved = false;
                convocatoryService.save($scope.convocatoryEditing, onConvocatorySaved);
            }

            var onConvocatorySaved = function () {
                $scope.convocatorySaved = true;
                $scope.$apply();
            }
            $scope.setup();
        }
    ]);

angular.module('Convocatories')
    .controller('convocatories.convocatoryData', ['$scope',
        function ($scope) {
            $scope.setup = function()
            {
            }

        }
    ]);


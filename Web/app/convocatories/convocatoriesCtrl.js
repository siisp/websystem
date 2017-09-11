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
    .controller('convocatories.list', ['$scope',
        function ($scope) {
            $scope.setup = function()
            {
                $scope.convocatories = {};
            }
        }
    ]);

angular.module('Convocatories')
    .controller('convocatories.new', ['$scope',
        function ($scope) {
            $scope.setup = function()
            {
            }
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


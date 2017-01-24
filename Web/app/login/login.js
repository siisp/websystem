'use strict';

angular.module('Login', ['Core', 'Layout', 'Researchers'])
    .config(function($stateProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: 'login/index.html'
            })
            .state('logout', {
                url: '/logout',
                controller: ['authenticationService', '$state',
                    function(authenticationService, $state) {
                        authenticationService.logout();
                        $state.go('login');
                    }]
            })
    });
//boton
/*angular.module('Botones',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

    .controller('AppCtrl', function($scope) {
        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;

        $scope.googleUrl = 'http://google.com';

    });*/
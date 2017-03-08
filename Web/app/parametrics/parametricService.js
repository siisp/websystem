'use strict';

angular.module('Parametrics').factory('parametricService', ['dataService',
    function (dataService) {
        return {
            getParametrics: function(callback) {
                dataService.getData('parametrics', callback);
            },
            saveParametric: function(parametric, onSave){
                dataService.saveObject('parametrics', parametric, onSaved);
            }
        };
    }
]);
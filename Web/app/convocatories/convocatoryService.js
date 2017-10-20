angular.module('Convocatories').factory('convocatoryService', ['dataService',
    function (dataService) {
        return {
            save: function(convocatory, onSaved) {
                dataService.saveObject('convocatories', convocatory, onSaved);
            },
            getConvocatory: function (id, callback) {
                dataService.getData('convocatories/' + id, callback);
            },
            getConvocatories: function(callback){
                dataService.getData('convocatories', callback);
            }
        };
    }
]);
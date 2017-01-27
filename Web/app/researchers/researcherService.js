angular.module('Researchers').factory('researcherService', ['dataService',
    function (dataService) {
        return {
            save: function(researcher, onSaved) {
                dataService.saveObject('researchers', researcher, onSaved);
            },
            getParametrics: function(callback) {
                dataService.getData('parametrics', callback);
            },
            getResearchers: function(callback){
                dataService.getData('researchers', callback);
            }
        };
    }
]);
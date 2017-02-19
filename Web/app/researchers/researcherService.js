angular.module('Researchers').factory('researcherService', ['dataService',
    function (dataService) {
        return {
            save: function(researcher, onSaved) {
                dataService.saveObject('researchers', researcher, onSaved);
            },
            getResearcher: function (id, callback) {
                dataService.getData('researchers/' + id, callback);
            },
            getResearchers: function(callback){
                dataService.getData('researchers', callback);
            }
        };
    }
]);
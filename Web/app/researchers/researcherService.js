angular.module('Researchers').factory('researcherService', ['dataService',
    function (dataService) {
        return {
            save: function(researcher, onSaved) {
                dataService.saveObject('researchers', researcher, onSaved);
            }
        };
    }
]);
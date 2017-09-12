angular.module('Projects').factory('projectService', ['dataService',
    function (dataService) {
        return {
            save: function (convocatory, project, onProjectUpdated) {
                if (convocatory.id == null)
                    return;
                var referenceName = 'convocatories/' + convocatory.id + '/projects';
                dataService.saveObject(referenceName, project, onProjectUpdated);
            },
            getProject: function (convocatory ,id, callback) {
                dataService.getData('convocatories/'+convocatory.id+'/projects/' + id, callback);
            },
            getProjects: function(convocatory, callback){
                dataService.getData('convocatories/'+convocatory.id+'/projects', callback);
            }
        };
    }
]);

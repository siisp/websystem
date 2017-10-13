angular.module('Projects').factory('projectService', ['dataService',
    function (dataService) {
        return {
            save: function (convocatory, project, onProjectUpdated) {
                if (convocatory == null)
                    return;
                var referenceName = 'convocatories/' + convocatory + '/projects';
                dataService.saveObject(referenceName, project, onProjectUpdated);
            },
            getProject: function (convocatory,id, callback) {
                dataService.getData('convocatories/'+convocatory+'/projects/' + id, callback);
            },
            getProjects: function(convocatory, callback){
                dataService.getData('convocatories/'+convocatory+'/projects', callback);
            },
            addProduct: function (convocatory, project, product, onProductUpdated) {
                if (project.id == null && convocatory == null)
                    return;
                var referenceName = 'convocatories/' + convocatory + '/projects/' + project.id + '/products';
                dataService.saveObject(referenceName, product, onProductUpdated);
            },
            removeProduct: function (convocatory, project, product) {
                if (convocatory == null || project.id == null)
                    return;
                var referenceName =  'convocatories/' + convocatory + '/projects/' + project.id + '/products';
                dataService.deleteObject(referenceName, product);
            },
            addDepartment: function (convocatory, project, department, onDepartmentUpdated) {
                if (project.id == null && convocatory == null)
                    return;
                var referenceName = 'convocatories/' + convocatory + '/projects/' + project.id + '/departments';
                dataService.saveObject(referenceName, department, onDepartmentUpdated);
            },
            removeDepartment: function (convocatory, project, department) {
                if (convocatory == null || project.id == null)
                    return;
                var referenceName =  'convocatories/' + convocatory + '/projects/' + project.id + '/departments';
                dataService.deleteObject(referenceName, department);
            },
            addFundingSource: function (convocatory, project, fundingSource, onFundingSourceUpdated) {
                if (project.id == null && convocatory == null)
                    return;
                var referenceName = 'convocatories/' + convocatory + '/projects/' + project.id + '/fundingSources';
                dataService.saveObject(referenceName, fundingSource, onFundingSourceUpdated);
            },
            removeFundingSource: function (convocatory, project, fundingSource) {
                if (convocatory == null || project.id == null)
                    return;
                var referenceName =  'convocatories/' + convocatory + '/projects/' + project.id + '/fundingSources';
                dataService.deleteObject(referenceName, fundingSource);
            }
        };
    }
]);


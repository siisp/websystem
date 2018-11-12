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
            },
            setProfilePhoto: function (researcher, file, progressIndicator, onProfilePhotoUpdated, onError) {
                if (researcher.id == null)
                    return;
                var fileName = getProfilePhotoFileName(file.name);
                var referenceName = 'researchers/' + researcher.id + '/' + fileName;
                dataService.uploadFile(referenceName, file, function (snapshot) {
                    onFileUploading(snapshot, progressIndicator);
                }, onError, function (downloadURL) {
                    researcher.profilePhoto = downloadURL;
                    dataService.saveObject('researchers', researcher);
                    progressIndicator.completed = true;
                    onProfilePhotoUpdated();
                });
            },
            addFormation: function (researcher, formation, onFormationUpdated) {
                if (researcher.id == null)
                    return;
                var referenceName = 'researchers/' + researcher.id + '/formations';
                dataService.saveObject(referenceName, formation, onFormationUpdated);
            },
            deleteResearcher: function (researcherId) {
              var referenceName = 'researchers/'+researcherId;
              dataService.deleteResearcher(referenceName);
            },
            removePosition: function (researcher, position) {
                if (researcher.id == null || position.id == null)
                    return;
                var referenceName = 'researchers/' + researcher.id + '/positions';
                dataService.deleteObject(referenceName, position);
            },
            removeParametric: function (researcher, parametric, path) {
                if (researcher.id == null || parametric.id == null)
                    return;
                var referenceName = 'researchers/' + researcher.id +'/'+path;
                dataService.deleteItemOfAnObject(referenceName);
            }
        };
    }
]);

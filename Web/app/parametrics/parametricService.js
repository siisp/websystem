'use strict';

angular.module('Parametrics').factory('parametricService', ['dataService',
    function (dataService) {
        return {
            getParametrics: function(callback) {
                dataService.getData('parametrics', callback);
            },
            getParametricTypes: function()
            {
                return {
                    academicDegree : {type: 'academicDegree', name: 'Máximo título académico'},
                    career: {type: 'career', name: 'Carrera'},
                    categorizationYear: {type: 'categorizationYear', name: 'Año de Categorización'},
                    categoryIncentiveProgram: {type: 'categoryIncentiveProgram', name: 'Categoría Programa de Incentivos'},
                    conicetCareer: {type: 'conicetCareer', name: 'Carrera Conicet'},
                    conicetCategory: {type: 'conicetCategory', name: 'Categoría Conicet'},
                    degreeArea: {type: 'degreeArea', name: 'Disciplina'},
                    idDedication: {type: 'idDedication', name: 'Dedicación a I+D'},
                    modality: {type: 'modality', name: 'Modalidad'},
                    positionType: {type: 'positionType', name: 'Tipo de Cargo'},
                    secretaryshipDepartment:{type: 'secretaryshipDepartment', name: 'Secretaría/Departamento'},
                    subject: {type: 'subject', name: 'Asignatura'},
                    universityCategorization:{type: 'universityCategorization', name: 'Universidad de Categorización'}
                };
            },
            saveParametric: function(parametricType, parametric, onSaved){
                dataService.saveObject('parametrics/'+ parametricType, parametric, onSaved);
            },
            removeParametric: function (parametricType, parametric) {
                if (parametric.id == null)
                    return;
                var referenceName = 'parametrics/'+ parametricType;
                dataService.deleteObject(referenceName, parametric);
            }
        };
    }
]);
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
                    academicDegree : {type: 'academicDegree', name: 'Título académico', listTitle: 'Títulos académicos disponibles', newTitle: 'Agregar nuevo título académico' },
                    career: {type: 'career', name: 'Carrera', listTitle: 'Carreras disponibles', newTitle: 'Agregar nueva carrera'},
                    categoryIncentiveProgram: {type: 'categoryIncentiveProgram', name: 'Categoría Programa de Incentivos', listTitle: 'Programas de incentivos disponibles', newTitle: 'Agregar nuevo programa de incentivo'},
                    conicetCareer: {type: 'conicetCareer', name: 'Carrera Conicet', listTitle: 'Carreras Conicet disponibles', newTitle: 'Agregar nueva carrera de conicet'},
                    conicetCategory: {type: 'conicetCategory', name: 'Categoría Conicet', listTitle: 'Categorías Conicet disponibles', newTitle: 'Agregar nueva categoría de conicet'},
                    degreeArea: {type: 'degreeArea', name: 'Disciplina', listTitle: 'Disciplinas disponibles', newTitle: 'Agregar nueva disciplina disponible'},
                    idDedication: {type: 'idDedication', name: 'Dedicación a I+D', listTitle: 'Dedicaciones I+D disponibles', newTitle: 'Agregar nueva dedicacion I+D'},
                    modality: {type: 'modality', name: 'Modalidad', listTitle: 'Modalidades disponibles', newTitle: 'Agregar nueva modalidad'},
                    positionType: {type: 'positionType', name: 'Tipo de Cargo', listTitle: 'Tipos de cargo disponibles', newTitle: 'Agregar nuevo tipo de cargo'},
                    secretaryshipDepartment:{type: 'secretaryshipDepartment', name: 'Secretaría/Departamento', listTitle: 'Secretarias/Departamentos disponibles', newTitle: 'Agregar Secretaria/Departamento'},
                    subject: {type: 'subject', name: 'Asignatura', listTitle: 'Asignaturas disponibles', newTitle: 'Agregar nueva asignatura'},
                    universityCategorization:{type: 'universityCategorization', name: 'Universidad de Categorización', listTitle: 'Universidades disponibles', newTitle: 'Agregar nueva universidad'}
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
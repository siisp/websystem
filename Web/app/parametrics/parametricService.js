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
                    academicDegree : {type: 'academicDegree', parametricType:'simple',name: 'Grado de Titulación', listTitle: 'Títulos académicos disponibles', newTitle: 'Agregar nuevo grado de titulación' },
                    career: {type: 'career', parametricType:'composed', name: 'Carrera', listTitle: 'Carreras disponibles', newTitle: 'Agregar nueva carrera'},
                    categoryIncentiveProgram: {type: 'categoryIncentiveProgram', parametricType:'simple', name: 'Categoría Programa de Incentivos', listTitle: 'Programas de incentivos disponibles', newTitle: 'Agregar nuevo programa de incentivo'},
                    degreeArea: {type: 'degreeArea', parametricType:'simple', name: 'Gran Area de Conocimiento', listTitle: 'Grandes Areas de Conocimiento disponibles', newTitle: 'Agregar nueva gran area de conocimiento disponible'},
                    idDedication: {type: 'idDedication', parametricType:'simple', name: 'Dedicación a I+D', listTitle: 'Dedicaciones I+D disponibles', newTitle: 'Agregar nueva dedicacion I+D'},
                    modality: {type: 'modality', parametricType:'simple', name: 'Modalidad', listTitle: 'Modalidades disponibles', newTitle: 'Agregar nueva modalidad'},
                    positionType: {type: 'positionType', parametricType:'simple', name: 'Tipo de Cargo', listTitle: 'Tipos de cargo disponibles', newTitle: 'Agregar nuevo tipo de cargo'},
                    secretaryshipDepartment:{type: 'secretaryshipDepartment', parametricType:'composed', name: 'Secretaría/Departamento', listTitle: 'Secretarias/Departamentos disponibles', newTitle: 'Agregar Secretaria/Departamento'},
                    subject: {type: 'subject', parametricType:'simple', name: 'Asignatura', listTitle: 'Asignaturas disponibles', newTitle: 'Agregar nueva asignatura'},
                    universityCategorization:{type: 'universityCategorization', parametricType:'simple', name: 'Universidad de Categorización', listTitle: 'Universidades disponibles', newTitle: 'Agregar nueva universidad'}
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
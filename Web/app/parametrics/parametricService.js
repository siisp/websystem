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
                    typeOfRecruitment : {type: 'typeOfRecruitment',name: 'Tipo de Contratación', listTitle: 'Tipo de Contratación disponibles', newTitle: 'Agregar nuevo Tipo de Contratación' },
                    academicDegree : {type: 'academicDegree',name: 'Grado de Titulación', listTitle: 'Títulos académicos disponibles', newTitle: 'Agregar nuevo grado de titulación' },
                    career: {type: 'career', name: 'Carrera', listTitle: 'Carreras disponibles', newTitle: 'Agregar nueva carrera'},
                    undavCareer: {type: 'undavCareer', name: 'Carrera de UNDAV', listTitle: 'Carreras disponibles', newTitle: 'Agregar nueva carrera'},
                    degreeArea: {type: 'degreeArea', name: 'Gran Area de Conocimiento', listTitle: 'Grandes Areas de Conocimiento disponibles', newTitle: 'Agregar nueva gran area de conocimiento disponible'},
                    idDedication: {type: 'idDedication', name: 'Dedicación a I+D', listTitle: 'Dedicaciones I+D disponibles', newTitle: 'Agregar nueva dedicacion I+D'},
                    modality: {type: 'modality', name: 'Modalidad', listTitle: 'Modalidades disponibles', newTitle: 'Agregar nueva modalidad'},
                    positionType: {type: 'positionType', name: 'Tipo de Cargo', listTitle: 'Tipos de cargo disponibles', newTitle: 'Agregar nuevo tipo de cargo'},
                    secretaryshipDepartment:{type: 'secretaryshipDepartment', name: 'Secretaría/Departamento', listTitle: 'Secretarias/Departamentos disponibles', newTitle: 'Agregar Secretaria/Departamento'},
                    subject: {type: 'subject', name: 'Asignatura', listTitle: 'Asignaturas disponibles', newTitle: 'Agregar nueva asignatura'},
                    scholarshipType: {type: 'scholarshipType', name: 'Tipo de beca', listTitle: 'Tipos de beca', newTitle: 'Agregar nuevo tipo de beca'},
                    scholarshipName: {type: 'scholarshipName', name: 'Beca', listTitle: 'Becas', newTitle: 'Agregar nueva beca'}
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
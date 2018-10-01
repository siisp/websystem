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
                    disciplina: {page:'formation', type: 'disciplina', name: 'Disciplina', listTitle: 'Disciplina', newTitle: 'Agregar nueva Disciplina'},
                    tipoDeContratacion: {page:'formation', type: 'tipoDeContratacion', name: 'Tipo de Contratacion', listTitle: 'Tipo de Contratacion', newTitle: 'Agregar nuevo tipo de contratacion'},
                    cargo: {page:'formation', type: 'cargo', name: 'Cargo', listTitle: 'Cargo', newTitle: 'Agregar nuevo Cargo'},
                    dedicacion: {page:'formation', type: 'dedicacion', name: 'Dedicacion', listTitle: 'Dedicacion', newTitle: 'Agregar nueva Dedicacion'},
                    deptoDependencia: {page:'formation', type: 'deptoDependencia', name: 'Depto/Dependencia', listTitle: 'Depto/Dependencia', newTitle: 'Agregar nuevo Depto/Dependencia'},
                    nivel: {page:'formation', type: 'nivel', name: 'Nivel', listTitle: 'Nivel', newTitle: 'Agregar nuevo Nivel'},
                    tipoDeInvestigacion: {page:'formation', type: 'tipoDeInvestigacion', name: 'Tipo de Investigacion', listTitle: 'Tipo de Investigacion', newTitle: 'Agregar nuevo Tipo de Investigacion'},
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

'use strict';

angular.module('Parametrics')
    .controller('parametrics.index', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function()
            {
                $scope.parametricEditing = {};
                $scope.parametricTypeSelected = null;
                $scope.parametricsSelectedToEdit = {};
                $scope.parametricTypes = parametricService.getParametricTypes();
                $scope.secretaryshipDepartmentSelected=null;
                $scope.degreeAreaSelected=null;
                $scope.undavCareerSelected=null;
                $scope.parametricsSelectedToEditReady = false;
                parametricService.getParametrics(refreshParametrics);
            }
            
            $scope.changeParametricsToEdit = function()
            {
                cleanFirstChildOfParametricType();
                setSelectedParametricsToListAndEdit();
                $scope.parametricEditing.name = null;
            }

            $scope.secretaryshipDepartmentChanged=function()
            {
                if($scope.parametricTypeSelected == 'undavCareer' )
                {
                    $scope.parametricsSelectedToEdit = $scope.parametrics['secretaryshipDepartment'][$scope.secretaryshipDepartmentSelected].careers;
                    $scope.parametricsSelectedToEditReady = true;
                }

                if($scope.parametricTypeSelected == 'subject')
                {
                    $scope.parametricsSelectedToEditReady = false;
                }
            }

            $scope.careerChanged=function()
            {
                $scope.parametricsSelectedToEdit = $scope.parametrics['secretaryshipDepartment'][$scope.secretaryshipDepartmentSelected].careers[$scope.undavCareerSelected].subjects;
                $scope.parametricsSelectedToEditReady = true;
            }
            $scope.degreeAreaChanged = function(){
                if($scope.parametricTypeSelected == 'career')
                {
                    $scope.parametricsSelectedToEdit = $scope.parametrics['degreeArea'][$scope.degreeAreaSelected].careers;
                    $scope.parametricsSelectedToEditReady = true;
                }
            }

            $scope.getParametricPathReference = function(){
                var pathReference = $scope.parametricTypeSelected;
                if($scope.parametricTypeSelected == 'undavCareer')
                {
                    pathReference = 'secretaryshipDepartment/'+$scope.secretaryshipDepartmentSelected+'/careers';
                }
                if($scope.parametricTypeSelected == 'subject')
                {
                    pathReference = 'secretaryshipDepartment/'+$scope.secretaryshipDepartmentSelected+'/careers/'+$scope.undavCareerSelected+'/subjects';
                }
                if($scope.parametricTypeSelected == 'career')
                {
                    pathReference = 'degreeArea/'+$scope.degreeAreaSelected+'/careers';
                }
                return pathReference;
            }
            var refreshParametrics = function(parametrics)
            {
                $scope.parametrics = parametrics;
                var flag = true;

                if($scope.parametricTypeSelected == 'undavCareer' && $scope.secretaryshipDepartmentSelected != null)
                {
                    $scope.parametricsSelectedToEdit = $scope.parametrics['secretaryshipDepartment'][$scope.secretaryshipDepartmentSelected].careers
                    flag = false;
                }

                if($scope.parametricTypeSelected == 'subject' && $scope.secretaryshipDepartmentSelected != null && $scope.undavCareerSelected!= null)
                {
                    $scope.parametricsSelectedToEdit = $scope.parametrics['secretaryshipDepartment'][$scope.secretaryshipDepartmentSelected].careers[$scope.undavCareerSelected].subjects;
                    flag = false;
                }

                if($scope.parametricTypeSelected == 'career' && $scope.degreeAreaSelected != null)
                {
                    $scope.parametricsSelectedToEdit = $scope.parametrics['degreeArea'][$scope.degreeAreaSelected].careers;
                    flag = false;
                }

                if(flag && $scope.parametricTypeSelected !=null)
                {
                    $scope.parametricsSelectedToEdit = isNullOrUndefined($scope.parametrics) ? {} : $scope.parametrics[$scope.parametricTypeSelected];
                }
            }

            var cleanFirstChildOfParametricType = function()
            {
                $scope.secretaryshipDepartmentSelected = null;
                $scope.undavCareerSelected = null;
                $scope.degreeAreaSelected = null;
            }

            var setSelectedParametricsToListAndEdit = function()
            {
                if ($scope.parametricTypeSelected == null || $scope.parametricTypeSelected == 'undavCareer' || $scope.parametricTypeSelected == 'subject' || $scope.parametricTypeSelected == 'career')
                {
                    $scope.parametricsSelectedToEdit = {};
                    $scope.parametricsSelectedToEditReady = false;
                }else
                {
                    $scope.parametricsSelectedToEdit = isNullOrUndefined($scope.parametrics) ? {} : $scope.parametrics[$scope.parametricTypeSelected];
                    $scope.parametricsSelectedToEditReady = true;
                }
            }

            $scope.setup();
        }
    ]);

angular.module('Parametrics')
    .controller('parametrics.new', ['$scope', 'parametricService',
        function ($scope, parametricService) {
            $scope.setup = function()
            {
                $scope.composedParametricEditing = {};
                $scope.parametricSaved = false;
                $scope.isNewParametric = true;
            }
            $scope.save = function()
            {
                $scope.parametricSaved = false;
                parametricService.saveParametric($scope.getParametricPathReference(),$scope.parametricEditing, onParametricSaved);
            }
            $scope.parametricValidation = function(parametricType){
                $scope.isNewParametric = true;

                if(parametricType == 'career'){
                    setIsNewParametric($scope.parametrics['degreeArea'][$scope.degreeAreaSelected].careers);
                }
                if(parametricType == 'undavCareer'){
                    setIsNewParametric($scope.parametrics['secretaryshipDepartment'][$scope.secretaryshipDepartmentSelected].careers);
                }
                if(parametricType == 'subject'){
                    setIsNewParametric($scope.parametrics['secretaryshipDepartment'][$scope.secretaryshipDepartmentSelected].careers[$scope.undavCareerSelected].subjects);
                }else{
                    setIsNewParametric($scope.parametrics[parametricType]);
                }
            }
            var setIsNewParametric = function(parametricList){
                for (var parametricItem in parametricList) {
                    if(parametricList[parametricItem].name == $scope.parametricEditing.name)
                    {
                        $scope.isNewParametric = false;
                    }
                }
            },
                onParametricSaved = function()
            {
                $scope.parametricSaved = true;
                setNewParametric();
                $scope.$apply();
            },
                setNewParametric = function(){
                    $scope.parametricEditing = {};
                }
            $scope.setup();
        }
    ]);

angular.module('Parametrics')
    .controller('parametrics.editInLine', ['$scope', '$mdDialog', '$filter', 'parametricService', 'researcherService',
        function ($scope, $mdDialog,$filter, parametricService, researcherService) {
            $scope.setup = function ()
            {
                $scope.parametricEditing = {id:null};
                cleanParametricEditingForm();
                $scope.firstTime = true;
                loadResearchers();
                $scope.status= null;
            }
            $scope.saveEditing = function()
            {
                parametricService.saveParametric($scope.getParametricPathReference(),$scope.parametricEditingForm.parametricEditing, onParametricEditUpdated);
            }
            $scope.cancelEditing = function()
            {
                cleanParametricEditingForm();
            }

            $scope.edit = function(parametric)
            {
                $scope.parametricEditingForm.parametricEditing = angular.copy(parametric);
            }

            $scope.deleteParametric = function (parametric) {
                var pathReference = $scope.parametricTypeSelected;
                if(verifyParametricIsNotUsed(parametric)){
                    pathReference = setPathReference(pathReference);
                    parametricService.removeParametric(pathReference, parametric);
                }else{
                    showConfirm();
                    if($scope.status=='confirm'){
                        for(var researcher in $scope.filteredItems){
                            deleteResearchersParametrics($scope.filteredItems[researcher], parametric);
                        }
                    }
                    else{
                        console.log($scope.status+"sin aceptar");
                    }
                }
            }

            var loadResearchers = function () {
                    researcherService.getResearchers(refreshResearchers);
                },
                refreshResearchers = function(researchers){
                    if(researchers == null || Object.keys(researchers).length==0){
                        $scope.researchers = null;
                    }else{
                        $scope.researchers = researchers;
                    }
                    if($scope.firstTime)
                    {
                        $scope.$apply();
                        $scope.firstTime = false;
                    }
                },

                onParametricEditUpdated = function()
                {
                    cleanParametricEditingForm();
                    $scope.$apply();
                },

                cleanParametricEditingForm = function(){
                    $scope.parametricEditingForm = {parametricEditing : {id :null}};
                },

                verifyParametricIsNotUsed = function (parametric) {
                    var items = $filter('toArray')($scope.researchers);
                    $scope.filteredItems = $filter('filter')(items, parametric.id);
                    return $scope.filteredItems.length == 0;
                },
                
                showConfirm = function(ev) {
                    // Appending dialog to document.body to cover sidenav in docs app
                    var confirm = $mdDialog.confirm()
                        .title('Algunos investigadores tienen asociada esta paramétrica')
                        .textContent('¿Desea quitar esta parametrica y quitarla de los investigadores?')
                        .targetEvent(ev)
                        .ok('Confirmar')
                        .cancel('Cancelar');
    
                    $mdDialog.show(confirm).then(function() {
                        $scope.status = 'confirm';
                    }, function() {
                        $scope.status = 'cancel';
                    });
                },
                
                deleteResearchersParametrics = function (researcher, parametric) {
                    var path = '/';
                    if($scope.parametricTypes[$scope.parametricTypeSelected].page=='formation'){
                        for (var formation in researcher.formations) {
                            if(researcher.formations[formation][$scope.parametricTypes[$scope.parametricTypeSelected].type] == parametric.id){
                                path = 'formations/'+ formation+ '/'+$scope.parametricTypes[$scope.parametricTypeSelected].type ;
                                    researcherService.removeParametric(researcher, parametric, path);
                                }
                            }
                    }
                    if($scope.parametricTypes[$scope.parametricTypeSelected].page=='position'){
                        for (var position in researcher.positions) {
                            if(researcher.positions[position][$scope.parametricTypes[$scope.parametricTypeSelected].type] == parametric.id){
                                path = 'positions/'+ position+ '/'+$scope.parametricTypes[$scope.parametricTypeSelected].type;
                                researcherService.removeParametric(researcher, parametric, path);
                            }
                        }
                    }
                },
                setPathReference = function (pathReference) {
                    if($scope.parametricTypeSelected == 'undavCareer')
                    {
                        pathReference = 'secretaryshipDepartment/'+$scope.secretaryshipDepartmentSelected+'/careers';
                    }
                    if($scope.parametricTypeSelected == 'subject')
                    {
                        pathReference = 'secretaryshipDepartment/'+$scope.secretaryshipDepartmentSelected+'/careers/'+$scope.undavCareerSelected+'/subjects';
                    }
                    if($scope.parametricTypeSelected == 'career')
                    {
                        pathReference = 'degreeArea/'+$scope.degreeAreaSelected+'/careers';
                    }
                    return  pathReference;
                };


            $scope.setup();
        }]);

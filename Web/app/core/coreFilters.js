'use strict';

angular.module('Core').filter('toArray', function() {
    return function(obj) {
        var result = [];
        console.log(obj);
        angular.forEach(obj, function(val) {
            result.push(val);
        });
        console.log(result);
        return result;
    };
});
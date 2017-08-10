'use strict';

angular.module('Core').filter('toArray', function() {
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val) {
            result.push(val);
        });
        return result;
    };
});

angular.module('Core').filter('startFromGrid', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});
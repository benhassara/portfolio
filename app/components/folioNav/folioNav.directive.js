(function() {
    'use strict';

    angular.module('app.components.folioNav')
        .directive('folioNav', folioNavDirective);

    function folioNavDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/folioNav/folioNav.html'
        };
    }
})();

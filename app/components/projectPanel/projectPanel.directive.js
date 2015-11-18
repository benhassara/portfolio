(function() {
    'use strict';

    angular.module('app.components.projectPanel')
        .directive('projectPanel', projectPanelDirective);

    function projectPanelDirective() {
        return {
            restrict: 'E',
            scope: {
                name: '@projectName',
                image: '@projectImage',
                description: '@projectDesc',
                github: '@projectGithub',
                live: '@projectLive'
            },
            templateUrl: 'app/components/projectPanel/projectPanel.html',
            controller: ProjectPanelCtrl,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    function ProjectPanelCtrl() {
        var vm = this;
    }
})();

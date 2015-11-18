(function() {
    'use strict';

    angular.module('app.layout.projects')
        .controller('ProjectsCtrl', ProjectsCtrl);

    ProjectsCtrl.$inject = ['projects'];

    function ProjectsCtrl(projects) {
        var vm = this;

        vm.projects = projects.getProjects();
    }
})();

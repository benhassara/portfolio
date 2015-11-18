(function() {
    'use strict';

    // console.log('sanity check');
    angular.module('app', [
        'ui.router',
        'app.layout',
        'app.components',
        'app.services'
    ])
    .config(routeConfiguration);

    routeConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfiguration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/layout/home.html'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'app/layout/projects/projects.html',
            controller: 'ProjectsCtrl as vm'
        });
    }
})();

(function() {
    'use strict';

    // console.log('sanity check');
    angular.module('app', [
        'ui.router',
        'app.layout',
        'app.components'
    ])
    .config(routeConfiguration);

    routeConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfiguration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/layout/home.html'
        });
    }
})();

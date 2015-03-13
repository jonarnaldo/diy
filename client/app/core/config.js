;(function () {
'use strict'

angular
  .module('app.core')
  .config(config);

  function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    // $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('test', {
      url:'/',
      templateUrl:'app/details/details.html',
      controller: 'DetailsController as vm'
    })
    .state('home', {
      url:'/projects/:projectId',
      templateUrl:'app/details/details.html',
      controller: 'DetailsController as vm'
    })
    .state('error', {
      url:'/error',
      templateUrl: 'app/error/error.html',
    })

    // $locationProvider.html5Mode(true);
  }
}).call(this)
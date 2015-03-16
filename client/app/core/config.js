;(function () {
'use strict'

angular
  .module('app.core')
  .config(config);

  function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $stateProvider
    .state('test', {
      url:'/',
      templateUrl:'app/details/details.html',
      controller: 'DetailsController as vm'
    })
    .state('home', {
      url:'/:maker/:projectId',
      templateUrl:'app/details/details.html',
      controller: 'DetailsController as vm'
    })
    .state('error', {
      url:'/error',
      templateUrl: 'app/error/error.html',
    })
  }
}).call(this)
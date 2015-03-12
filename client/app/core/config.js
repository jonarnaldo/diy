;(function () {
'use strict'

angular
  .module('app.core')
  .config(config);

  function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url:'/project/{id}',
      templateUrl:'app/details/details.html',
      controller: 'DetailsController as vm'
    })
    .state('about', {
      url:'/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController as vm'
    })



    // $locationProvider.html5Mode(true);
  }
}).call(this)
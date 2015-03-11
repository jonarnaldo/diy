;(function () {
'use strict'

angular
  .module('app.core')
  .config(config);

  function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $stateProvider

    .state('home', {
      url:'/',
      templateUrl:'app/details/details.html',
      controller: 'DetailsController as vm'
      // views: {
      //   'list': {
      //     templateUrl:'app/free/free.html',
      //     controller:'FreeController as vm'
      //   },
      //   'map': {
      //     templateUrl:'app/map/map.html',
      //     controller:'MapController as vm' 
      //   },
      //   'header': {
      //     templateUrl:'app/header/header.html'
      //   }
      // }
    })

    $locationProvider.html5Mode(true);


    $urlRouterProvider.otherwise('/');
  }
}).call(this)
(function () {
  'use strict';
  //
  
  angular
  .module('app.details')
  .controller('AboutController', AboutController);

  AboutController.$inject = ['DetailsFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http', '$window'];

  function AboutController(DetailsFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http, $window){
    var vm = this;

    DetailsFactory.getComments(function(data) {
      vm.comments = data.response;
      console.log(data)
    });

    DetailsFactory.getProject(function(data) {
      vm.project = data.response;
      console.log(data);
    })

    vm.redirect = function() {
      $window.location.href = '/foo'
    }

  }
})();
(function () {
  'use strict';
  //
  
  angular
  .module('app.details')
  .controller('DetailsController', DetailsController);

  DetailsController.$inject = ['DetailsFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function DetailsController(DetailsFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http){
    var vm = this;

    vm.items = [{name: 'jon'}, {name: 'barry'}]
    
  }
})();
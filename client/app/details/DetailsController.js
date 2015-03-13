(function () {
  'use strict';
  //
  
  angular
  .module('app.details')
  .controller('DetailsController', DetailsController);

  DetailsController.$inject = ['DetailsFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http', '$window'];

  function DetailsController(DetailsFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http, $window){
    var vm = this;

    vm.projectId = $stateParams.projectId;
    console.log(vm.projectId);

    DetailsFactory.getProject(vm.projectId, function(data) {
      vm.project = data.response;
      vm.image = data.response.clips[0].assets.web_270.url;
      vm.commentCount = data.response.stats.comments;
      vm.comments = 
      console.log(vm.commentCount);
    })

    // vm.redirect = function() {
    //   $window.location.href = '/foo'
    // }

  }
})();
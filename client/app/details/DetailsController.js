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

    DetailsFactory.getProject(vm.projectId, function(data) {
      var project = data.response;
      vm.title = project.title;
      vm.image = project.clips[0].assets.web_270.url;
      vm.commentCount = project.stats.comments;
      vm.date = DetailsFactory.parseDate(project.stamp);
      vm.favorites = project.stats.favorites;
      
      DetailsFactory.getComments(vm.projectId, function(data) {
        vm.comments = data.response;
      });

      DetailsFactory.getFavorites(vm.projectId, function(data) {
        vm.makersFavorite = data.response;
        console.log(vm.makersFavorite);
      })
    })


    // vm.redirect = function() {
    //   $window.location.href = '/foo'
    // }

  }
})();
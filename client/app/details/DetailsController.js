(function () {
  'use strict';
  //
  
  angular
  .module('app.details')
  .controller('DetailsController', DetailsController);

  DetailsController.$inject = ['DetailsFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http', '$window'];

  function DetailsController(DetailsFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http, $window){
    var vm = this;
    vm.comment = undefined;

    vm.maker = $stateParams.maker;
    vm.projectId = $stateParams.projectId;

    var click = function(e) {
      console.log(e);
    }

    DetailsFactory.getProject(vm.maker, vm.projectId, function(data) {
      var project = data.response;
      vm.title = project.title;
      vm.image = project.clips[0].assets.web_480.url;
      vm.commentCount = project.stats.comments;

      // change comment title to plural if greater than 1 comment
      if (vm.commentCount > 1) {
        vm.comment = 'comments';
      } else {
        vm.comment = 'comment';
      }
      vm.date = moment(project.stamp).format('MMM Do YYYY');
      vm.favorites = project.stats.favorites;
      
      DetailsFactory.getCurrentUser('corgiponcho', function(data) {
        vm.currentUser = data.response;
      })

      DetailsFactory.getComments(vm.maker, vm.projectId, function(data) {
        console.log(data.response);
        vm.comments = [];

        for (var i = 0; i < data.response.length; i++) {
          var comments = {};
          comments = data.response[i]
          comments.time = moment(data.response[i].stamp).startOf('day').fromNow();
          vm.comments.push(comments);
        }
        console.log('ang comments',vm.comments);
      });

      DetailsFactory.getFavorites(vm.maker, vm.projectId, function(data) {
        vm.makersFavorite = data.response;
      })
    })

    vm.submit = function(comment) {
      DetailsFactory.postComment(vm.maker, vm.projectId, comment);
    }


    // vm.redirect = function() {
    //   $window.location.href = '/foo'
    // }

  }
})();
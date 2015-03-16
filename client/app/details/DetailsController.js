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

    DetailsFactory.getProject(vm.maker, vm.projectId, function(data) {
      var project = data.response;
      vm.title = project.title;
      vm.image = project.clips[0].assets.web_480.url;
      vm.commentCount = project.stats.comments;
      vm.makerIcon = project.maker.avatar.small.url;

      // change comment title to plural if greater than 1 comment
      vm.commentCount > 1 ? vm.comment = 'comments' : vm.comment = 'comment';

      vm.date = moment(project.stamp).format('MMM Do YYYY');
      vm.favorites = project.stats.favorites;
      
      DetailsFactory.getCurrentUser('corgiponcho', function(data) {
        vm.currentUser = data.response;
      })

      DetailsFactory.getComments(vm.maker, vm.projectId, function(data) {
        vm.comments = [];

        angular.forEach(data.response, function(comment) {
          var comments = {};
          comments = comment
          comments.time = moment(comment.stamp).startOf('day').fromNow();
          vm.comments.push(comments);
        })
      });

      DetailsFactory.getFavorites(vm.maker, vm.projectId, function(data) {
        vm.makersFavorite = data.response; // returns an array
        console.log('favorited',vm.makersFavorite)
      })
    })


    // Submit comments
    vm.submit = function(comment) {
      DetailsFactory.postComment(vm.maker, vm.projectId, comment, function() {
        vm.commentInput = null;

        // update comments to show added comment
        DetailsFactory.getComments(vm.maker, vm.projectId, function(data) {
          vm.comments = [];

          angular.forEach(data.response, function(comment) {
            var comments = {};
            comments = comment
            comments.time = moment(comment.stamp).startOf('day').fromNow();
            vm.comments.push(comments);
          })
        });      
      });
    }
  }
})();
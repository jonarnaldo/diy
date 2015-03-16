(function() {

  angular
  .module('app.details')
  .factory('DetailsFactory', DetailsFactory);

  function DetailsFactory($http, $q, $timeout, $location){

    var services = {
      getCurrentUser: getCurrentUser,
      getProject: getProject,
      getComments: getComments,
      getFavorites: getFavorites,
      postComment: postComment
    }

    return services;

    function getCurrentUser(maker, cb) {
      $http({
        url: 'https://api.diy.org/makers/' + maker,
        method: 'GET'
      }).success(function(data, status, headers, config) {
        if (data.head.code === 200) { cb(data); }
      }).error(function (data, status, headers, config) {
        console.log('Error! ', status);
        // redirect to 404 page
        $location.path( "/error" );
      })
    }    

    function getProject(maker, projectId, cb) {
      $http({
        url: 'https://api.diy.org/makers/' + maker + '/projects/' + projectId,
        method: 'GET'
      }).success(function(data, status, headers, config) {
        if (data.head.code === 200) { cb(data); }
      }).error(function (data, status, headers, config) {
        console.log('Error! ', status);
        $location.path( "/error" );
      })
    }

    function getComments(maker, projectId, cb) {
      var req = {
        method: 'GET',
        url: 'https://api.diy.org/makers/' + maker + '/projects/' + projectId + '/comments'
      }
      
      $http(req).success(function(data, status, headers, config) {
        cb(data);
      }).error(function(data, status, headers, config) {
        console.log(status, headers);
      })
    }

    function getFavorites(maker, projectId, cb) {
      var req = {
        method: 'GET',
        url: 'https://api.diy.org/makers/' +  maker + '/projects/' + projectId + '/favorites'
      }

      $http(req).success(function(data, status, headers, config) {
        cb(data);
      }).error(function(data, status, headers, config) {
        console.log(status, headers);
      })
    }

    function postComment(makername, projectId, comment, cb) {
      var comment = { raw: comment }
      // should move this to backend to protect token...
      var req = {
        method: 'POST',
        url: 'https://api.diy.org/makers/' + makername + '/projects/' + projectId + '/comments',
        headers: {
          'x-diy-api-token': '7eb062862633e4b50a11f8d845df6e113430da0f',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: comment,
        transformRequest: function(data) {
          var str = [];
          for (var key in data) {
            str.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
            return str.join('&');
          }
        }
      };

      $http(req).success(function(data, status, headers, config) {
        cb();
      }).error(function(data, status, headers, config) {
        console.log(status);
      })
    }     
  }
})();
(function() {

  angular
  .module('app.details')
  .factory('AboutFactory', AboutFactory);

  function AboutFactory($http, $q, $timeout){

    var services = {
      getComments: getComments,
      getProject: getProject
    }

    return services;

    function getComments(cb) {
      console.log('getting data...');
      $http.get('/comments').success(function(data, status, headers, config) {
        console.log('data received');
        console.log('comments', data);
        // check if data is ok
        cb(data);
      }).error(function (data, status, headers, config) {
        console.log('Error! ', status);
      })
    }

    function getProject(cb) {
      console.log('getting data...');
      $http.get('/project').success(function(data, status, headers, config) {
        console.log('data received');
        console.log('project data', data);
        // check if data is ok
        cb(data);
      }).error(function (data, status, headers, config) {
        console.log('Error! ', status);
      })
    }     
  }
})();
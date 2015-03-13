(function() {

  angular
  .module('app.details')
  .factory('DetailsFactory', DetailsFactory);

  function DetailsFactory($http, $q, $timeout, $location){

    var services = {
      getProject: getProject
    }

    return services;

    function getProject(projectId, cb) {
      console.log('getting data...');
      $http({
        url: 'http://api.diy.org/makers/hivetest/projects/' + projectId,
        method: 'GET'
      }).success(function(data, status, headers, config) {
        if (data.head.code === 200) {
          console.log('project:', data); 
          cb(data);
        }
      }).error(function (data, status, headers, config) {
        console.log('Error! ', status);
        // redirect to 404 page
        $location.path( "/error" );
      })
    }     
  }
})();
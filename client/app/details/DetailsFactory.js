(function() {

  angular
  .module('app.details')
  .factory('DetailsFactory', DetailsFactory);

  function DetailsFactory($http, $q, $timeout, $location){

    var services = {
      getProject: getProject,
      parseDate: parseDate,
      getComments: getComments,
      getFavorites: getFavorites
    }

    return services;


    function getProject(maker, projectId, cb) {
      console.log('getting data...');
      $http({
        url: 'https://api.diy.org/makers/' + maker + '/projects/' + projectId,
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

    function getComments(maker, projectId, cb) {
      $http({
        url: 'https://api.diy.org/makers/' + maker + '/projects/' + projectId + '/comments',
        method: 'GET'
      }).success(function(data, status, headers, config) {
        console.log('comments retreived', data)
        cb(data);
      }).error(function(data, status, headers, config) {
        console.log(status, headers);
      })
    }

    function getFavorites(maker, projectId, cb) {
      $http({
        url: 'https://api.diy.org/makers/' +  maker + '/projects/' + projectId + '/favorites',
        method: 'GET'
      }).success(function(data, status, headers, config) {
        console.log('comments retreived', data)
        cb(data);
      }).error(function(data, status, headers, config) {
        console.log(status, headers);
      })
    }

    function parseDate(date) {
      var str = '';
      var months = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Nov','Dec'];
      var date = new Date(date);
      str += months[date.getMonth()] + ' ' + date.getDay() + ' ' + date.getFullYear();

      return str;
    }     
  }
})();
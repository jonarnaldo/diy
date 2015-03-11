(function() {

  angular
  .module('app.details')
  .factory('DetailsFactory', DetailsFactory);

  function DetailsFactory($http, $q, $timeout){

    var services = {
      getDetails: getDetails
    }

    return services;

    function getDetails(type, cb) {
      return
    }    
  }
})();
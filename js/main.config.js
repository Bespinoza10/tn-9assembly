angular
  .module('tn9')
  .config(tn9Config);

  function tn9Config($routeProvider) {
    $routeProvider
//     /#/login
      .when('/', {
        templateUrl: 'js/hotel-restaurant/main.html',

      })
      .when('/hotel', {
        templateUrl: 'js/hotel-restaurant/hotel.html',

      })
      .when('/resraurants', {
        templateUrl: 'js/hotel-restaurant/restaurant.html',
      })
/*
      .when('/search', {
        templateUrl: 'js/tas/form.html',
        controller: 'apiController',
        controllerAs: 'api',
        private: true
      })
*/
      .otherwise({
        redirectTo: '/'
      })
  }

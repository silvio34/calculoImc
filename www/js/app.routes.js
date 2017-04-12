//define as rotas do app
angular.module('calculoImcApp')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    //quando for a pagina de cálculo
    .state('calculo', {
      url: '/',
      templateUrl: 'templates/calculo.html',
      controller: 'calculoController'
    })
    //quando for a pagina do resultado
    .state('resultado', {
      url: '/resultado',
      templateUrl: 'templates/resultado.html'
    })
    $urlRouterProvider.otherwise('/')
});
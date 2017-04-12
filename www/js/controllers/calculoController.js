angular.module('calculoImcApp')
.controller('calculoController', function($scope, $rootScope, $ionicPopup, $location, calculoImc) {
 
  //objeto que representa os valores na tela de cálculo
  $scope.dados = { };
 
  //função para executar o cálculo
  $scope.calcular = function (dados) {
    if (!dados.peso) {
      //se o peso não foi preenchido exibe um popup informando que o campo é obrigatório
      $ionicPopup.alert({ title: 'Erro', template: 'O peso é obrigatório' });
    } else if (!dados.altura) {
      //se a altura não foi preenchida exibe um popup informando que o campo é obrigatório
      $ionicPopup.alert({ title: 'Erro', template: 'A altura é obrigatória' });
    } else {
      //se todos os dados foram preenchidos, executa o cálculo do IMC e pega qual faixa o IMC corresponde
      var imc = calculoImc.calcular(dados.peso, dados.altura);
      var faixa = calculoImc.getFaixa(imc);
 
      //passa para o $rootScope os valores calculados e redireciona para a tela do resultado
      $rootScope.imc = imc;
      $rootScope.faixa = faixa;
      $location.path('/resultado');
    }
  }
});
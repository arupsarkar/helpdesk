angular.module('product.add', [])

  .controller('AddController', function($scope, $location, $route){

    $scope.data = 'this is data';
    $scope.addProduct = function(product){
      console.log(JSON.stringify(product));
      $scope.data = 'button clicked';
    }


    $scope.name = 'AddController';
  });

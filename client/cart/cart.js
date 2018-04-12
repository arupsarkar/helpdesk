angular.module('product.cart', [])

  .controller('CartController', function($scope, $location, $route){

    var urlParams = $location.search();
    $scope.image_url = urlParams.image;
    $scope.product_name = urlParams.name;
    $scope.submit = function(data){
      console.log('Contact', JSON.stringify(data));
    }
    $scope.name = 'CartController';
  });

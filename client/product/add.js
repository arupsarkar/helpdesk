angular.module('product.add', [])

  .controller('AddController', function($scope, $location, $route){

    $scope.products = [
                        {name: 'Mens Shirt', image: './images/mens-shirt.jpg', price: 19.99},
                        {name: 'Mens Shoe', image: './images/mens-shoe.jpg', price: 79.99},
                        {name: 'Womens Shirt', image: './images/womens-shirt.jpg', price: 29.99},
                        {name: 'Womens Shoe', image: './images/womens-shoe.jpg', price: 109.99}
                      ];
    console.log(JSON.stringify($scope.products));
    $scope.data = 'this is data';
    $scope.addProduct = function(product){
      console.log(JSON.stringify(product));
      $scope.data = 'button clicked';
    }


    $scope.name = 'AddController';
  });

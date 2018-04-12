angular.module('product.add', [])

  .controller('AddController', function($scope, $location, $route){
    //just a comment
    $scope.products = [
                        {name: 'Mens Shirt', image: './images/mens-shirt.jpg', price: 19.99},
                        {name: 'Mens Shoe', image: './images/mens-shoe.jpg', price: 79.99},
                        {name: 'Womens Shirt', image: './images/womens-shirt.jpg', price: 29.99},
                        {name: 'Womens Shoe', image: './images/womens-shoe.jpg', price: 109.99}
                      ];
    console.log(JSON.stringify($scope.products));

    $scope.addProduct = function(product){
      console.log('Add Product', JSON.stringify(product));

    }

    $scope.buyProduct = function(product){
      console.log('Buy Product', JSON.stringify(product));
      $location.path('/cart').search({image: product.image, name: product.name});
    }

    $scope.name = 'AddController';
  });

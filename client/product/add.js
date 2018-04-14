angular.module('product.add', [])

  .controller('AddController', function($scope, $location, $route){
    //just a comment
    $scope.products = [
                        {product_id: 'B001', name: 'Mens Shirt', image: './images/mens-shirt.jpg', price: 19.99},
                        {product_id: 'B002',name: 'Mens Shoe', image: './images/mens-shoe.jpg', price: 79.99},
                        {product_id: 'B003',name: 'Womens Shirt', image: './images/womens-shirt.jpg', price: 29.99},
                        {product_id: 'B004',name: 'Womens Shoe', image: './images/womens-shoe.jpg', price: 109.99}
                      ];
    console.log(JSON.stringify($scope.products));

    $scope.addProduct = function(product){
      console.log('Add Product', JSON.stringify(product));

    }

    $scope.buyProduct = function(product){
      console.log('Buy Product', JSON.stringify(product));
      $location.path('/cart').search({image: product.image, name: product.name, product_id: product.product_id});
    }

    $scope.name = 'AddController';
  });

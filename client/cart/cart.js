angular.module('product.cart', [])

  .controller('CartController', function($scope, $location, $route, Contacts){

    var urlParams = $location.search();
    $scope.image_url = urlParams.image;
    $scope.product_name = urlParams.name;
    $scope.submit = function(contact){
      console.log('Contact', JSON.stringify(contact));
      Contacts.submitContact(contact);
    }
    $scope.name = 'CartController';
  });

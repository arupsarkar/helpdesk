angular.module('product.cart', [])

  .controller('CartController', function($scope, $location, $route, Contacts){

    var urlParams = $location.search();
    $scope.image_url = urlParams.image;
    $scope.product_name = urlParams.name;
    $scope.submit = function(contact){
      console.log('Contact', JSON.stringify(contact));
      var promise;
      promise = Contacts.submitContact(contact);
      promise.then(function(success){
        console.log("Response - ", success.data);
      }, function(error){
        console.log("Error - ", success.data);
      })

    }
    $scope.name = 'CartController';
  });

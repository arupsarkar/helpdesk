angular.module('product.cart', [])

  .controller('CartController', function($scope, $location, $route, Contacts){

    var urlParams = $location.search();

    $scope.image_url = urlParams.image;
    $scope.product_name = urlParams.name;
    $scope.product_id = urlParams.product_id;

    $scope.submit = function(contact){
      var promise;
      var emailPromise;
      var data = contact;
      data.product_id = $scope.product_id;
      console.log('Contact', JSON.stringify(data));
      promise = Contacts.submitContact(data);
      promise.then(function(success){
        emailPromise = Contacts.sendEmail(data);
        $location.path('/checked-out');
        console.log("Response - ", success.data);
      }, function(error){
        console.log("Error - ", success.data);
      });
    };
    $scope.name = 'CartController';
  });

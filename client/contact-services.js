angular.module('contact.factories', [])

  .factory('Contacts', function($http){

  var config = {
    headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                'Access-Control-Allow-Origin': '*'
              }
  };


  return{
    submitContact: function(contact) {
        var data = contact;
        console.info('Factory create contact :', data, config);
        return $http.post('/api/contact', data)
                  .then(function(successPayload){
                    console.log('Factory create contact success : ', successPayload.data);
                    return successPayload.data;
                  },function(errorPayload){
                    console.log('Factory create contact error : ', errorPayload);
                  });
      },

      sendEmail: function(contact){
        var data = contact;
        return $http.post('/api/email', data)
                  .then(function(successPayload){
                    console.log('Factory send email success : ', successPayload.data);
                    return successPayload.data;
                  },function(errorPayload){
                    console.log('Factory send email error : ', errorPayload);
                  });
      }
  }

  });

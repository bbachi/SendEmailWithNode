contactUsApp.factory('EmailServcie', ['$http', function($http){
    
    var EmailServcie = {};
    
    EmailServcie.sendEmail = function(formData){
        
       return $http({ 
            method: 'POST',
            url: '/api/contactus',
            data:{fname:formData.fname, lname:formData.lname, email:formData.email, subject:formData.subject} , headers: 'json' }).then(function(response){
            return response.data;
        });
    
    }
    
     return EmailServcie;
}]);
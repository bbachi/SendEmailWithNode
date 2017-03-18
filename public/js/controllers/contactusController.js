contactUsApp.controller('contactusCntrl', function($scope, EmailServcie){
        
       console.log("mongo controlle::::");
    $scope.formData = {};
            // console.log($scope.formData);
            // $scope.users = EmailServcie.sendEmail();
       $scope.sendEmail = function(formData){
        
           $scope.formData = formData;
              
           /*EmailServcie.fname = formData.fname;
           EmailServcie.lname = formData.lname;
           EmailServcie.email = formData.email;
           EmailServcie.subject = formData.subject;*/
           //console.log(formData.fname);
           
           EmailServcie.sendEmail(formData).then(function(data){
               $scope.responseAfterSuccessEmail = data;
           });
       }
});
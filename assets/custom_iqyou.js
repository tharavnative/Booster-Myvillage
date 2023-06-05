jQuery(document).ready(function($){

   console.log('syncing..2');

        var fname = $("#mvg_customer_first_name").val();
        var lname = $("#mvg_customer_last_name").val();
        var email = $("#mvg_customer_email").val();
        var pass = $("#mvg_customer_email").val();
		if(!($("#mvg_customer_first_name").val().length)){
			fname=email;
		}
        var data = {
            "fname": fname,
            "lname": lname,
            "email": email,
            "password": pass,
            "iqyou_welcome_email": false
        };
  //console.log('Original data !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',data);
   var content = {
            "first_name": fname,
            "last_name": lname,
            "email": email,
            "password": pass,
            "password_confirmation": pass
        };
  var log_content = {
            "email": 'jaimon.novag@gmail.com',
            "password": 'test123',
        };
        // console.log(data);
              // url = 'https://api.iqyouhealth.com/api/v1/register';
              // var request = {
              //       "Content-Type":"application/json",
              //       "accept": "application/json",
              //       crossDomain: true,
              //       "api-key": "c6701296-5027-4076-b80c-d64a77c2ddc7"
              //   };
              //   $.ajax({
              //       type: 'post',
              //       url: url,
              //      data: JSON.stringify( content ),
              //         dataType: "json",
              //         contentType: "application/json",
              //         headers: request
              //    }).done(function(data, status, xhr) {
                    
                    
              //    }).fail(function(xhr, status) {
      
                 
                  
                      
              //            url = 'https://api.iqyouhealth.com/api/v1/login';
              //             var request = {
              //                   "Content-Type":"application/json",
              //                   "accept": "application/json",
              //                   crossDomain: true,
              //                   "api-key": "c6701296-5027-4076-b80c-d64a77c2ddc7"
              //               };
              //               $.ajax({
              //                   type: 'post',
              //                   url: url,
              //                  data: JSON.stringify( log_content ),
              //                     dataType: "json",
              //                     contentType: "application/json",
              //                     headers: request
              //                }).done(function(data, status, xhr) {
              //                   if (data.error == 'false') {
              //                     console.log("successss Login !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
              //                       console.log(data.data.saluId);
              //                   } else {
              //                     console.log(data);
              //                     console.log("error Login !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
              //                   }
              //                }).fail(function(xhr, status) {
                  
                              
                              
              //                });
                   
              //    });


  
    //      $.post("https://app.iqyouhealth.com/api/sign-up?api_key=c6701296-5027-4076-b80c-d64a77c2ddc7", JSON.stringify(data), function (res) {
    //         console.log("Response From IQYou");
    //         console.log(res);
    //         if (res.success) {
    //            console.log('Iqyou Account sucessfully Created.');
    //            window.location.href='https://myvillagegreen.com/pages/membership-dashboard';
    //         } else if (res.message === 'An account already exists with this email address. Please re-enter your email address and password. If you already have an account please login using the above link!') {
    //              console.log(res.message);
				
    //         } else {
    //             console.log(res.message);
				// // window.location.href='https://myvillagegreen.com/pages/signup-landing';
               
    //         }
    //     });
              url = 'https://api.iqyouhealth.com/get_salu_ids?uid=' + email +'&user_key=vga575451';
                          var request = {
                                "Content-Type":"application/json",
                                "accept": "application/json",
                                crossDomain: true,
                                "api-key": "c6701296-5027-4076-b80c-d64a77c2ddc7"
                            };
                            $.ajax({
                                type: 'get',
                                url: url,
                                  dataType: "json",
                                  contentType: "application/json",
                                  headers: request
                             }).done(function(data, status, xhr) {
                              var saluId = data[0][0].salu_id
                              window.cus_id = saluId;
                              console.log("successss Login !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                                    console.log("salu !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",saluId);
 
                             }).fail(function(xhr, status) {
                  
                              
                                console.log("error Login !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",xhr);
                             });
   

});

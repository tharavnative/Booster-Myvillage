jQuery(document).ready(function($){

   console.log('syncing..2');

        var fname = $("#mvg_customer_first_name").val();
        var lname = $("#mvg_customer_last_name").val();
        var email = $("#mvg_customer_email").val();
        var pass = $("#mvg_customer_email").val();
		if(!($("#mvg_customer_first_name").val().length)){
			fname=email;
		}


              url = 'https://api.iqyouhealth.com/api/v1/get_salu_ids?uid=' + email + '&user_key=vga575451';
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
                              window.cus_id = 'vga' + saluId;  

                           
                                          url = 'https://api.iqyouhealth.com/api/v1/completion?user_key='+window.cus_id;
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
                                                  if (data.completion >= 100 && !data.newuser) {
                                                      api_user_data();
                                                      //api_recommend_sec();
                                                      metabolic_risk();
                                                  } else {}
                                               }).fail(function(xhr, status) {
                            
                                               });  
                            api_user_data();
                             }).fail(function(xhr, status) {
                  
                             });
   

});

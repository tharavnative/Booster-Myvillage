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

                             $.ajax({
                                        url: 'https://app.iqyouhealth.com/api/health-questions?user_key=' + window.cus_id + '&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7',
                                        type: 'GET',
                                        crossDomain: true,
                                        success: function (res) {
                                            $(".my_health").removeClass('loading-blue');
                                            $(".my_health_step").text(res.completions_rate + '%');
                                            $(".health_qstns_body .my_health").html(res.intakeform);
                                            healthscore = parseInt(res.healthscore);
                                            $(".health_qstns_body .my_health input[type=radio]").each(function () {
                                                var r = $(this).attr("rel");
                                                var n = $(this).attr("name");
                                                if (r != undefined) {
                            
                                                    if ($(".health_qstns_body .my_health input[name='" + n + "']:checked").val() == 0 || $(".health_qstns_body .my_health input[name='" + n + "']:checked").length == 0) {
                                                        console.log(r);
                                                        $(".health_qstns_body .my_health").find("div[rel='" + r + "']").hide();
                                                    }
                                                }
                                            });
                                            $('.collapsepage').each(function () {
                                                id = $(this).attr('rel');
                                                no = false;
                                                $('#questioncontainer-' + id).find('.form-radio').each(function () {
                                                    rid = $(this).attr('id');
                                                    if ($(this).val() == 0) {
                                                        v = $(this).is(':checked');
                                                        if (v == true) {
                                                            no = true;
                                                        }
                                                    }
                                                });
                                                if (no == true) {
                                                    $('input:radio[id=toggle-' + id + ']')[1].checked = true;
                                                    $('#questioncontainer-' + id).css('display', 'none');
                                                }
                                                $(this).on('click', function () {
                                                    $(this).prop('checked', true);
                                                    colapse = $(this).val();
                                                    id = $(this).attr('rel');
                                                    if (colapse == 0) {
                                                        $('#questioncontainer-' + id).find('input[type=radio][value="0"]').prop('checked', true);
                                                    }
                            
                                                });
                                            });
                                            $('.expandpage').each(function () {
                                                id = $(this).attr('rel');
                                                yes = false;
                                                $('#questioncontainer-' + id).find('.form-radio').each(function () {
                                                    rid = $(this).attr('id');
                                                    if ($(this).val() == 1) {
                                                        v = $(this).is(':checked');
                                                        if (v == true) {
                                                            yes = true;
                                                        }
                                                    }
                                                });
                                                if (yes == true) {
                                                    $('input:radio[id=toggle-' + id + ']')[0].checked = true;
                                                    $('#questioncontainer-' + id).css('display', 'block');
                                                }
                            
                                                $('#questioncontainer-' + id).find('a').each(function () {
                                                    var href = $(this).attr('href');
                                                    $(this).contents().unwrap().wrap('<span></span>');
                                                });
                                            });
                            
                                        },
                                        complete: function (res) {
                                            if (checkRow()) {
                                                makeitred();
                            
                                            }
                                        },
                                        error: function (xhr, status, err) {
                                            console.log(err);
                                        }
                                    });
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
                             }).fail(function(xhr, status) {
                  
                             });
   

});

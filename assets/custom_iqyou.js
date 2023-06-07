jQuery(document).ready(function($){
function api_user_data() {
    console.log("READY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! api_user_data");
      $(".member_clickhere_sec").addClass('loading');
    var request = {
              "Content-Type":"application/json",
              "accept": "application/json",
              crossDomain: true,
              "api-key": "c6701296-5027-4076-b80c-d64a77c2ddc7"
        };
      $.ajax({

          url: 'https://api.iqyouhealth.com/api/v1/user-data?user_key=' + window.cus_id + '',
          type: 'GET',
          crossDomain: true,
          headers: request,
          success: function (res) {
              var healthscore = res.healthscore;
              var metabolicscore = res.metabolic.score;
              var toxinsscore = res.toxins.score;

              var health_html = '<span>Health Score</span>' + healthscore;
              var metabolic_html = '<span>Metabolic Score</span>' + metabolicscore;
              var toxin_html = '<span>Toxin Score</span>' + toxinsscore;

              $(".member_clickhere_sec a[data-target='#health_score']").html(health_html);
              $(".member_clickhere_sec a[data-target='#health_score']").addClass('score_value_dis');
              $("#health_score .your_score_detail h2 span").text(healthscore);
              $("#health_score .your_score_detail .complete_qtns").remove();
              $("#health_score .your_score_detail .complete_qtns").text('See Detailed Info on IQYou');

              $(".member_clickhere_sec a[data-target='#metabolic_score']").html(metabolic_html);
              $(".member_clickhere_sec a[data-target='#metabolic_score']").addClass('score_value_dis');
              $("#metabolic_score .your_score_detail h2 span").text(metabolicscore);
              $("#metabolic_score .your_score_detail .complete_qtns").remove();
              $("#metabolic_score .your_score_detail .complete_qtns").text('See Detailed Info on IQYou');

              $(".member_clickhere_sec a[data-target='#toxin_score']").html(toxin_html);
              $(".member_clickhere_sec a[data-target='#toxin_score']").addClass('score_value_dis');
              $("#toxin_score .your_score_detail h2 span").text(toxinsscore);
              $("#toxin_score .your_score_detail .complete_qtns").remove();
              $("#toxin_score .your_score_detail .complete_qtns").text('See Detailed Info on IQYou');

              if (res.dna_reports.has_report) {
                  $('#lap_report .lap_table').html('<div style="background: #eee; padding: 10px;"><span style="color: #222">DNA:</span> <strong>' +
                      res.dna_reports.name + '</strong>&nbsp;&nbsp; <a href="#" class="view-dna-reports">View</a>' +
                      '&nbsp;&nbsp; <a href="#" class="download-dna-reports">Download</a></div>'
                  );
              } else {
                  $('#lap_report .lap_table').html('<p>You do not have any DNA or lab reports at this time</p><p> While you only need to do a DNA analysis once, we recommend doing a Wellness Panel annually.</p>');
              }

              $(".member_clickhere_sec").removeClass('loading');
            

          },
          error: function (xhr, status, err) {
              console.log(err);
          }
      });
    $.ajax({

          url: 'https://api.iqyouhealth.com/api/v1/physiological_causes?user_key=' + window.cus_id + '&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7',
          type: 'GET',
          crossDomain: true,
          success: function (res) {
            //console.log(res.report);
            var wrapper = $("#health-report");
              //console.log(res.recommendations);
             //wrapper.html(res.report);
            var htm_report = $(res.report);
            htm_report.find('h2').remove();
            htm_report.find('script').remove();
            htm_report.find('style').remove();
            htm_report.find('p').remove();
            
            htm_report.find('#healthscore').remove();
            
            htm_report.find('.dash').remove();
            htm_report.find('.pct').remove();
              
            $(htm_report).find('li').hide();
            $(htm_report).find('li:lt(10)').show();
            //console.log(htm_report);
               $('#health-report').html(htm_report);
            $('#health-report').find('h2').remove();
            $('#health-report').find('#explanation').remove();
            $('#health-report').find('#banner').remove();
            $('.your_score_detail').next('p').text("Your health score is a scientific measurement of your overall health and can serve as a directional indicator on how your health is evolving. It takes into account all of the numerous factors in your life, including your demographics, health conditions, family history, diet and lifestyle habits, lab results, and DNA. The more data you provide, the more accurate your health score will be. Based on a scale of 0-100, a higher score is suggestive of better health. As you make positive health changes and improve your lab values, remember to update your health questionnaire so that your health score can reflect your progress. ");
            $('<p>Schedule a nutrition consultation for an in-depth look into your health score and the steps you can take to help improve your health</p>').insertAfter('#whycontent').find('ul');
//                   $(".colorbox-load").each(function(idx) {
//                          var url = $(this).attr("href");
//                          url = "https://staging.api.iqyouhealth.com" + url;
//                          $(this).attr("href", url);
//                          $(this).attr('target','_blank');
                  
                   
//                      });
             $('#health-report').find(".colorbox-load").each(function(idx) {
            
                  //console.log($(this).attr('href'));
                  $(this).removeAttr("href");
              });
           
          },
          error: function (xhr, status, err) {
                  console.log(err);
              }
          });

  }
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
                                                    console.log("Calling !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! api_user_data");
                                                      api_user_data();
                                                      //api_recommend_sec();
                                                      //metabolic_risk();
                                                  } else {}
                                               }).fail(function(xhr, status) {
                            
                                               });  
                            
                             }).fail(function(xhr, status) {
                  
                             });
   

});

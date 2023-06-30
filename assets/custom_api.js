jQuery.noConflict();
jQuery( document ).ready(function($) {
  window.savedlast = false;
 $("#schedule_popup_now").removeClass('loading');

  MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {

console.log('Mutation------',$(".bta-product-widget"));

  setTimeout(function () {  
console.log('Running');
    $("#call_back_btn button").click(function () {

     console.log('Find Outside------',$(".bta-product-widget"));
        setTimeout(function () {

          $('#schedule_inner').modal('hide');

          
            var targetNode = $(".bta-product-widget")[0];
            //$('#schedule_inner .modal-body').empty();
            $(".bta-product-widget .bta-widget-modal").removeClass('bta-widget-modal');
            $(".bta-product-widget  iframe").removeAttr("title");
            $(".bta-product-widget  iframe").tooltip().tooltip("disable");

            $('#schedule_call_btn .modal-body').append($(".bta-product-widget"));



            $('#schedule_call_btn').modal('show');
             console.log('Find------',$(".bta-product-widget"));
            }, 500);

        


    });

}, 500);

              
            });
        });

        // Notify me of style changes
        var observerConfig = {
             childList: true
        };

var targetNode = $("div[data-id='60284']")[0];
if(typeof targetNode  === "undefined"){
  console.log('Mutation if 60284--');
}
else{
observer.observe(targetNode, observerConfig);
console.log('Mutation Else 60284--');
 
  }

var observer2 = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {

console.log('Mutation------',$(".bta-product-widget"));

  setTimeout(function () {  
console.log('Running third',mutation);
    if (mutation.type === 'childList') {

 console.log('Online Css.....',$('.bta-widget-show-button').css('display'));
                 if ($('.bta-widget-show-button').css('display') == 'block') {
                       setTimeout(function () { 
                        jQuery("#thirty-holder button").trigger('click');
                          var targetNode2 = $(".bta-product-widget")[0];
                        
            $(".bta-product-widget .bta-widget-modal").removeClass('bta-widget-modal');
            $(".bta-product-widget  iframe").removeAttr("title");
            $(".bta-product-widget  iframe").tooltip().tooltip("disable");

            $('#bta-product-holder').append($(".bta-product-widget"));
           $('#bta-product-holder').removeClass('loading-blue');
                         console.log('Online Cclicked.....');
                         jQuery("#thirty-holder button").css('display','none');
                         }, 500);

                     }
                 }
 
    
    

}, 500);

              
            });
        });

        // Notify me of style changes
        var observerConfig2 = {
            childList: true, 
          subtree: true,
            attributes: true
             
        };


  var targetNode2 = $("div[data-id='76187']")[0];
if(typeof targetNode2  === "undefined"){

console.log('Mutation If 76187--');
}
  else{
observer2.observe(targetNode2, observerConfig2);
console.log('Mutation Else 76187--');
   
 
  }


   $(document).on('keyup keydown paste focusout keypress', '#customFields_mvg-membership input[name=n_60701]', function (e) {
        $(this).attr('maxlength', 10);
        if (/\D/g.test(this.value)) {
            // Filter non-digits from input value.
            this.value = this.value.replace(/\D/g, '');
        }


    });

    $("#popup_sec .member_btn").on("click", function () {
       $('#membership_popup').modal('show');
    

        $("#mvg-membership_membership_container").find("#form_mvg-membership #mvg-membership_register_fields .bold-form-group").addClass("step1");
        $("#mvg-membership_membership_container").find("#form_mvg-membership #customFields_mvg-membership .bold-form-group").slice(0, 2).addClass("step1");
        // $("#mvg-membership_membership_container").find("#form_mvg-membership #customFields_mvg-membership .bold-form-group").slice(2).addClass("step2");
        $("#mvg-membership_membership_container").find("#form_mvg-membership #mvg-membership_membership_button_stripe").hide();
        //       $("#mvg-membership_membership_container").find("#form_mvg-membership #mvg-membership_membership_button_free").remove();

    });

    $("a.login_btn").click(function () {
        $(".create-an-account").hide();
        $(".login-page").show();
    });

    $("a.create_acc_btn").click(function () {
        $(".create-an-account").show();
        $(".login-page").hide();
    });


    $("#membership_popup .next_step_btn").on("click", function () {

        var er = 0;
        $("#mvg-membership_membership_container").find("#form_mvg-membership .step1").each(function () {

            var v = $(this).find("input").val();
            if (v == "") {
                er = 1;
                $("#mvg-membership_membership_container").find("#form_mvg-membership #mvg-membership_membership_button_stripe").click();
                return false;
            }

        });

        if (er == 0) {
            $("#mvg-membership_membership_container").find("#form_mvg-membership .step1").hide();
            $("#mvg-membership_membership_container").find("#form_mvg-membership .step2").show();
            $("#membership_popup .step1").hide();
            $("#membership_popup .step2").show();
        }
    });

    $("#membership_popup .pay_btn").on("click", function () {

        $("#mvg-membership_membership_container").find("#form_mvg-membership #mvg-membership_membership_button_stripe").click();

    });


  
  
  $(".health_top .health_box").click(function () {

        $(".health_top .health_box").removeClass('active');
        var step = $(this).attr("data-step");
        $(this).addClass('active');
        $(".order_top h3 span:not(.order_arrow)").text($(this).find('h4').text());
        $(".questn_list>div").hide();
        $(".questn_list ." + step).show();
      	if (parseInt(step.substring(4)) == 2) {
          
          if( $('#qstn_family_modal').hasClass('in')){
            
          }else{
             $('#qstn_family_modal').modal('show');
          }
        
        
      }
      if (parseInt(step.substring(4)) == 6) {
          
          if( $('#qstn_smart_modal').hasClass('in')){
            
          }else{
             $('#qstn_smart_modal').modal('show');
          }
        
        
      }

    });

    //     $("button.close").click(function () {

    //         $('.modal').modal('hide');

    //     });

    var healthscore;
//     window.localStorage.setItem('cus_id', "not-set");
  
  function setRow(){
    
   var storage_local_string=window.localStorage.getItem('cus_row');
   var storage_local_json = JSON.parse(storage_local_string);
    if(storage_local_json.rows=="not-set"){
    	 storage_local_json.rows="set";
  		 localStorage.setItem('cus_row', JSON.stringify(storage_local_json));
    }
  
  }
  function checkRow(){
    
   var storage_local_string=window.localStorage.getItem('cus_row');
   var storage_local_json = JSON.parse(storage_local_string);
    if(storage_local_json.rows=="set"){
    	return true;
    }
    else{
      return false;
    }
  
  }

    
    $(".health_qstns_body .my_health").on("change", "form input[type='radio']", function () {

        var v = $(this).val();
        var r = $(this).attr("rel");
        if (r != undefined && v == 1) {
            $(".health_qstns_body .my_health").find("div[rel='" + r + "']").show();
        } else if (r != undefined && v == 0) {
            $(".health_qstns_body .my_health").find("div[rel='" + r + "']").hide();
        }


    });


    //      if(localStorage.getItem('rows')==="not-set"){


    //   }
    //     else{
    //       makeitred();
    //     }


    var form;
    var step;
    var id_global;
    var click_button = null;
    var proceed = false;
    $(document).on("click", "#proceed-anyway", function (e) {
        proceed = true;
       // console.log(form);
        if (form === undefined) {
            form = $('.my_health  #intake-wizard-intake-form');
        }
        if (click_button == "next") {

            form.find('#edit-save').trigger('click');
        } else if (click_button == "previous") {
            form.find('#edit-previous').trigger('click');
        } else {
            form.find('#edit-submit').trigger('click');
        }


    });


    $(document).on('click', '#submitstate .form-submit,.form-submit', function (event) {
        event.preventDefault();



        var closestForm = $(this);


        setRow();
        if (checkRow()) {
            makeitred();
        }


        // $(document).on("click","#proceed-anyway",function(e){

        form = closestForm.closest('form');
		id_global=closestForm.attr("id");
        var value_name=closestForm.attr("value");
        var id = id_global;
        var box;
        step = $(".health_top .health_box.active").attr("data-step");
        var completedrow = false;
        if (id == 'edit-save') {
            click_button = "next";


        } else if (id == 'edit-previous') {
            click_button = "previous";
        } else {
            click_button = "save";

        }



        //              if($form.find('.questioncontainer .questionrow').length==$form.find('.questioncontainer .questionrow.modified').length){

        var diff = form.find('.questioncontainer .questionrow').length - form.find('.questioncontainer .questionrow.modified').length;
        //console.log("Total", form.find('.questioncontainer .questionrow').length);
        //console.log("Total", form.find('.questioncontainer .questionrow.modified').length);



        if (diff == form.find('.questioncontainer .questionrow').length) {
          
          //console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
//             if (parseInt(step.substring(4)) == 3) {
//                 if (id == 'edit-previous') {
//                     $('#qstn_family_modal').modal('show');
//                 }

//                 //                

//             }
            if (id == 'edit-save') {
//               if(value_name==='Save and close questionnaire'){
//                 console.log('IF IF');
//                  box = "box" + parseInt(step.substring(4));
//               }
//               else{
//                 console.log('IF ELSE');
//                 box = "box" + parseInt(parseInt(step.substring(4)) + 1);
//               }
              box = "box" + parseInt(parseInt(step.substring(4)) + 1);
              if (parseInt(step.substring(4)) == 6) {
                  window.savedlast = true;
                 //console.log('In if made true');
               }

               
              

            } else if (id == 'edit-previous') {
                box = "box" + parseInt(parseInt(step.substring(4)) - 1);
            } else {
                box = "box" + parseInt(step.substring(4));

            }
            step = "step" + parseInt(step.substring(4));

            $.ajax({
                url: 'https://app.iqyouhealth.com' + form.prop('action').replace(/^.*\/\/[^\/]+/, ''),
                type: 'POST',
                data: form.serialize(),
                success: function (response) {
                    $(".questn_list form").find(".msg").remove();
                    $(".health_top #" + box).click();
                    $(".questn_list ." + step + " form").append("<p class='msg'>" + response.message + "</p>");






                },
                complete: function (response) {
                    $('#qstn_confirm_modal').modal('hide');

                    if (window.savedlast === true) {

                        window.savedlast = false;
                        window.location.reload();

                    }
                }
            });

            completedrow = true;
        } else if (proceed) {
   //         console.log(parseInt(step.substring(4), 'Hiii'));
//             if (parseInt(step.substring(4)) == 1) {
//                 $('#qstn_family_modal').modal('show');
//                 //                

//             }
//             if (parseInt(step.substring(4)) == 3) {
//                 if (id == 'edit-previous') {
//                     $('#qstn_family_modal').modal('show');
//                 }

//                 //                

//             }
          
          

            if (id == 'edit-save') {

                box = "box" + parseInt(parseInt(step.substring(4)) + 1);
               if (parseInt(step.substring(4)) == 6) {
                  window.savedlast = true;
                // console.log('In if made true');
               }

            } else if (id == 'edit-previous') {
                box = "box" + parseInt(parseInt(step.substring(4)) - 1);
            } else {
                box = "box" + parseInt(step.substring(4));

            }
            step = "step" + parseInt(step.substring(4));

            $.ajax({
                url: 'https://app.iqyouhealth.com' + form.prop('action').replace(/^.*\/\/[^\/]+/, ''),
                type: 'POST',
                data: form.serialize(),
                success: function (response) {
                    $(".questn_list form").find(".msg").remove();
                    $(".health_top #" + box).click();
                    $(".questn_list ." + step + " form").append("<p class='msg'>" + response.message + "</p>");






                },
                complete: function (response) {
                    $('#qstn_confirm_modal').modal('hide');
				//	 console.log('Before complete if');
                    if (window.savedlast === true) {
				//		console.log('Inside complete if');
                        window.savedlast = false;
                        window.location.reload();

                    }
                }
            });
            $('#qstn_confirm_modal').modal('hide');
            proceed = false;

        } else {

            if (parseInt(step.substring(4)) == 5) {
              //  console.log('hi');
                if (id == 'edit-save') {

                    box = "box" + parseInt(parseInt(step.substring(4)) + 1);

                } else if (id == 'edit-previous') {
                    box = "box" + parseInt(parseInt(step.substring(4)) - 1);
                } else {
                    box = "box" + parseInt(step.substring(4));

                }
                step = "step" + parseInt(step.substring(4));

                $.ajax({
                    url: 'https://app.iqyouhealth.com' + form.prop('action').replace(/^.*\/\/[^\/]+/, ''),
                    type: 'POST',
                    data: form.serialize(),
                    success: function (response) {
                        $(".questn_list form").find(".msg").remove();
                        $(".health_top #" + box).click();
                        $(".questn_list ." + step + " form").append("<p class='msg'>" + response.message + "</p>");






                    },
                    complete: function (response) {
                        $('#qstn_confirm_modal').modal('hide');

                        if (window.savedlast === true) {

                            window.savedlast = false;
                            window.location.reload();

                        }
                    }
                });

            } else if (!completedrow) {
                makeitred();
                $('#qstn_confirm_modal').modal('show');
                return false;
            } else {


                if (id == 'edit-save') {

                    box = "box" + parseInt(parseInt(step.substring(4)) + 1);

                } else if (id == 'edit-previous') {
                    box = "box" + parseInt(parseInt(step.substring(4)) - 1);
                } else {
                    box = "box" + parseInt(step.substring(4));

                }
                step = "step" + parseInt(step.substring(4));

                $.ajax({
                    url: 'https://app.iqyouhealth.com' + form.prop('action').replace(/^.*\/\/[^\/]+/, ''),
                    type: 'POST',
                    data: form.serialize(),
                    success: function (response) {
                        $(".questn_list form").find(".msg").remove();
                        $(".health_top #" + box).click();
                        $(".questn_list ." + step + " form").append("<p class='msg'>" + response.message + "</p>");






                    },
                    complete: function (response) {
                        $('#qstn_confirm_modal').modal('hide');

                        if (window.savedlast === true) {

                            window.savedlast = false;
                            window.location.reload();

                        }
                    }
                });

            }



        }


























        // });














    });
    $(document).on("click", "#goback-finish", function (e) {
        setRow();
       

        makeitred();//console.log(id_global,"sdddsdddddddddsssssssss",step.substring(4));
      if (parseInt(step.substring(4)) == 6) {
        
         if (id_global == 'edit-save') {
             box = "box" + 1;
        $(".health_top #" + box).click();


        }
        
        
       
         
        
        
      }
        // var notetodisplay='<div id="note-to-display"><p><strong>NOTE:</strong> <em>Unanswered questions are shown below in <strong style="color:red;">red</strong></em></p></div>';


        // if(closestForm.closest('form').find('#note-to-display').length===0){
        //     closestForm.closest('form').prepend(notetodisplay);
        // }
        $('#qstn_confirm_modal').modal('hide');
    });
    $(document).on("click", "#ok", function (e) {

        makeitred();
        // var notetodisplay='<div id="note-to-display"><p><strong>NOTE:</strong> <em>Unanswered questions are shown below in <strong style="color:red;">red</strong></em></p></div>';


        // if(closestForm.closest('form').find('#note-to-display').length===0){
        //     closestForm.closest('form').prepend(notetodisplay);
        // }
      
        $('#qstn_family_modal').modal('hide');
		$('#qstn_smart_modal').modal('hide');
    });

    function makeitred() {
        $('.questn_list form').find('.form-type-radios').each(function () {

            var line_is_normal = true;
            var each_line_food_diet_radio = $(this);
            $(each_line_food_diet_radio).find('input').each(function () {

                var each_input_food_diet_radio = $(this);

                if (each_input_food_diet_radio.is(':checked')) {
                    line_is_normal = false;
                }
                if (line_is_normal) {
                    each_line_food_diet_radio.prev().css("color", "red");
                    each_line_food_diet_radio.parent().addClass('modified');
                } else {
                    each_line_food_diet_radio.prev().css("color", "black");
                    each_line_food_diet_radio.parent().removeClass('modified');
                }
                each_input_food_diet_radio.click(function () {

                    $(this).parents('.form-type-radios').prev().css("color", "black");
                    $(this).parent('.form-type-radios').parent().removeClass('modified');
                });


            });



        });

        $('.questn_list form').each(function () {
            var modify_available = false;
            $(this).find('.form-type-radios').each(function () {

                var line_is_normal = true;
                var each_line_food_diet_radio = $(this);
                modify_available = false;
                $(each_line_food_diet_radio).find('input').each(function () {

                    var each_input_food_diet_radio = $(this);


                    if (each_line_food_diet_radio.parent().hasClass('modified')) {
                        modify_available = true;
                    }




                });


            });
            if (modify_available) {
                var notetodisplay = '<div id="note-to-display"><p><strong>NOTE:</strong> <em>Unanswered questions are shown below in <strong style="color:red;">red</strong></em></p></div>';


                if ($(this).find('#note-to-display').length === 0) {
                    $(this).prepend(notetodisplay);
                }
                modify_available = false;
            }

        });


    }

    $(document).on("click", "#qstn_confirm_modal closeit", function (e) {
        $('#qstn_confirm_modal').modal('hide');
    });

    $('#lap_report .lap_report_outer .update_health').text("Order Labs & DNA");
    $('#lap_report .lap_report_outer .update_health').attr("href", "/collections/labs-dna");
    $('#lap_report .lap_report_outer .update_health').removeAttr("data-toggle");
    $('#lap_report .lap_report_outer .update_health').removeAttr("data-target");

    


    $('.top_reommend_sec').on('click', '.reclink.colorbox-load', function (event) {
        event.preventDefault();
        $('#why_cont').html($(this).data('content'));
        $("#top_why_content").modal({
            'show': true
        });
    });

    


    // $(".top_reommend_sec").on("click","a.reclink",function(e){
    //         e.preventDefault();
    //         var href = $(this).attr("href");

    //         $("#why_cont").load('https://app.iqyouhealth.com'+href+' #content > *',{dateType:'jsonp'},function(){
    //             $("#top_why_content").modal({'show':true});
    //         });

    // });

    $(".recommendation-head").on("click", "ul#reccats li", function () {

        var c = $(this).attr("rel");
        $('.top_reommend_sec #recfilter #selectedcat').text($(this).text());
        $(".top_reommend_sec .recseeall,.top_reommend_sec .recrow").hide();

//         if (c != 'all' && $(".top_reommend_sec .recrow." + c).length > 5) {
//             $(".top_reommend_sec .recseeall").show();
//         }
        if (c == 'all') {
//             if ($(".top_reommend_sec .recrow").length > 5) {
//                 $(".top_reommend_sec .recseeall").show();
//             }
          
          
          
          
            $(".top_reommend_sec .recrow").show();
          $(".top_reommend_sec .recrow.botanicalmedicine").css("order","1");
           $(".top_reommend_sec .recrow.dietaryplans").css("order","2");
           $(".top_reommend_sec .recrow.environmentaltoxinreduction").css("order","3");
           $(".top_reommend_sec .recrow.foodchanges").css("order","4");
          $(".top_reommend_sec .recrow.lifestyleinterventions").css("order","5");
           $(".top_reommend_sec .recrow.nutrientchangesinthediet").css("order","6");
          $(".top_reommend_sec .recrow.nutritionalsupplementation").css("order","7");
        }
        $(".top_reommend_sec .recrow." + c ).show();

    });

//     $(".top_reommend_sec").on("click", ".recseeall", function () {
//         $(this).hide();
//         var s = $(".top_reommend_sec #selectedcat").text().trim();
//         s = s.split(' ').join('').toLowerCase();
//         if (s == 'all') {
//             $(".top_reommend_sec .recrow").show();
//         } else {
//             $(".top_reommend_sec .recrow." + s).show();
//         }
//     });


    $(".modal").on('show.bs.modal', function () {
        //$('.modal').not(this).modal('hide');
    });

    


    //     $("#create_customer").submit(function(){

    //       window.location = "/pages/signup";

    //     });

    /*$(document).on("click","#health_qstns_modal a.question",function(e){
        e.preventDefault();
          $("#qstn_desc_modal .modal-body").html('<iframe width="100%" height="500" src="https://app.iqyouhealth.com'+$(this).attr("href")+'" frameborder="0" allowfullscreen=""></iframe>');
          $("#qstn_desc_modal").modal({show:true});

    });*/

    /*$(document).on("click","#membership_popup input[value=Login]",function(e){
            e.preventDefault();
            login().done(function (html) {  
                console.log(html);
            });

    });*/


    

    var url = $(location).attr('href'),
        parts = url.split("/"),
        last_part = parts[parts.length - 1];
    /*
  if (last_part == 'membership-dashboard') {
        Accentuate($("#metafields_form"), function (data) {
            $("#metafields_form").find("p.success").remove();
            if (data.status == 'OK') {
                $("#metafields_form").append('<p class="success">' + data.message + '</p>')
            }
        });
    }
*/

    $(document).on('keyup', '#edit-drugsearch', function () {

        if ($(this).val().length >= 4) {

            // $.ajax({

            //     url: 'https://app.iqyouhealth.com/api/medications?user_key=' + window.customer_id + '&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7&drugsearch=' + $(this).val(),
            //     type: 'GET',
            //     crossDomain: true,
            //     success: function (res) {
            //         var ht = '';
            //         ht += '<div id="autocomplete"><ul class="autoListing">'
            //         $.each(res.matches, function (i, v) {
            //             var pos = i.indexOf("(") + 1;
            //             var remain = i.slice(pos, -1);
            //             var rem_string = remain.split('-', 1)[0]
            //             ht += '<li data-value=' + rem_string + '>' + v + '</li>';
            //         });
            //         ht += '</ul></div>';
            //         $('.form-item-drugsearch').find('label').html(ht);

            //         $(document).on('click', '#autocomplete .autoListing li', function () {
            //             $('#autocomplete').css('display', 'none');
            //             $('#edit-drugsearch').val($(this).text());
            //             var li = $(this).attr('data-value');
            //             //$('#questioncontainer-1 .questionrow').css('display','none');
            //             $('#questioncontainer-1 .questionrow').each(function () {
            //                 if ($(this).attr('id') == 'table-' + li) {
            //                     $(this).css('display', 'block');
            //                 }
            //             });
            //         });
            //     },
            //     error: function (xhr, status, err) {
            //         console.log(err);
            //     }
            // });
        }
    });
  function remove_from_my_plan(rec_id){
    var data = {};
    data.id = rec_id;
    data.is_selected_my_plan = false;
    var url = 'https://app.iqyouhealth.com/api/my-plan_stage?user_key='+window.cus_id+'&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7';
    $.ajax({

          url: url,
          type: 'POST',
          data:data,
          crossDomain: true,
          success:function(res){
              // $('#' + recommendation_id + ' .nextsteplink').attr('href',custom_url);
              // $('#' + recommendation_id + ' .nextsteplink').text("Buy Now");

              //window.location=window.location.href;
            list_my_plan();
            $(".top_reommend_sec").removeClass('loading');
          },
          error:function(xhr,status,err)
          {
            console.log(err);
          }
      });
    
  }
  function rec_list_html(list){
    var list_html = '';
    $.each(list, function (i, recom) {
      if(recom.is_selected_my_plan == '1'){
        var check_box_id="my-plan-cb-recrow-"+ recom.recommendation_id;
        $("#" + check_box_id).prop('checked', true);
        $("#" + check_box_id).removeAttr('new-id');
        $("#" + check_box_id).attr('new-id', recom.id);
        $("#" + check_box_id).addClass('selected-checkbox');
        $("#" + check_box_id).attr('title', 'Remove from My Plan');
        var intake_time_radio = '';
        var intake_time = recom.intake_time;
        if(intake_time == null){
          intake_time = '';
        }
        console.log(intake_time);
        if(intake_time.indexOf("AM") !== -1){ 
          intake_time_radio = intake_time_radio + '<label>AM<input type="checkbox" class="intake-time-class" id="am" name="intake-time-' + recom.id + '[]" value="AM" data-id="' + recom.id + '" checked></label>';

        }else{
          intake_time_radio = intake_time_radio + '<label>AM<input type="checkbox" class="intake-time-class" id="am" name="intake-time-' + recom.id + '[]" value="AM" data-id="' + recom.id + '"></label>';
        }
        if(intake_time.indexOf("Mid") !== -1){ 
          intake_time_radio = intake_time_radio + '<label>Mid-Day<input type="checkbox" class="intake-time-class" id="midday" name="intake-time-' + recom.id + '[]" value="Mid" data-id="' + recom.id + '" checked></label>';

        }else{
          intake_time_radio = intake_time_radio + '<label>Mid-Day<input type="checkbox" class="intake-time-class" id="midday" name="intake-time-' + recom.id + '[]" value="Mid" data-id="' + recom.id + '"></label>';
        }
        if(intake_time.indexOf("PM") !== -1){ 
          intake_time_radio = intake_time_radio + '<label>PM<input type="checkbox" class="intake-time-class" id="pm" name="intake-time-' + recom.id + '[]" value="PM" data-id="' + recom.id + '" checked></label>';

        }else{
          intake_time_radio = intake_time_radio + '<label>PM<input type="checkbox" class="intake-time-class" id="pm" name="intake-time-' + recom.id + '[]" value="PM" data-id="' + recom.id + '"></label>';
        }

        var intake_type_radio = '';
        var intake_type = recom.intake_type;
        if(intake_type == null){
          intake_type = '';
        }
        if(intake_type.indexOf("with_food") !== -1){ 
          intake_type_radio = intake_type_radio + '<label><input type="checkbox" class="intake-type-class" id="with_food" name="intake-type-' + recom.id + '[]" value="with_food" data-id="' + recom.id + '" checked>With Food</label>';

        }else{
          intake_type_radio = intake_type_radio + '<label><input type="checkbox" class="intake-type-class" id="with_food" name="intake-type-' + recom.id + '[]" value="with_food" data-id="' + recom.id + '">With Food</label>';
        }
        if(intake_type.indexOf("without_food") !== -1){ 
          intake_type_radio = intake_type_radio + '<label><input type="checkbox" class="intake-type-class" id="without_food" name="intake-type-' + recom.id + '[]" value="without_food" data-id="' + recom.id + '" checked>Without Food</label>';

        }else{
          intake_type_radio = intake_type_radio + '<label><input type="checkbox" class="intake-type-class" id="without_food" name="intake-type-' + recom.id + '[]" value="without_food" data-id="' + recom.id + '">Without Food</label>';
        }
        var my_plan_buy_button = '<div class="my-plan-buy"><a href="' + recom.url + '"><button class="my-plan-buy-button">Buy Now</button></a></div>';
        var intake_dosage_html = '<div class="dosage-items">';
        var intake_am_dosage_html = '';
        var intake_mid_dosage_html = '';
        var intake_pm_dosage_html = '';
        var intake_dosage = recom.dosage;
        if(intake_dosage != null){

          intake_dosage = intake_dosage.replace(/\//g, "");
          intake_dosage = intake_dosage.replace(/['"]+/g, '');
          intake_dosage = intake_dosage.replace(/[{}]/g, '');
          var dosage_array = intake_dosage.split(","); 
          $.each( dosage_array, function( key, value ) {
            if(value.indexOf("AM_dosage") !== -1){

              var dosage_item = value.split(":"); 
              if(intake_time.indexOf("AM") !== -1){ 
                intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-time-outer">';
                intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="am" name="intake-time-' + recom.id + '[]" value="AM" data-id="' + recom.id + '" checked>AM</label></div>';
                intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-div"><label><input type="text" class="am-dosage-input" id="am-dosage-input-' + recom.id +'" name="am-dosage-input-' + recom.id +'" value="' + dosage_item[1] + '"></label></div>';
                intake_am_dosage_html = intake_am_dosage_html + '</div>';
              }else{
                intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-time-outer">';
                intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="am" name="intake-time-' + recom.id + '[]" value="AM" data-id="' + recom.id + '">AM</label></div>';
                intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-div"><label class="hide-m"><input type="text" class="am-dosage-input" id="am-dosage-input-' + recom.id +'" name="am-dosage-input-' + recom.id +'" value="' + dosage_item[1] + '" readonly></label></div>';
                intake_am_dosage_html = intake_am_dosage_html + '</div>';

              }

            }
            if(value.indexOf("Midday_dosage") !== -1){

              var dosage_item = value.split(":"); 
              if(intake_time.indexOf("Mid") !== -1){ 
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-time-outer">';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="midday" name="intake-time-' + recom.id + '[]" value="Mid" data-id="' + recom.id + '" checked>Mid-Day</label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-div"><label><input type="text" class="md-dosage-input" id="md-dosage-input-' + recom.id +'" name="md-dosage-input-' + recom.id +'" value="' + dosage_item[1] + '"></label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '</div>';
              }else{
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-time-outer">';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="midday" name="intake-time-' + recom.id + '[]" value="Mid" data-id="' + recom.id + '">Mid-Day</label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-div"><label class="hide-m"><input type="text" class="md-dosage-input" id="md-dosage-input-' + recom.id +'" name="md-dosage-input-' + recom.id +'" value="' + dosage_item[1] + '" readonly></label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '</div>';

              }

            }
            if(value.indexOf("PM_dosage") !== -1){

              var dosage_item = value.split(":"); 
              if(intake_time.indexOf("PM") !== -1){ 
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-time-outer">';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="pm" name="intake-time-' + recom.id + '[]" value="PM" data-id="' + recom.id + '" checked>PM</label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-div"><label><input type="text" class="pm-dosage-input" id="pm-dosage-input-' + recom.id +'" name="pm-dosage-input-' + recom.id +'" value="' + dosage_item[1] + '"></label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '</div>';
              }else{
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-time-outer">';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="pm" name="intake-time-' + recom.id + '[]" value="PM" data-id="' + recom.id + '">PM</label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-div"><label class="hide-m"><input type="text" class="pm-dosage-input" id="pm-dosage-input-' + recom.id +'" name="pm-dosage-input-' + recom.id +'" value="' + dosage_item[1] + '" readonly></label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '</div>';

              }

            }
          });


        }else{
          if(intake_time.indexOf("AM") !== -1){ 

            intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-time-outer">';
            intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="am" name="intake-time-' + recom.id + '[]" value="AM" data-id="' + recom.id + '" checked>AM</label></div>';
            intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-div"><label><input type="text" class="am-dosage-input" id="am-dosage-input-' + recom.id +'" name="am-dosage-input-' + recom.id +'" value=""></label></div>';
            intake_am_dosage_html = intake_am_dosage_html + '</div>';
          }else{

            intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-time-outer">';
            intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="am" name="intake-time-' + recom.id + '[]" value="AM" data-id="' + recom.id + '"></label></div>';
            intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-div"><label class="hide-m"><input type="text" class="am-dosage-input" id="am-dosage-input-' + recom.id +'" name="am-dosage-input-' + recom.id +'" value="" readonly>AM</label></div>';
            intake_am_dosage_html = intake_am_dosage_html + '</div>';
          }
          if(intake_time.indexOf("Mid") !== -1){ 

            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-time-outer">';
            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="midday" name="intake-time-' + recom.id + '[]" value="Mid" data-id="' + recom.id + '" checked>Mid-Day</label></div>';
            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-div"><label><input type="text" class="md-dosage-input" id="md-dosage-input-' + recom.id +'" name="md-dosage-input-' + recom.id +'" value=""></label></div>';
            intake_mid_dosage_html = intake_mid_dosage_html + '</div>';
          }else{

            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-time-outer">';
            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="midday" name="intake-time-' + recom.id + '[]" value="Mid" data-id="' + recom.id + '">Mid-Day</label></div>';
            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-div"><label class="hide-m"><input type="text" class="md-dosage-input" id="md-dosage-input-' + recom.id +'" name="md-dosage-input-' + recom.id +'" value="" readonly></label></div>';
            intake_mid_dosage_html = intake_mid_dosage_html + '</div>';
          }
          if(intake_time.indexOf("PM") !== -1){ 

            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-time-outer">';
            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="pm" name="intake-time-' + recom.id + '[]" value="PM" data-id="' + recom.id + '" checked>PM</label></div>';
            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-div"><label><input type="text" class="pm-dosage-input" id="pm-dosage-input-' + recom.id +'" name="pm-dosage-input-' + recom.id +'" value=""></label></div>';
            intake_pm_dosage_html = intake_pm_dosage_html + '</div>';
          }else{

            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-time-outer">';
            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="pm" name="intake-time-' + recom.id + '[]" value="PM" data-id="' + recom.id + '">PM</label></div>';
            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-div"><label class="hide-m"><input type="text" class="pm-dosage-input" id="pm-dosage-input-' + recom.id +'" name="pm-dosage-input-' + recom.id +'" value="" readonly></label></div>';
            intake_pm_dosage_html = intake_pm_dosage_html + '</div>';
          }

        }
             if(intake_am_dosage_html === ''){
               if(intake_time.indexOf("AM") !== -1){ 

                 intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-time-outer">';
                 intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="am" name="intake-time-' + recom.id + '[]" value="AM" data-id="' + recom.id + '" checked>AM</label></div>';
                 intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-div"><label><input type="text" class="am-dosage-input" id="am-dosage-input-' + recom.id +'" name="am-dosage-input-' + recom.id +'" value=""></label></div>';
                 intake_am_dosage_html = intake_am_dosage_html + '</div>';
               }else{

                 intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-time-outer">';
                 intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="am" name="intake-time-' + recom.id + '[]" value="AM" data-id="' + recom.id + '"></label>AM</div>';
                 intake_am_dosage_html = intake_am_dosage_html + '<div class="intake-dosage-div"><label class="hide-m"><input type="text" class="am-dosage-input" id="am-dosage-input-' + recom.id +'" name="am-dosage-input-' + recom.id +'" value="" readonly></label></div>';
                 intake_am_dosage_html = intake_am_dosage_html + '</div>';
               }
             }
            if(intake_mid_dosage_html === ''){
              if(intake_time.indexOf("Mid") !== -1){ 

                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-time-outer">';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="midday" name="intake-time-' + recom.id + '[]" value="Mid" data-id="' + recom.id + '" checked>Mid-Day</label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-div"><label><input type="text" class="md-dosage-input" id="md-dosage-input-' + recom.id +'" name="md-dosage-input-' + recom.id +'" value=""></label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '</div>';
              }else{

                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-time-outer">';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="midday" name="intake-time-' + recom.id + '[]" value="Mid" data-id="' + recom.id + '">Mid-Day</label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="intake-dosage-div"><label class="hide-m"><input type="text" class="md-dosage-input" id="md-dosage-input-' + recom.id +'" name="md-dosage-input-' + recom.id +'" value="" readonly></label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '</div>';
              } 
            }
            if(intake_pm_dosage_html === ''){
              if(intake_time.indexOf("PM") !== -1){ 

                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-time-outer">';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="pm" name="intake-time-' + recom.id + '[]" value="PM" data-id="' + recom.id + '" checked>Pm</label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-div"><label><input type="text" class="pm-dosage-input" id="pm-dosage-input-' + recom.id +'" name="pm-dosage-input-' + recom.id +'" value=""></label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '</div>';
              }else{

                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-time-outer">';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-time-div"><label><input type="checkbox" class="intake-time-class" id="pm" name="intake-time-' + recom.id + '[]" value="PM" data-id="' + recom.id + '">PM</label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="intake-dosage-div"><label class="hide-m"><input type="text" class="pm-dosage-input" id="pm-dosage-input-' + recom.id +'" name="pm-dosage-input-' + recom.id +'" value="" readonly></label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '</div>';
              }

            }

        intake_dosage_html = intake_am_dosage_html + intake_mid_dosage_html + intake_pm_dosage_html;

       

        var buy_button_display = '';
        var update_dosage_html = '<div class="update-dosage"><button class="update-dosage-button" rec-id="' + recom.id + '" rec-custom-id="' + recom.id + '">Update recommendation</button></div>';
        if(recom.product_name != null && recom.product_name !== 'null' && recom.product_name != null){
          var product_name = recom.product_name;
        }else{
          var product_name = '';
        }
        if(recom.note != null && recom.note !== 'null' && recom.note !== ''){
          var note = recom.note;
        }else{
          var note = '';
        }
        if(recom.url !== ''){
         	var url = recom.url;
        }else{
          var url = '';
        }
        if(recom.url !== '' && recom.product_name !== '' && recom.url !== 'null' && recom.product_name !== 'null' && recom.url !== null && recom.product_name !== null){
          var buy_button_display = '<div class="nutritional-supplementation-buy-button"><div class="nutritional-supplementation-product-name"><a href="' + recom.url + '">' + product_name + '</a></div>' + my_plan_buy_button + '</div>';
        }else{
          
          if(recom.recommendation_id != null && recom.recommendation_id !== 'null' && recom.recommendation_id !== '' && recom.recommendation_id !== '0' && recom.recommendation_id !== 0){
            console.log(recom.recommendation_name + " -> " + recom.recommendation_id );
            var old_href = $('a[rel="' + recom.recommendation_id + '"]').attr('href');
            var buy_button_display = '<div class="nutritional-supplementation-buy-button"><div class="nutritional-supplementation-product-name"></div><div class="my-plan-buy"><div class="my-plan-buy"><a href="' + old_href + '"><button class="my-plan-buy-button">Shop Now</button></a></div></div></div>';
          }else{
            
            var buy_button_display = '<div class="nutritional-supplementation-buy-button"><div class="nutritional-supplementation-product-name"></div><div class="my-plan-buy"><div class="my-plan-buy"></div></div></div>';
          }
          

        }
         var notes_html = '<div class="update-notes"><label>Notes<textarea  class="notes-input" id="notes-input-' + recom.id +'" name="notes-input-' + recom.id +'">' + note + '</textarea ></label></div>';
        list_html = list_html + '<div class="nutritional-supplementation-item">';
        list_html = list_html + '<div class="nutritional-supplementation-timing-outer"><div class="nutritional-supplementation-item-name"><a href="' + url + '" target="_BLANK">' + recom.recommendation_name + '</a><span><a class="remove-recoomendation" rec-id="' + recom.id + '" recommendation-id="' + recom.recommendation_id + '">Remove?</a></span></div>' + buy_button_display + '</div>';
        list_html = list_html + '<div class="item-left-section">' + intake_dosage_html;
        list_html = list_html + '<div class="nutritional-supplementation-type-outer">' + update_dosage_html ;
        list_html = list_html + '<div class="intake-type-outer">' + intake_type_radio + '</div></div></div>';
        list_html = list_html + '<div class="item-right-section">' + notes_html + '</div>';
        list_html = list_html + '</div>';

      }else{
        var check_box_id="my-plan-cb-recrow-"+ recom.recommendation_id;
        $("#" + check_box_id).removeClass('selected-checkbox');
        $("#" + check_box_id).attr('title', 'Move to My Plan');
        $("#" + check_box_id).removeAttr('new-id');
        $("#" + check_box_id).attr('new-id', recom.id);
      }
    });
    return list_html;
  
  }
  
  
  
function list_my_plan(){
    $.ajax({

                        url: 'https://app.iqyouhealth.com/api/my-plan_stage?user_key='+window.cus_id+'&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7',
                        type: 'GET',
                        crossDomain: true,
                        success:function(res){
                          var all_list_html ='';
                          var list = res.list;
                          var user_list = res.user_list;
                          all_list_html = all_list_html + rec_list_html(list);
                          all_list_html = all_list_html + rec_list_html(user_list);

                          
                          $( document ).tooltip({
                              tooltipClass: "uitooltip",
                              position: { my: 'left center', at: 'right+10 center' }
                            
                          });
                         
                          $('.nutritional-supplementation-body').html(all_list_html);
                          
                          $('.add-recommendation').click(function() {
                            	$('#new_recommendation_modal').modal('show');
                             });
                          // $('.save_new_recom').click(function() { 
                          //   $('#new_recommendation_modal').modal('hide');
                          //     data = {};
                          //     data.recommendation_name = $('#new_recom_name').val()
                          //      $.ajax({
                          //             url: 'https://app.iqyouhealth.com/api/my-plan_stage?user_key='+window.cus_id+'&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7',
                          //             type: 'POST',
                          //             data:data,
                          //             crossDomain: true,
                          //             success:function(res){
                          //               list_my_plan();
                          //               $(".top_reommend_sec").removeClass('loading');
                          //             },
                          //             error:function(xhr,status,err)
                          //             {
                          //               console.log(err);
                          //             }
                          //        });
                          //  });
                            
                          
                         $('.remove-recoomendation').each(function(){
                            $(this).click(function() {
                              $(".top_reommend_sec").addClass('loading');
                             	
                              	var rec_id = $(this).attr('rec-id');
                              console
                                if($(this).attr('recommendation-id') === '0'){
                                  $(".top_reommend_sec").removeClass('loading');
                                  $('#remove_recommendation_confirm_modal').find('.cancel_remove_recom').removeAttr('data-id');
                                  $('#remove_recommendation_confirm_modal').find('.confirm_remove_recom').removeAttr('data-id');
                                  $('#remove_recommendation_confirm_modal').find('.cancel_remove_recom').attr('data-id',rec_id);
                                  $('#remove_recommendation_confirm_modal').find('.confirm_remove_recom').attr('data-id',rec_id);
                                  $('#remove_recommendation_confirm_modal').modal('show');
                                }else{
                                  remove_from_my_plan(rec_id);
                                }
                              	
                              });
                            });
                          // $('.confirm_remove_recom').click(function() {
                          //     $(".top_reommend_sec").addClass('loading');
                          //   $('#remove_recommendation_confirm_modal').modal('hide'); 
                          //     	var rec_id = $(this).attr('data-id');                               
                          //         remove_from_my_plan(rec_id);                          	
                          //     });
                          // $('.cancel_remove_recom').click(function() {
                          //     $('#remove_recommendation_confirm_modal').modal('hide');                         	
                          //     });
                          $('.update-dosage-button').each(function(){
                            $(this).click(function() {                              
                              	$(".top_reommend_sec").addClass('loading');
                               var rec_id = $(this).attr('rec-id');
                                var AM_dosage = $('#am-dosage-input-' + rec_id).val();
                                var PM_dosage = $('#pm-dosage-input-' + rec_id).val();
                                var Midday_dosage = $('#md-dosage-input-' + rec_id).val();
                                //var custom_url = $('#my-plan-custom-url-input-' + rec_id).val();
                                var note = $('#notes-input-' + rec_id).val();
                              
                                var data = {}; 
                                //var url_data = {};
                                
                                // url_data.rec_id = rec_id;
                                // url_data.rec_name = $('#my-plan-custom-url-input-' + rec_id).attr('rec_name');
                                // url_data.custom_url = custom_url;
                                // url_data.method = 'save';



                                //      $.ajax({

                                //         url: 'https://app.iqyouhealth.com/api/recommendations_stage?user_key='+window.cus_id+'&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7',
                                //         type: 'POST',
                                //         data:url_data,
                                //         crossDomain: true,
                                //         success:function(res){
                                //             // $('#' + recommendation_id + ' .nextsteplink').attr('href',custom_url);
                                //             // $('#' + recommendation_id + ' .nextsteplink').text("Buy Now");

                                //             //window.location=window.location.href;


                                //         },
                                //         error:function(xhr,status,err)
                                //         {
                                //           console.log(err);
                                //         }
                                //     });
                                  data.id = rec_id;	                                  
                                  data.AM_dosage = AM_dosage;  
                                  data.PM_dosage = PM_dosage;  
                                  data.Midday_dosage = Midday_dosage;  
                              	  data.note = note;
                                 
                                   $.ajax({
                                      url: 'https://app.iqyouhealth.com/api/my-plan_stage?user_key='+window.cus_id+'&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7',
                                      type: 'POST',
                                      data:data,
                                      crossDomain: true,
                                      success:function(res){
                                        list_my_plan();
                                        $(".top_reommend_sec").removeClass('loading');
                                      },
                                      error:function(xhr,status,err)
                                      {
                                        console.log(err);
                                      }
                                  });
                            });
                            });
                            
                          $('.intake-time-class').each(function(){
                            $(this).click(function() { 
                              
                              
                              	$(".top_reommend_sec").addClass('loading');
                              	
                              var check_name = $(this).attr('name');
                              var intake_time = '';
                              var rec_id = $(this).attr('data-id');
                              var note = $('#notes-input-' + rec_id).val();
                              $('[name="' + check_name + '"]').each( function (){
                                  if($(this).prop('checked') == true){
                                    if(intake_time === '' ){
                                    	intake_time = $(this).val();
                                    }else{
                                        intake_time = intake_time + ',' +  $(this).val();
                                    }
                                      
                                  }
                              });
//                               var recommendation_id = $(this).val()
//                                   const rec_split = recommendation_id.split("-");
//                                   var rec_id = rec_split[1];
                                  var data = {};                                  
                                  data.intake_time = intake_time;                                 
                                  data.id = $(this).attr('data-id');
                                    if(intake_time.indexOf("AM") === -1){ 
                                       data.AM_dosage = ''; 
                                       $('#am-dosage-input-' + rec_id).val('');
                                   
                                    }
                                     if(intake_time.indexOf("Mid") === -1){ 
                                        
                                        data.Midday_dosage = ''; 
                                        $('#md-dosage-input-' + rec_id).val('');
                                    }
                                    if(intake_time.indexOf("PM") === -1){ 
                                      data.PM_dosage = ''; 
                                      $('#pm-dosage-input-' + rec_id).val('');
                                    }
                                  data.note = note;

                                   $.ajax({

                                      url: 'https://app.iqyouhealth.com/api/my-plan_stage?user_key='+window.cus_id+'&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7',
                                      type: 'POST',
                                      data:data,
                                      crossDomain: true,
                                      success:function(res){
                                          // $('#' + recommendation_id + ' .nextsteplink').attr('href',custom_url);
                                          // $('#' + recommendation_id + ' .nextsteplink').text("Buy Now");

                                          //window.location=window.location.href;
                                        $('.update-dosage-button[rec-id="' + rec_id + '"]').click();
                                        //list_my_plan();
                                        $(".top_reommend_sec").removeClass('loading');
                                      },
                                      error:function(xhr,status,err)
                                      {
                                        console.log(err);
                                      }
                                  });
                            });
                            });
                          
                          
                           $('.intake-type-class').each(function(){
                            $(this).click(function() { 
                              
                              
                              	$(".top_reommend_sec").addClass('loading');
                                  var check_name = $(this).attr('name');
                                  var intake_type = '';
                                    var rec_id = $(this).attr('data-id');
                                    var note = $('#notes-input-' + rec_id).val();
                                     
                                  $('[name="' + check_name + '"]').each( function (){
                                      if($(this).prop('checked') == true){
                                        if(intake_type === '' ){
                                          intake_type = $(this).val();
                                        }else{
                                            intake_type = intake_type + ',' +  $(this).val();
                                        }

                                      }
                                  });
                              
                                  var data = {};                                  
                                  data.intake_type = intake_type;                                 
                                  data.id = $(this).attr('data-id');
                                  data.note = note;
                                 


                                   $.ajax({

                                      url: 'https://app.iqyouhealth.com/api/my-plan_stage?user_key='+window.cus_id+'&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7',
                                      type: 'POST',
                                      data:data,
                                      crossDomain: true,
                                      success:function(res){
                                          // $('#' + recommendation_id + ' .nextsteplink').attr('href',custom_url);
                                          // $('#' + recommendation_id + ' .nextsteplink').text("Buy Now");

                                          //window.location=window.location.href;
                                        $('.update-dosage-button[rec-id="' + rec_id + '"]').click();
                                        //list_my_plan();
                                        $(".top_reommend_sec").removeClass('loading');
                                      },
                                      error:function(xhr,status,err)
                                      {
                                        console.log(err);
                                      }
                                  });
                            });
                            });

                        },
                        error:function(xhr,status,err)
                        {
                          console.log(err);
                        }
                      });
  
  }


  if (window.cus_id) {
      
       

        $.ajax({

            url: 'https://app.iqyouhealth.com/api/health-questions?user_key=' + window.cus_id + '&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7',
            type: 'GET',
            crossDomain: true,
            success: function (res) {
                $(".my_health").removeClass('loading-blue');

                

                // $("#schedule_popup_now").removeClass('loading');





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
                        //$('input:radio[id=toggle-'+id+']')[0].trigger("click");
                    }

                    //else {
                    //$('input:radio[id=toggle-'+id+']')[1].checked = true;
                    //$('input:radio[id=toggle-'+id+']')[1].trigger("click");
                    //}  

                    $('#questioncontainer-' + id).find('a').each(function () {
                        var href = $(this).attr('href');
                        $(this).contents().unwrap().wrap('<span></span>');
                        //$(this).remove();
                        //$(this).text();
                        //$(this).attr('target', '_blank');
                        // $(this).attr('href', 'javascript:void(0);');
                    });


                });

            },
            complete: function (res) {
                if (checkRow()) {
                    makeitred();

                }
                // $(".my_health .form-type-radios").each(function(){

                //     var line_is_normal=true;
                //     var each_line_my_health_radio=  $(this);
                //     $(each_line_my_health_radio).find('input').each(function(){

                //         var each_input_my_health_radio=  $(this);

                //         if(each_input_my_health_radio.is(':checked')){
                //             line_is_normal=false;
                //         }
                //         if(line_is_normal){
                //             each_line_my_health_radio.prev().css( "color", "red" );
                //         }else{
                //             each_line_my_health_radio.prev().css( "color", "black" );
                //         }
                //         each_input_my_health_radio.click(function() {

                //             $(this).parents('.form-type-radios').prev().css( "color", "black" );

                //          });


                //     });



                // });
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

    }
  if (window.cus_id) {

        // $(".dashboard_templt").addClass('loading');
        $('#health_qstns_modal .close').click(function () {
            window.location.reload(true);
        });

        $('#lap_report .lap_table').on('click', '.view-dna-reports', function (event) {
            event.preventDefault();
            if (!$(this).hasClass('viewed')) {
                $('#lap_report .modal-body').addClass("loading");
                $.get('https://app.iqyouhealth.com/api/dna-reports?user_key=' + window.cus_id + '&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7', {
                    dataType: 'jsonp'
                }, function (res) {
                    $('#lap_report').addClass('view_report');
                    $('#lap_report .lap_table').append(res.dna_reports);
                    $('#lap_report .lap_table').find('a.moreup').hide();
                    $('#lap_report .modal-body').removeClass("loading");
                    $('#lap_report .view-dna-reports').text('Hide').addClass('viewed');
                });
            } else {
                $('#lap_report #dnatable').slideToggle("fast", "linear", function () {

                    if ($('#lap_report #dnatable').is(":visible")) {
                        $('#lap_report .view-dna-reports').text('Hide');
                    } else {
                        $('#lap_report .view-dna-reports').text('View');
                    }

                });


            }
        });

        $('#lap_report .lap_table').on('click', '.download-dna-reports', function (event) {
            event.preventDefault();
            $.get('https://app.iqyouhealth.com/api/download-dna-reports?user_key=' + window.cus_id + '&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7', {
                dataType: 'jsonp',
                xhrFields: {
                    responseType: 'blob'
                }
            }, function (res) {
                var blob = new Blob([res]);
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'DNA-Reports.pdf';
                link.click();
            });
        });

        $('#lap_report .lap_table').on('click', 'a.moredown,.moredown', function (event) {
            event.preventDefault();
            var r = $(this).attr("rel");
            $('#lap_report .lap_table').find("#more-" + r).show();
            $('#lap_report .lap_table').find("#shortsummary-" + r).hide();
        });

        $('#lap_report .lap_table').on('click', 'a.moreup,.moreup', function (event) {
            event.preventDefault();
            var r = $(this).attr("rel");
            $('#lap_report .lap_table').find("#more-" + r).hide();
            $('#lap_report .lap_table').find("#shortsummary-" + r).show();
        });

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

    } else {
        //$("#no_iqyou_account").modal({'show':true});
    }
  
  if (window.cus_id) {
   


        function metabolic_risk() {
            var request = {
                	"Content-Type":"application/json",
                	"accept": "application/json",
                	crossDomain: true,
                	"api-key": "c6701296-5027-4076-b80c-d64a77c2ddc7"
              };
            $.ajax({

                url: 'https://api.iqyouhealth.com/api/v1/metabolic_risk?user_key=' + window.cus_id + '&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7',
                type: 'GET',
                crossDomain: true,
                headers: request,
                success: function (res) {
                    var a, b, c;
                    $.each(res.toxins.detailed, function (i, v) {

                        if (i == 4) {
                            c = "<h4>" + v.cause + "</h4><p>" + v.description + "</p>";
                        }
                        if (i == 578) {
                            a = "<h4>" + v.cause + "</h4><p>" + v.description + "</p>";
                        }
                        if (i == 309) {
                            b = "<h4>" + v.cause + "</h4><p>" + v.description + "</p>";
                        }


                    });

                    $("#toxin_score .modal-body").append(a + b + c);
                },
                error: function (xhr, status, err) {
                    console.log(err);
                }
            });

        }
    }

    $( document ).ready(function() {
    //         $('.save-custom-url a').click(function(){
    //             alert("hii");
    //             alert($(this).attr('rec-id'));
    //         });
        // $('.add-recommendation').click(function() {
        // 	$('#new_recommendation_modal').modal('show');
        //  });
      $('.save_new_recom').click(function() { 
          $('#new_recommendation_modal').modal('hide');
          data = {};
          data.recommendation_name = $('#new_recom_name').val()
        $('#new_recom_name').val('');
           $.ajax({
                  url: 'https://app.iqyouhealth.com/api/my-plan_stage?user_key='+window.cus_id+'&api_key=c6701296-5027-4076-b80c-d64a77c2ddc7',
                  type: 'POST',
                  data:data,
                  crossDomain: true,
                  success:function(res){
                    list_my_plan();
                    $(".top_reommend_sec").removeClass('loading');
                  },
                  error:function(xhr,status,err)
                  {
                    console.log(err);
                  }
             });
       });
  $('.confirm_remove_recom').click(function() {
      //$(".top_reommend_sec").addClass('loading');
    $('#remove_recommendation_confirm_modal').modal('hide'); 
        var rec_id = $(this).attr('data-id');                               
          remove_from_my_plan(rec_id);                          	
      });
  $('.cancel_remove_recom').click(function() {
      $('#remove_recommendation_confirm_modal').modal('hide');                         	
      });
         });
  
});
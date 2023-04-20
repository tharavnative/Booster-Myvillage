jQuery.noConflict();
jQuery(function ($) {
  //old api laravel.iqyouhealth.com
//$('#laravel_qstn_confirm_modal').modal('show');
//$('#membership_popup').modal('hide');
//$("#no_iqyou_account").modal({'show':true});

  function clickLabResults(){
    $('#allresults').click(function() {
      $('.values-allresults').show();
      $('.values-cbc').hide();
    });
    $('#keyfindings').click(function() {
      $('.values-allresults').hide();
      $('.values-cbc').show();
    });
   $('.lessdata').each(function() {
       $(this).click(function() {
         $(this).hide();
         $(this).siblings('.lessdata').hide();
         $(this).siblings('.moredata').show();
         $(this).siblings('.values').show();
         }); 
    }); 
    $('.moredata').each(function() {
       $(this).click(function() {
         $(this).hide();
         $(this).siblings('.moredata').hide();
         $(this).siblings('.lessdata').show();
         $(this).siblings('.values').hide();
         }); 
    }); 
    $
  }
  
  function addCheckedProp(){
   $('#health_qstns_modal_laravel').find("input").each(function() {
      if($(this).attr('data-checked') === 'checked'){       
      	$(this).prop('checked',true);
      
      }else{
      	$(this).prop('checked',false);
       
      }
    }); 
  }
  function loadPopUp(id){
  	$('#' + id ).modal('show');
  }
  function hidePopUp(id){
  	$('#' + id ).modal('hide');
  }
  function loadingCompletion() {  
    addCheckedProp();
  $('#api-questionnaire-body').removeClass('loading-blue');
  }
  
  function checkUnAnswered() {  
    localStorage.setItem('save_click', true);
    var checked_flag = false; 
    var update_input = true;
    var data_lane = $('.api-health_box.active').attr('data-lane');
    $('.api-questions-section[lane-id="' + data_lane + '"]').find(".api-page-radio-main.questions").each(function() {
      checked_flag = false; 
      $(this).find('input').each(function() {
      if($(this).is(":checked")==true){
		checked_flag = true;
        
      	}
        });
      if(checked_flag == false){
        update_input = false;
      	$(this).parent().find('.api-page-title-header').addClass('un-answered');
        $(this).parent().find('.api-page-title-header').css('color', 'red');
      }
      });
    if(update_input == true){
      updateRadioInput();
      var data_lane = localStorage.getItem('upcoming_lane');
      checkLaneLoading(data_lane);
      return false;
    }else{
    	loadPopUp('laravel_qstn_confirm_modal');
      return false;
    }
    }
  
  function checkUnAnsweredHealthBox() {  
    var checked_flag = false; 
    var update_input = true;
    var data_lane = $('.api-health_box.active').attr('data-lane');
    $('.api-questions-section[lane-id="' + data_lane + '"]').find(".api-page-radio-main.questions").each(function() {
      checked_flag = false; 
      $(this).find('input').each(function() {
      if($(this).is(":checked")==true){
		checked_flag = true;
        
      	}
        });
      if(checked_flag == false){
        update_input = false;
      	$(this).parent().find('.api-page-title-header').addClass('un-answered');
        $(this).parent().find('.api-page-title-header').css('color', 'red');
      }
      });
    if(update_input == true){
      var data_lane = localStorage.getItem('upcoming_lane');
      checkLaneLoading(data_lane);
      return false;
    }else{
    	loadPopUp('laravel_qstn_confirm_modal_navigation');
      return false;
    }
    }
  function checkPreviousUnAnswered() {  
    if(localStorage.getItem('save_click') == true){
      $(".api-page-radio-main.questions").each(function() {
      checked_flag = false; 
      $(this).find('input').each(function() {
      if($(this).is(":checked")==true){
		checked_flag = true;        
      	}
        });
      if(checked_flag == false){
        update_input = false;
      	$(this).parent().find('.api-page-title-header').addClass('un-answered');
        $(this).parent().find('.api-page-title-header').css('color', 'red');
      }
      });
    } 
    }
  function updateRadioInput() {  
    var data = {};  
    var key = '';
    var value = '';
      $(".api-page-radio-main.questions").each(function() {
        key = 'INPUT_' + $(this).attr('input-id');
        if(key !== 'undefined'){
         value = $(this).find('.api-radio-input:checked').val();       
         data[key] = value; 
        }
      });
      $(".api-select-groups").each(function() {
        
        key = 'GROUP_' + $(this).attr('group-id');
        if(key !== 'undefined'){
         value = $(this).val(); 
         data[key] = value; 
        }
      
      });
    // sendRequest('post', 'https://api.iqyouhealth.com/api/v1/health_questions', data, updateRadioInputCallback);
    sendRequest('post', 'https://api.iqyouhealth.com/api/v1/health_questions', data, updateRadioInputCallback);
    
    };
  function updateRadioInputCallback() {  
  	$('.api-health_box').removeClass("loaded");
    
  }
  function tellUsMore() {
    $('.api-main-radio-input').click(function(){
    	var page_id = $(this).attr('page-id');
      if($(this).val() === '0'){
        $('#api-main-page-item-child-' + page_id).find('.api-main-page-item').find('.api-page-radio-item').find('.api-radio-input[value="0"]').prop('checked', true);
        $('#api-main-page-item-child-' + page_id).find('.api-main-page-item').find('.api-page-radio-item').find('.api-radio-input[value="0"]').attr('data-checked', "checked");
        $('#api-main-page-item-child-' + page_id).find('.api-main-page-item').find('.api-page-radio-item').find('.api-radio-input[value="1"]').attr('data-checked', "");
        $('#api-main-page-item-child-' + page_id).hide();
      }else{
        $('#api-main-page-item-child-' + page_id).find('.api-main-page-item').find('.api-page-radio-item').find('.api-radio-input[value="0"]').attr('data-checked', "");
        $('#api-main-page-item-child-' + page_id).find('.api-main-page-item').find('.api-page-radio-item').find('.api-radio-input[value="1"]').attr('data-checked', "checked");
        $('#api-main-page-item-child-' + page_id).show();
      }
  });
  }
  function hidePrevNextButton(){    
    var prev_lane = $('.api-health_box.active').prev('.api-health_box').attr('data-lane');
    var next_lane = $('.api-health_box.active').next('.api-health_box').attr('data-lane');
  	if(prev_lane === undefined){

    	$('#api-laravel-prev').hide();
    }else{

    $('#api-laravel-prev').show();
    }
    if(next_lane === undefined){

    	$('#api-laravel-next').hide();
    }else{

      $('#api-laravel-next').show();
    }
  }
  function checkLaneLoading(data_lane){
  if(data_lane !== 'undefined'){
      if(!($('.api-health_box[data-lane="' + data_lane + '"]').hasClass('active'))){
           if(!($('.api-health_box[data-lane="' + data_lane + '"]').hasClass('loaded'))){
            	changeActiveLane($('.api-health_box[data-lane="' + data_lane + '"]').attr('data-lane'));
           }else{
           		displayLoadedLane($('.api-health_box[data-lane="' + data_lane + '"]').attr('data-lane'));
           }
      }
    }
    hidePrevNextButton();
  }
  function displayMainPageQuestions(questions) {
    var lane_id = questions['@attributes']['lane'];
     var page_contents = questions['input'];
     var current_group_id=0;
     $.each(page_contents , function(index, val) { 
       var main_page_html ='';
  		var page_content = val['@attributes'];  
       if(page_content.group_id !=='0'){
         //console.log(page_content.group_id + "->" + page_content.input_id  + "->" + page_content.value);
         if(page_content.group_id !== current_group_id){
           	if(current_group_id !== 0){
                main_page_html = main_page_html +'</select></div></div>';
               current_group_id = 0;
             }
            current_group_id = page_content.group_id;
           main_page_html = main_page_html +'<div class="api-page-select-main">';
           	main_page_html = main_page_html +'<div class="api-select-label-common"><label for="api-group-' + page_content.group_id + '">' + page_content.group_name + '</label>';
            main_page_html = main_page_html +'<select name="api-group-' + page_content.group_id + '" id="api-group-' + page_content.group_id + '" class="api-select-groups" group-id="' + page_content.group_id + '"></div>';
            main_page_html = main_page_html +'<option value="-1">No Answer</option>';
           
           if(page_content.value === '1'){
             main_page_html = main_page_html +'<option value="' + page_content.input_id + '" selected>' + page_content.smart_prompt + '</option>';
           }else{
            main_page_html = main_page_html +'<option value="' + page_content.input_id + '">' + page_content.smart_prompt + '</option>';
           }
         }else{
         	if(page_content.value === '1'){
             main_page_html = main_page_html +'<option value="' + page_content.input_id + '" selected>' + page_content.smart_prompt + '</option>';
           }else{
            main_page_html = main_page_html +'<option value="' + page_content.input_id + '">' + page_content.smart_prompt + '</option>';
           }
         }
       }else{
         if(current_group_id !== 0){
         	main_page_html = main_page_html +'</select></div></div>';
           current_group_id = 0;
         }
         if(page_content.value!=='0'){
           $('#api-main-page-item-child-' + page_content.page).show();
           $('#page-radio-id-' + page_content.page + '[value="1"]').attr('data-checked', "checked");
           $('#page-radio-id-' + page_content.page + '[value="0"]').attr('data-checked', "");
         }
        if(page_content.used==='1'){
        var unknown_checked = page_content.value==='-1' ? "checked" :"" ;
         var yes_checked = page_content.value==='1' ? "checked" :"" ;
         var no_checked = page_content.value==='0' ? "checked" :"" ;
         }else{
           var unknown_checked = "" ;
         var yes_checked = "" ;
         var no_checked = "" ;
         }
        main_page_html = main_page_html + '<div class="api-main-page-item" id="api-main-page-item-' + page_content.input_id + '">';
        main_page_html = main_page_html + '<div class="api-page-title-header"><h3>' + page_content.smart_prompt + '</h3>';
        main_page_html = main_page_html + '</div>';
       main_page_html = main_page_html + '<div class="api-page-radio-main questions"  input-id="' + page_content.input_id + '"><div class="api-page-radio-item"><input type="radio"  name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="1" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + yes_checked + '" > <label class="option">Yes</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="0" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + no_checked + '"> <label class="option">No</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="-1" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + unknown_checked + '"> <label class="option">Unknown</label></div></div>';
        main_page_html = main_page_html + '</div>'; 
       }
       
       if(!current_group_id){
         $('#api-main-page-item-child-' + page_content.page).append(main_page_html);
       }
     });
  }
  function displayMainPage(pages,questions) {
    var lane_id = questions['@attributes']['lane'];
    var main_page_html ='<div class="api-questions-section" id="api-questions-section-' + lane_id + '" lane-id="' + lane_id + '">';
    for (var page in pages) {
      if (pages.hasOwnProperty(page)) {
        var val = pages[page];
        var page_content = val['@attributes'];
        main_page_html = main_page_html + '<div class="api-main-page-item" id="api-main-page-item-' + page_content.id + '" page-id="' + page_content.id + '">';
        main_page_html = main_page_html + '<div class="api-page-title-header"><h3>' + page_content.title + '</h3>';
        main_page_html = main_page_html + '<div class="api-main-page-item-header"><b>' + page_content.header + '</b></div></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-main"><div class="api-page-radio-item"><input type="radio"id="page-radio-id-' + page_content.id + '" name="page-radio-id-' + page_content.id + '" value="1" class="expandpage form-radio api-main-radio-input" page-id="' + page_content.id + '"> <label class="option">Tell us more</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio"id="page-radio-id-' + page_content.id + '" name="page-radio-id-' + page_content.id + '" value="0" class="expandpage form-radio api-main-radio-input"  page-id="' + page_content.id + '" data-checked="checked"> <label class="option">No</label></div></div>';
        main_page_html = main_page_html + '<div class="api-main-page-item-child" id="api-main-page-item-child-' + page_content.id + '" style="display:none"></div>';
        main_page_html = main_page_html + '</div>';
      }
      }
    main_page_html = main_page_html + '</div>'; 

    $('.api-questions-section').hide();
    $('#api-questionnaire-body').append(main_page_html);
    displayMainPageQuestions(questions);
     tellUsMore();
  }
  function displayQuestions(questions) {
    var lane_id = questions['@attributes']['lane'];
     var page_contents = questions['input'];
    var main_page_html ='<div class="api-questions-section" id="api-questions-section-' + lane_id + '" lane-id="' + lane_id + '">';
     var current_group_id=0;
     $.each(page_contents , function(index, val) { 
  		var page_content = val['@attributes'];  
       if(page_content.group_id !=='0'){
         //console.log(page_content.group_id + "->" + page_content.input_id  + "->" + page_content.value);
         if(page_content.group_id !== current_group_id){
           	if(current_group_id !== 0){
                main_page_html = main_page_html +'</select></div></div>';
               current_group_id = 0;
             }
            current_group_id = page_content.group_id;
            main_page_html = main_page_html +'<div class="api-page-select-main">';
           	main_page_html = main_page_html +'<div class="api-select-label-common"><label for="api-group-' + page_content.group_id + '">' + page_content.group_name + '</label>';
            main_page_html = main_page_html +'<select name="api-group-' + page_content.group_id + '" id="api-group-' + page_content.group_id + '" class="api-select-groups" group-id="' + page_content.group_id + '">';
            main_page_html = main_page_html +'<option value="-1">No Answer</option>';
           
           if(page_content.value === '1'){
             main_page_html = main_page_html +'<option value="' + page_content.input_id + '" selected>' + page_content.smart_prompt + '</option>';
           }else{
            main_page_html = main_page_html +'<option value="' + page_content.input_id + '">' + page_content.smart_prompt + '</option>';
           }
         }else{
         	if(page_content.value === '1'){
             main_page_html = main_page_html +'<option value="' + page_content.input_id + '" selected>' + page_content.smart_prompt + '</option>';
           }else{
            main_page_html = main_page_html +'<option value="' + page_content.input_id + '">' + page_content.smart_prompt + '</option>';
           }
         }
       }else{
         if(current_group_id !== 0){
         	main_page_html = main_page_html +'</select></div></div>';
           current_group_id = 0;
         }
         if(page_content.used==='1'){
        var unknown_checked = page_content.value==='-1' ? "checked" :"" ;
         var yes_checked = page_content.value==='1' ? "checked" :"" ;
         var no_checked = page_content.value==='0' ? "checked" :"" ;
         }else{
           var unknown_checked = "" ;
         var yes_checked = "" ;
         var no_checked = "" ;
         }
        main_page_html = main_page_html + '<div class="api-main-page-item questions-radio" id="api-main-page-item-' + page_content.input_id + '" input_id="' + page_content.input_id + '">';
        main_page_html = main_page_html + '<div class="api-page-title-header"><h3>' + page_content.smart_prompt + '</h3>';
        main_page_html = main_page_html + '</div>';
        main_page_html = main_page_html + '<div class="api-page-radio-main questions"  input-id="' + page_content.input_id + '"><div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="1" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + yes_checked + '" > <label class="option">Yes</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="0" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + no_checked + '"> <label class="option">No</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="-1" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + unknown_checked + '"> <label class="option">Unknown</label></div></div>';
        main_page_html = main_page_html + '</div>'; 
       }
     });
    main_page_html = main_page_html + '</div>'; 
     $('.api-questions-section').hide();
    $('#api-questionnaire-body').append(main_page_html);
    
  }
  function displaySmartQuestions(questions) {
    var lane_id = 'smart';

     var page_contents = questions['input'];
    var main_page_html ='<div class="api-questions-section" id="api-questions-section-' + lane_id + '" lane-id="' + lane_id + '">';
     var current_group_id=0;
     $.each(page_contents , function(index, val) { 
  		var page_content = val['@attributes'];  
       if(page_content.group_id !=='0'){
         //console.log(page_content.group_id + "->" + page_content.input_id  + "->" + page_content.value);
         if(page_content.group_id !== current_group_id){
           	if(current_group_id !== 0){
                main_page_html = main_page_html +'</select></div></div>';
               current_group_id = 0;
             }
            current_group_id = page_content.group_id;
            main_page_html = main_page_html +'<div class="api-page-select-main">';
           	main_page_html = main_page_html +'<div class="api-select-label-common"><label for="api-group-' + page_content.group_id + '">' + page_content.group_name + '</label>';
            main_page_html = main_page_html +'<select name="api-group-' + page_content.group_id + '" id="api-group-' + page_content.group_id + '" class="api-select-groups"  group-id="' + page_content.group_id + '">';
            main_page_html = main_page_html +'<option value="-1">No Answer</option>';
           
            if(page_content.value === '1'){
             main_page_html = main_page_html +'<option value="' + page_content.input_id + '" selected>' + page_content.smart_prompt + '</option>';
           }else{
            main_page_html = main_page_html +'<option value="' + page_content.input_id + '">' + page_content.smart_prompt + '</option>';
           }
         }else{
         	if(page_content.value === '1'){
             main_page_html = main_page_html +'<option value="' + page_content.input_id + '" selected>' + page_content.smart_prompt + '</option>';
           }else{
            main_page_html = main_page_html +'<option value="' + page_content.input_id + '">' + page_content.smart_prompt + '</option>';
           }
         }
       }else{
         if(current_group_id !== 0){
         	main_page_html = main_page_html +'</select></div></div>';
           current_group_id = 0;
         }
        if(page_content.used==='1'){
        var unknown_checked = page_content.value==='-1' ? "checked" :"" ;
         var yes_checked = page_content.value==='1' ? "checked" :"" ;
         var no_checked = page_content.value==='0' ? "checked" :"" ;
         }else{
           var unknown_checked = "" ;
         var yes_checked = "" ;
         var no_checked = "" ;
         }
        main_page_html = main_page_html + '<div class="api-main-page-item questions-radio" id="api-main-page-item-' + page_content.input_id + '"  input_id="' + page_content.input_id + '">';
        main_page_html = main_page_html + '<div class="api-page-title-header"><h3>' + page_content.smart_prompt + '</h3>';
        main_page_html = main_page_html + '</div>';
        main_page_html = main_page_html + '<div class="api-page-radio-main questions"  input-id="' + page_content.input_id + '"><div class="api-page-radio-item"><input type="radio"  name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="1" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + yes_checked + '" > <label class="option">Yes</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio"  name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="0" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + no_checked + '"> <label class="option">No</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="-1" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + unknown_checked + '"> <label class="option">Unknown</label></div></div>';
        main_page_html = main_page_html + '</div>'; 
       }
     });
    main_page_html = main_page_html + '</div>'; 
     $('.api-questions-section').hide();
    $('#api-questionnaire-body').append(main_page_html);
  }
  
  function displaySmartQuestionsUsedInput(questions) {
    var lane_id = 'smart';

	var obj = questions[1];
    obj = obj['get_smartquestions'];
    var page_contents = obj['usedinput'];

    var main_page_html ='<div class="api-questions-section" id="api-questions-section-' + lane_id + '" lane-id="' + lane_id + '">';
     var current_group_id=0;
     $.each(page_contents , function(index, val) { 
  		var page_content = val['@attributes'];  
       if(page_content.group_id !=='0'){
         //console.log(page_content.group_id + "->" + page_content.input_id  + "->" + page_content.value);
         if(page_content.group_id !== current_group_id){
           	if(current_group_id !== 0){
                main_page_html = main_page_html +'</select></div></div>';
               current_group_id = 0;
             }
            current_group_id = page_content.group_id;
            main_page_html = main_page_html +'<div class="api-page-select-main">';
           	main_page_html = main_page_html +'<div class="api-select-label-common"><label for="api-group-' + page_content.group_id + '">' + page_content.group_name + '</label>';
            main_page_html = main_page_html +'<select name="api-group-' + page_content.group_id + '" id="api-group-' + page_content.group_id + '" class="api-select-groups"  group-id="' + page_content.group_id + '">';
            main_page_html = main_page_html +'<option value="-1">No Answer</option>';
           
            if(page_content.value === '1'){
             main_page_html = main_page_html +'<option value="' + page_content.input_id + '" selected>' + page_content.smart_prompt + '</option>';
           }else{
            main_page_html = main_page_html +'<option value="' + page_content.input_id + '">' + page_content.smart_prompt + '</option>';
           }
         }else{
         	if(page_content.value === '1'){
             main_page_html = main_page_html +'<option value="' + page_content.input_id + '" selected>' + page_content.smart_prompt + '</option>';
           }else{
            main_page_html = main_page_html +'<option value="' + page_content.input_id + '">' + page_content.smart_prompt + '</option>';
           }
         }
       }else{
         if(current_group_id !== 0){
         	main_page_html = main_page_html +'</select></div></div>';
           current_group_id = 0;
         }
        if(page_content.used==='1'){
        var unknown_checked = page_content.value==='-1' ? "checked" :"" ;
         var yes_checked = page_content.value==='1' ? "checked" :"" ;
         var no_checked = page_content.value==='0' ? "checked" :"" ;
         }else{
           var unknown_checked = "" ;
         var yes_checked = "" ;
         var no_checked = "" ;
         }
        main_page_html = main_page_html + '<div class="api-main-page-item questions-radio" id="api-main-page-item-' + page_content.input_id + '"  input_id="' + page_content.input_id + '">';
        main_page_html = main_page_html + '<div class="api-page-title-header"><h3>' + page_content.smart_prompt + '</h3>';
        main_page_html = main_page_html + '</div>';
        main_page_html = main_page_html + '<div class="api-page-radio-main questions"  input-id="' + page_content.input_id + '"><div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="1" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + yes_checked + '" > <label class="option">Yes</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="0" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + no_checked + '"> <label class="option">No</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + page_content.input_id + '-lane-' + lane_id + '" value="-1" class="expandpage form-radio api-radio-input question-radio-id-' + page_content.input_id + '" input_id="' + page_content.input_id + '" data-checked = "' + unknown_checked + '"> <label class="option">Unknown</label></div></div>';
        main_page_html = main_page_html + '</div>'; 
       }
     });
    main_page_html = main_page_html + '</div>'; 
     //$('.api-questions-section').hide();
    $('#api-smart-update-body').append(main_page_html);
    $('#api-smart-update-body').show();
    $('#api-laravel-update').show();
    addCheckedProp();
  }
  function displayPercentage(data) {
   var swim = data.swim;
    var swims = data.swims;
    var completions = data.completions;
    for (var key in swims) {
      if (swims.hasOwnProperty(key)) {
        var val = swims[key];        
        if((key !== 'smart') && (key !== 'rx')){
          var percent_data = completions[key];
          var percent = percent_data['completion'];
          $('.api-health_box[data-lane="' + key + '"]').find('span').text(percent + '%');
        }
        if(swim === key){
          $('.api-health_box').removeClass("active");
        $('.api-health_box[data-lane="' + key + '"]').addClass("active");
          $('.api-health_box[data-lane="' + key + '"]').addClass("loaded");
          if (!($('.api-health_box[data-lane="' + key + '"]').hasClass( "instruction-added" ) ) ){
          $('.api-health_box[data-lane="' + key + '"]').addClass("instruction-added");         
          var instruction='<h2 class="api-instruction" data-uw-styling-context="true" lane-id="' + key + '">' + val.instructions + '</h2>';
           $('.api-instruction').hide();
          $('.api-questionnaire-instruction').append(instruction);
          }
          hidePrevNextButton();
          $('.api-pagetitle').text(val.label);
        }
        $('.api-health_box[data-lane="' + key + '"]').find('h4').text(val.label);
      }
    }
  }
  function changeActiveLane(data_lane) {
    $('#api-smart-update-body').hide();
    $('#api-laravel-update').hide();
    if( $('#api-questions-section-' + data_lane).length )
          {
			$('#api-questions-section-' + data_lane).remove();
          }
      switch(data_lane){
      case '201':
        getHealthQuestions();
        break;
      case '11':
        getFamilyHistory();
        loadPopUp('laravel_qstn_family_modal');
        break;
      case '103':
        getFoodDiet();
        break;
      case '105':
        getLifestyle();
        break;
      case 'rx':
        getMedication()
        break;
      case 'smart':
        getSmartQuestions();
          loadPopUp('laravel_qstn_smart_modal');
        break;
    }
    }
  function displayLoadedLane(data_lane) {
    $('#api-smart-update-body').hide();
    $('#api-laravel-update').hide();
    $('.api-health_box').removeClass('active');
    $('.api-health_box[data-lane="' + data_lane + '"]').addClass('active');
    $('.api-questions-section').hide();
    $('.api-questions-section[lane-id="' + data_lane + '"]').show();
    $('.api-instruction').hide();
    $('.api-instruction[lane-id="' + data_lane + '"]').show();
    $('.api-pagetitle').text($('.api-health_box[data-lane="' + data_lane + '"]').find('h4').text());
    if(data_lane === 'smart'){
      $('#api-smart-update-body,#api-laravel-update').show();
    }else{
    	$('#api-smart-update-body,#api-laravel-update').hide();
    }
    addCheckedProp();
    
    }
  function med_append_click(med_name,med_id){
    $( "#med-name" ).autocomplete({
               source: med_name,
               autoFocus:true
            });
    $('#med-name').keypress(function (e) {
      var main_page_html = '';
      var unknown_checked = "" ;
      var yes_checked = "" ;
      var no_checked = "" ;
      var lane_id = 'rx';
     var key = e.which;
     if(key == 13)  
      {
        var med_key = $('#med-name').val();
        var med_index = med_name.indexOf(med_key);
        var med_input_id = med_id[med_index];
        main_page_html = main_page_html + '<div class="api-main-page-item questions-radio" id="api-main-page-item-' + med_input_id + '"  input_id="' + med_input_id + '">';
        main_page_html = main_page_html + '<div class="api-page-title-header"><h3>' + med_key + '</h3>';
        main_page_html = main_page_html + '</div>';
        main_page_html = main_page_html + '<div class="api-page-radio-main questions"  input-id="' + med_input_id + '"><div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + med_input_id + '-lane-' + lane_id + '" value="1" class="expandpage form-radio api-radio-input question-radio-id-' + med_input_id + '" input_id="' + med_input_id + '" data-checked = "' + yes_checked + '" > <label class="option">Yes</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + med_input_id + '-lane-' + lane_id + '" value="0" class="expandpage form-radio api-radio-input question-radio-id-' + med_input_id + '" input_id="' + med_input_id + '" data-checked = "' + no_checked + '"> <label class="option">No</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + med_input_id + '-lane-' + lane_id + '" value="-1" class="expandpage form-radio api-radio-input question-radio-id-' + med_input_id + '" input_id="' + med_input_id + '" data-checked = "' + unknown_checked + '"> <label class="option">Unknown</label></div></div>';
        main_page_html = main_page_html + '</div>'; 
        $('#api-questions-section-rx .med-items-section').append(main_page_html);
        $('#med-name').val('');
      }
    }); 
  }

  function storeMedications(medications){
    var obj = medications;
    var med_name = [];
    var med_id = [];
    var selected_med_html = '';
    var lane_id = 'rx';
    $.each(obj, function(key,val) {
      var row = val['@attributes'];
      med_id.push(row.input_id);
      med_name.push(row.name);
      if(row.used === '1'){
        var unknown_checked = row.value==='-1' ? "checked" :"" ;
        var yes_checked = row.value==='1' ? "checked" :"" ;
        var no_checked = row.value==='0' ? "checked" :"" ;
        var med_input_id = row.input_id;
        var med_key = row.name;
        main_page_html = '';
        main_page_html = main_page_html + '<div class="api-main-page-item questions-radio" id="api-main-page-item-' + med_input_id + '"  input_id="' + med_input_id + '">';
        main_page_html = main_page_html + '<div class="api-page-title-header"><h3>' + med_key + '</h3>';
        main_page_html = main_page_html + '</div>';
        main_page_html = main_page_html + '<div class="api-page-radio-main questions"  input-id="' + med_input_id + '"><div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + med_input_id + '-lane-' + lane_id + '" value="1" class="expandpage form-radio api-radio-input question-radio-id-' + med_input_id + '" input_id="' + med_input_id + '" data-checked = "' + yes_checked + '" > <label class="option">Yes</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + med_input_id + '-lane-' + lane_id + '" value="0" class="expandpage form-radio api-radio-input question-radio-id-' + med_input_id + '" input_id="' + med_input_id + '" data-checked = "' + no_checked + '"> <label class="option">No</label></div>';
        main_page_html = main_page_html + '<div class="api-page-radio-item"><input type="radio" name="question-radio-id-' + med_input_id + '-lane-' + lane_id + '" value="-1" class="expandpage form-radio api-radio-input question-radio-id-' + med_input_id + '" input_id="' + med_input_id + '" data-checked = "' + unknown_checked + '"> <label class="option">Unknown</label></div></div>';
        main_page_html = main_page_html + '</div>'; 
        selected_med_html = selected_med_html + main_page_html;
      }
    }); 
    
    var main_page_html ='<div class="api-questions-section" id="api-questions-section-' + lane_id + '" lane-id="' + lane_id + '">';
    main_page_html = main_page_html + '<div class="med-input-section"><label> Enter atleast 4 letters of medicine<input type="text" name="med_name" id="med-name" ></label></div><div class="med-items-section"></div>"';
    main_page_html = main_page_html + '</div>';
    $('.api-questions-section').hide();
    $('#api-questionnaire-body').append(main_page_html);
    $('#api-questions-section-rx .med-items-section').html(selected_med_html);
    med_append_click(med_name,med_id);
      
  }
  function listRecommendationFilters(recommendationOptions) {
    var obj = recommendationOptions;
    var recom_options_html='<option value="">All</option>';
    $.each(obj, function(k, v) {
        recom_options_html = recom_options_html +'<option value="' + v + '">' + v + '</option>';
    });
     $('#recommendation-filter').html(recom_options_html);
      $('#recommendation-filter').on('change', function() {
        $('.recommendation-items').hide();
        var cat  = $(this).val().replace(/ /g,"_");
        $('.recommendation-items.' + cat).show();
      });
  }

  function getRecommendationUrl(label,rec_urls,rec_id) {
    var t = label.trim();
    var rec_name = t;
    t = t.toLowerCase();
    var l ='';
    var action = '';
    var btn_text = '';
    if(rec_urls.hasOwnProperty(rec_id)){
      l = rec_urls[rec_id];
      btn_text = "Buy Now";
    }else if (t === ('Vitamin B1').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=thiamin*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Vitamin B1 (thiamine)').toLowerCase()) {
                action = "Vitamin B1 is an essential water-soluble vitamin that is required for carbohydrate metabolism, glucose regulation, antioxidant functions and regulating heart and nerve function. Taking a multivitamin or B vitamin supplement will likely cover your need for vitamin B1 (thiamine).";
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=thiamin*&view=ls";
                btn_text = "Shop Now";
            }
            else if (t === ('Vitamin B2').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=vitamin*+b2*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Vitamin B2 (riboflavin)').toLowerCase()) {
                action = "Vitamin B2 is an essential water-soluble vitamin needed for energy metabolism, adrenal function and maintaining heathy skin. Supplementing with vitamin B2 (riboflavin) may be recommended to help meet your body’s needs.";
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=vitamin*+b2*&view=ls";
                btn_text = "Shop Now";
            }
            else if (t === ('Niacinamide').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=Niacinamide";
                btn_text = "Shop Now";
            }
            else if (t === ('Supplement with niacinamide (Vitamin B3)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=Niacinamide&view=ls";
                btn_text = "Shop Now";
                action = "Niacinamide is a form of vitamin B3. This essential water-soluble vitamin is required for helping your body turn food into energy. It is also important for your nervous system, digestive system, and skin health. Supplementing with niacinamide may be necessary to help meet your body’s needs.";
            }
            else if (t === ('Pantothenic Acid').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=Pantothenic*+Acid*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take pantothenic acid').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=Pantothenic*+Acid*&view=ls";
                btn_text = "Shop Now";
                action = "Vitamin B5 or pantothenic acid is an essential water-soluble vitamin required to form coenzyme-A, which helps to synthesize and metabolize proteins, carbohydrates, and fats, and turn them into usable energy. Pantothenic acid also supports healthy adrenal function and may be helpful during times of stress. Taking a B-complex supplement or multivitamin formula can cover your need for pantothenic acid. However, it is also available as a stand-alone supplement when more is needed.";
            }
            else if (t === ('Vitamin B6').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=vitamin*+b6*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Vitamin B6').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=vitamin*+b6*&view=ls";
                action = "Vitamin B6 is an essential water-soluble vitamin that helps the body convert protein to energy and works with folic acid and B12 to reduce homocysteine levels. Supplementing with vitamin B6 (pyridoxine) can be necessary to help meet your body’s needs.";
                btn_text = "Shop Now";
            }
            else if (t === ('Vitamin B12').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=vitamin*+b12*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Vitamin B12').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=vitamin*+b12*&view=ls";
                action = "Vitamin B12 is an essential water-soluble vitamin that is needed to form red blood cells. B12 also plays an important role in nervous system health and homocysteine regulation. Most multivitamin or B vitamin supplements should meet your needs for vitamin B12. However, sometimes taking a stand-alone vitamin B12 supplement is necessary to meet your body's needs.";
                btn_text = "Shop Now";
            }
            else if (t === ('Folic Acid').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=folic*+acid*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take folic acid').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=folic*+acid*&view=ls";
                action = "Folic acid is a water-soluble vitamin required for the synthesis of DNA  and RNA, producing red blood cells and helping cell division and growth. While green leafy vegetables are rich in folic acid, you may need to supplement with this B vitamin for optimal levels.";
                btn_text = "Shop Now";
            }
            else if (t === ('Biotin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=biotin*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Biotin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=biotin*&view=ls";
                action = "Biotin is a member of the B vitamin family. IIt is an important coenzyme involved in the biosynthesis of fatty acids, energy production, and metabolism. Supplemental biotin is often recommended to help support healthy skin, nails and hair. Most multivitamin or B vitamin supplements should meet your needs for biotin, but it is also available as an individual supplement when a higher dosage is needed.";
                btn_text = "Shop Now";
            }
            else if (t === ('Choline').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=choline*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Choline').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=choline*&view=ls";
                action = "Choline is an essential water-soluble nutrient involved in synthesis of phospholipids for the structure of cell membranes. Choline also plays a role in cell messaging, fat transport and DNA synthesis. Most multivitamin or B vitamin supplements should meet your needs for choline. If a higher dosage of choline is recommeded, it is available as a stand-alone supplement.";
                btn_text = "Shop Now";
            }
            else if (t === ('Vitamin C').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=vitamin*+c*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Vitamin C').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=vitamin*+c*&view=ls";
                action = "Vitamin C is a  water-soluble vitamin that  supports healthy collagen synthesis, cartilage and bone development, central nervous system, immune system, antioxidant activity, and blood vessel support. While foods such as guava, red pepper, and cantaloupe are rich in vitamin C, you may need to also supplement.";
                btn_text = "Shop Now";
            }
            else if (t === ('Vitamin A').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=vitamin*+a*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Vitamin A').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=vitamin*+a*&view=ls";
                action = "Vitamin A is a fat-soluble vitamin that promotes healthy vision and helps your eyes adapt to light changes, supports immune system health and promotes healthy skin. While fish, eggs, and dairy fats contain vitamin A, you may need to supplement.";
                btn_text = "Shop Now";
            }
            else if (t === ('Vitamin D').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=vitamin*+d*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Vitamin D').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=vitamin*+d*&view=ls";
                action = "Vitamin D is a fat-soluble vitamin that plays a key role in helping to maintain bone density and bone strength. It also supports cardiovascular health, mental health, skin health, as well as immune system health.   Supplemental vitamin D is often needed to reach optimal blood levels of this important vitamin.";
                btn_text = "Shop Now";
            }
            else if (t === ('Vitamin E').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=vitamin*+e*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Vitamin E').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=vitamin*+e*&view=ls";
                action = "Vitamin E is important fat soluble antioxidant that helps to protect cell membranes against free radical damage. It also plays a role in wound healing, improving insulin function, and protecting the body from degenerative diseases, such as cancer, cardiovascular disease, and Alzheimer's disease. When supplementing with vitamin E, try to use mixed tocopherols for the most benefit.";
                btn_text = "Shop Now";
            }
            else if (t === ('Mixed Carotenoids').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=carotenoids*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Mixed Carotenoids').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=carotenoids*&view=ls";
                action = "Carotenoids are antioxidants that support a healthy immune system and help lower inflammation, benefit eye health, and protect skin health.  Supplementing with mixed carotenoids provides diverse antioxidant benefits.";
                btn_text = "Shop Now";
            }
            else if (t === ('Calcium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=calcium*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Calcium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=calcium*&view=ls";
                action = "Calcium is the most abundant mineral in the body and is necessary for building and maintaining strong bones and teeth. Approximately 99% of calcoium is stored in the bones and the remaining 1% is necessary for proper muscle growth, blood clotting and regular heartbeat.  While dairy, soy, green vegetables, and nuts & seeds are good dietary sources of calcium, many individuals can benefit from taking a high-quality calcium supplement.";
                btn_text = "Shop Now";
            }
            else if (t === ('Copper').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=copper*";
                btn_text = "Shop Now";
            }
            else if (t === ('Increase your Copper intake').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=copper*&view=ls";
                action = "Copper is an essential trace mineral that plays a key role in the formation of bone, red blood cells, and collagen. Copper is also necessary for the proper absorption and utilization of iron. Most multivitamins contain adequate copper, and sesame seeds, cashews, and soybeans are good dietary sources.";
                btn_text = "Shop Now";
            }
            else if (t === ('Iron').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=iron*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Iron').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=iron*&view=ls";
                action = "Iron is a trace mineral found in the hemoglocbin molecule of red blood cells, which carries oxygen from the lungs to the rest of the body. Iron promotes normal red blood cell production and supports energy utilization. When supplemental iron is needed, taking a highly-absorbable form is best and is gentle on your stomach. In addition, taking vitamin C can help to enhance iron's absorption.";
                btn_text = "Shop Now";
            }
            else if (t === ('Iodine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=iodine*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Iodine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=iodine*&view=ls";
                action = "Iodine is a trace element that plays an important role in regulating thyroid function. Dietary sources of iodine can come from iodized salt, seawead, cod, tuna, dairy, dried fruits, and eggs. Some individuals need to supplement with this mineral to meet their needs.";
                btn_text = "Shop Now";
            }
            else if (t === ('Manganese').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=manganese*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Manganese').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=manganese*&view=ls";
                action = "Manganese is a mineral essential for bone, joint and cartilage health, as well as for the activation of the important antioxidant enzyme, superoxide dismutase (SOD).  Rich foods of manganese include brown rice, oats, and garbanzo beans. Manganese can be found in many multivitamins as well as individual supplements.";
                btn_text = "Shop Now";
            }
            else if (t === ('Magnesium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=magnesium*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Magnesium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=magnesium*&type=product%2Cpage&view=ls";
                action = "Magnesium is the most abundant mineral in the body and is required for more than 300 biochemical reactions. Magnesium plays an important role in bone formation, maintaining a regular heartbeat and balancing blood sugar. Magnesium is also essential for relaxing muscles and plays a role in the formation of ATP, which the body uses as fuel. Nuts, seeds, whole grains, beans, green leafy vegetables, and soy are good sources of magnesium. However, most individuals require supplemental magnesium in order to meet their nutrient needs.";
                btn_text = "Shop Now";
            }
            else if (t === ('Potassium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=potassium*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Potassium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=potassium*&type=product%2Cpage&view=ls";
                action = "Potassium is a mineral and electrolyte that is necessary for the normal functioning of all cells. It regulates the heartbeat, ensures proper function of the muscles and nerves, and is vital for synthesizing protein and metabolizing carbohydrates. Potassium rich foods include sweet potato and green leafy vegetables, however you may need to supplement with this mineral to help meet your nutrient needs.";
                btn_text = "Shop Now";
            }
            else if (t === ('Phosphorus').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=phosphorus*";
                btn_text = "Shop Now";
            }
            else if (t === ('Increase your Phosphorus intake').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=phosphorus*&view=ls";
                action = "Phosphorus is the second most abundant mineral in the body and works with calcium to build and maintain bones and teeth. Both calcium and phosphorus depend on each other and must maintain a stable ratio of 1:2. Food sources of phosphorus include scallops, sardines, and soybeans. Most multivitamins include this important mineral.";
                btn_text = "Shop Now";
            }
            else if (t === ('Selenium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=selenium*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Selenium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=selenium*&type=product%2Cpage&view=ls";
                action = "Selenium is an important trace mineral and antioxidant that supports a healthy immune system, prevents buildup of fats in the blood vessels and stimulates thyroid hormones. Food sources of selenium include Brazil nuts, seafood, and beef.  Selenium is found in most multivitamins.";
                btn_text = "Shop Now";
            }
            else if (t === ('Zinc').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=zinc*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Zinc').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=zinc*&type=product%2Cpage&view=ls";
                action = "Zinc is a very important mineral that is essential for optimal health. It is necessary for cellular growth and division, immune system function, taste and smell, and wound repair. Zinc also plays a role in the storage and metabolism of carbohydrates, as well as the absorption and function of B vitamins. Examples of foods rich in zinc, include sesame and pumpkin seeds. Often, many individuals require additional zinc supplementation to meet their nutrient needs.";
                btn_text = "Shop Now";
            }
            else if (t === ('S-Adenosylmethionine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=SAMe*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take S-Adenosylmethionine (SAM-e)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=SAMe*&view=ls";
                action: "SAMe (S-adenosylmethionine) is a metabolite that functions as  a donor of methyl groups in over 100 different reactions and contributes to the synthesis, activation and/or metabolism of hormones, neurotransmitters, nucleic acids, phospholipids and proteins. SAMe also helps to maintain cognitive health, liver function, healthy joint mobility, and a positive mental outlook and balanced mood.";
                btn_text = "Shop Now";
            }
            else if (t === ('Betaine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=betaine*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Betaine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=betaine*&type=product%2Cpage&view=ls";
                action = "Betaine is a derivative of the nutrient choline and is a methyl donor in the body. It aids in liver function, detoxification, and healthy cellular functioning. Studies show that betaine can help to decrease high levels of homocysteine in the blood. Food sources of betain include beets, beans, and whole grains. However, supplementation can be helpful when extra support is needed.";
                btn_text = "Shop Now";
            }
            else if (t === ('Coenzyme Q10 (Ubiquinone)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=coq10*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take CoQ10').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=coq10*&view=ls";
                action = "CoQ10 is also known as ubiquinone, a name that signifies its ubiquitous (widespread) distribution in the human body, particularly the heart. This fat-soluble antioxidant is essential for healthy cardiovascular function and is used by the body to transform food into fuel for the body. Begin supplementing with CoQ10 to achieve optimal levels of this powerful antioxidant.";
                btn_text = "Shop Now";
            }
            else if (t === ('Lipoic Acid').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=lipoic*+acid*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Lipoic acid').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=lipoic*+acid*&type=product%2Cpage&view=ls";
                action = "Lipoic acid, also known as alpha lipoic acid, is a powerful antioxidant that is soluble in water and fat. This allows it to enter all parts of cells and fight free radicals. Lipoic acid helps reduce blood cholesterol levels, protects nerve tissues against oxidative stress, and helps to regulate blood sugar levels. Begin supplementing with lipoic acid, an important cellular antioxidant.";
                btn_text = "Shop Now";
            }
            else if (t === ('Omega-3 fatty acids').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=omega*+3*+fatty*+acids*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Omega-3 Fatty Acids').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=omega*+3*+fatty*+acids*&type=product%2Cpage&view=ls";
                action = "Omega-3 essential fatty acids (EFAs) are healthy fats that have potent anti-inflammatory properties. EFAs are critical components of cellular membranes, are necessary for healthy joints, and promote cardiovascular health, cognitive function, immune health, positive mental outlook, and healthy skin and hair. Omega-3 essential fatty acids are found in coldwater fish, walnuts and flaxseed oil. Supplementing with EFAs are recommended for helping to maintain optimal levels of these essential fats.";
                btn_text = "Shop Now";
            }
            else if (t === ('Quercetin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=quercetin*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Quercetin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=quercetin*&type=product%2Cpage&view=ls";
                action = "Quercetin is one of the most bioactive flavonoids, which are water-soluble plant pigments. It is a powerful antioxidant, antihistamine and anti-inflammatory agent and used to support llergies, asthma, arterisclerosis and eczema.  Apples and onions are rich in quercetin, but you may need to supplement for optimal intake.";
                btn_text = "Shop Now";
            }
            else if (t === ('Glutamine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=glutamine*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Glutamine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=glutamine*&type=product%2Cpage&view=ls";
                action = "Glutamine is the most abundant amino acid in the body and used by the body for tissue repair and gastrointestinal tract support.  Begin supplementing with Glutamine, an important fuel source for intestinal cells.";
                btn_text = "Shop Now";
            }
            else if (t === ('Glycine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=glycine*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Glycine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=glycine*&type=product%2Cpage&view=ls";
                action = "Glycine is an inhibitory neurotransmitter that supports relaxation and healthy stress management. It also enhances detoxification by increasing glutathione production. The amino acid glycine plays a key role in maintaining a healthy central nervous system (CNS). It is considered one of the most important inhibitory neurotransmitters in the CNS, particularly in the brainstem and spinal cord. Found in most protein sources, you may need to supplement with the amino acid glycine for optimal levels.";
                btn_text = "Shop Now";
            }
            else if (t === ('5-HTP').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=5-htp*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take 5-HTP').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=5-htp*&view=ls";
                action = "5-HTP (5-Hydroxytryptophan) is the intermediate metabolite produced when the body initiates the process of converting the essential amino acid L-tryptophan to serotonin. Supplementing with 5-HTP facilitates serotonin production in the brain, which may help support a healthy mood, regulate sleep, provide pain management, and aid in weight loss. You may need to supplement with 5-HTP (5-hydroxytryptophan) for optimal intake.";
                btn_text = "Shop Now";
            }
            else if (t === ('Lactobacillus species').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=lactobacillus*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take the probiotic Lactobacillus').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=lactobacillus*&view=ls";
                action = 'Lactobacillus is a species of "friendly" bacteria that live in our digestive, urinal and genital systems. These "friendly" bacteria help reduce blood cholesterol levels, aid in digestion and enhance nutrient absorption.  Supplementing with many species of the genus Lactobacillus, a probiotic, has been shown to restore healthy gut bacteria.';
                btn_text = "Shop Now";
            }
            else if (t === ('Flavonoids, increase intake').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=flavonoids*";
                btn_text = "Shop Now";
            }
            else if (t === ('Increase your Flavonoid intake').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=flavonoids*&view=ls";
                action = "Flavonoids or bioflavonoids  are potent antioxidant compounds found naturally in many fruits and vegetables. Flavonoids help regulate cellular activity and fight off free radicals that cause oxidative stress on your body.  There are many different bioflavonoids, including citrin, eriodictyol, flavones, hesperetin, hesperidin, quercetin, quercetrin, and rutin. The human body cannot produce bioflavonoids, so they must be supplied in the diet in foods like berries, onions, soy & citrus.";
                btn_text = "Shop Now";
            }
            else if (t === ('Melatonin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=melatonin*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Melatonin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=melatonin*&view=ls";
                action = "Melatonin is a natural hormone that controls the body’s internal clock. It is produced at night and secreted by the pineal gland, which is located deep within the brain. Melatonin is used to help modulate the immune system, sleep and protect against degenerative diseases.  Supplement with melatonin - typically taken 1/2 hour before your ideal bedtime.";
                btn_text = "Shop Now";
            }
            else if (t === ('Vitamin K').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=vitamin*+k*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Vitamin K').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=vitamin*+k*&type=product%2Cpage&view=ls";
                action = "Vitamin K is essential for the production of prothrombin, which is necessary for blood clotting. It is also essential for bone formation and repair. Foods rich in vitamin K include green leafy veggies. You may need to supplement for optimal levels, particularly for vitamin K2.";
                btn_text = "Shop Now";
            }
            else if (t === ('Dehydroepiandrosterone (DHEA)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=dhea*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take DHEA').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=dhea*&type=product%2Cpage&view=ls";
                action = "DHEA (Dehydroephiandrosterone) is a most abundant adrenal steroid hormone in the body produced  by the adrenal glands, which is eventually converted into other hormones, such as progesterone, testosterone, and estrogen. These hormones regulate fat and mineral metabolism, endocrine and reproductive function, and energy levels. Supplementing with DHEA provides the building block for several types of hormones.";
                btn_text = "Shop Now";
            }
            else if (t === ('L-Carnitine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=dhea*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take L-carnitine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=dhea*&type=product%2Cpage&view=ls";
                action = "L-carnitine is an amino acid found abundantly in skeletal and heart muscle. L-carnitine stimulates the breakdown of fat to produce energy and prevents the buildup of fat in the heart, skeletal muscles, and liver. Supplementing with L-carnitine helps boost your cells' energy production, by metabolizing certain fats.";
                btn_text = "Shop Now";
            }
            else if (t === ('Branched-Chain Amino Acids (BCAA)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=bcaa*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Branched-Chain Amino Acids').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=bcaa*&view=ls";
                action = "The branched-chain amino acids: valine, isoleucine and leucine cannot be produced by the body and must be consumed through the diet or supplements. They are essential to building and maintaining muscle tissue and have long been used by athletes and other active individuals to activate protein synthesis and reduce muscle breakdown caused by intense training or physical activity. Supplement with branched chain amino acids to enhance cellular energy production.";
                btn_text = "Shop Now";
            }
            else if (t === ('Arginine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=arginine*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Arginine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=arginine*&view=ls";
                action = "Arginine is an amino acid that helps with wound healing, stimulates the immune system, and assists with the formation of several important hormones, including insulin and growth hormone. It also helps relax the blood vessels, improving blood flow. Supplement with arginine to support healthy blood vessel function.";
                btn_text = "Shop Now";
            }
            else if (t === ('Gamma-Linolenic Acid').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=gamma*+linolenic*+acid*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Gamma-Linolenic Acid (GLA)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=gamma*+linolenic*+acid*&type=product%2Cpage&view=ls";
                action = "Gamma-linolenic acid (GLA) is an omega-6 fatty acid found in evening primrose oil (EPO), borage oil, and black currant seed oil and is known for its anti-inflammatory properties and  helping prevent hardening of the arteries. While evening primrose and borage oils are rich in GLA, you may need to supplement for optimal intake.";
                btn_text = "Shop Now";
            }
            else if (t === ('Lycopene').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=lycopene*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Lycopene').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=lycopene*&type=product%2Cpage&view=ls";
                action = "Lycopene is a carotene found in tomatoes. It has both antioxidant and anticancer properties. Found in tomatoes and tomato paste, you may need to supplement with lycopene for your optimal intake.";
                btn_text = "Shop Now";
            }
            else if (t === ('N-acetylcysteine (NAC)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=n-acetyl*+cysteine*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take N-acetylcysteine (NAC)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=n-acetyl*+cysteine*&type=product%2Cpage&view=ls";
                action = "N-Acetyl-l-Cysteine (NAC), derivative of the dietary amino acid l-cysteine, is a cellular antioxidant support that specifically promotes healthy lung tissue. NAC is a free radical scavenger that supports glutathione levels in tissues. To support your body's detoxification, you may need to supplement with NAC.";
                btn_text = "Shop Now";
            }
            else if (t === ('Soy Isoflavones').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Soy*+isoflavones*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Soy Isoflavones').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Soy*+isoflavones*&type=product%2Cpage&view=ls";
                action = "Soy isoflavones and their byproducts have demonstrated a wide array of benefits, including supporting cardiovascular, cerebrovascular, metabolic and bone health, as well as healthy hormonal activity and healthy cell division.";
                btn_text = "Shop Now";
            }
            else if (t === ('Ipriflavone').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Ipriflavone*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Ipriflavone').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Ipriflavone*&type=product%2Cpage&view=ls";
                action = "Ipriflavone is a synthetic derivative of naturally occurring soy isoflavones. It supports healthy bone maintenance by promoting secretion of the hormone calcitonin, and maintaining healthy osteoclast activity. Ipriflavone also supports type I collagen and the formation of mineralized bone matrix.";
                btn_text = "Shop Now";
            }
            else if (t === ('Vanadyl sulfate').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Vanadium*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Vanadium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Vanadium*&type=product%2Cpage&view=ls";
                action = "Vanadium is a trace mineral from vanadyl sulfate. Vanadium is needed for cellular metabolism and for the formation of bones and teeth. It plays a role in growth and reproduction, and inhibits cholesterol synthesis. Begin supplementing with the trace mineral vanadium to support healthy blood sugar and blood pressure control.";
                btn_text = "Shop Now";
            }
            else if (t === ('Chromium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Chromium*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Chromium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Chromium*&type=product%2Cpage&view=ls";
                action = "Chromium is an essential trace mineral that helps the body maintain healthy levels of cholesterol and blood sugar, in addition to assisting with the synthesis of cholesterol, fats, and proteins.  While broccoli is rich in chromium, you'll likely need to supplement with chromium to achieve optimal intake.";
                btn_text = "Shop Now";
            }
            else if (t === ('Taurine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=taurine*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Taurine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=taurine*&type=product%2Cpage&view=ls";
                action = "Taurine is a sulfur-containing, antioxidant amino acid that supports osmoregulation (maintenance of concentrations of ions) inside the cell, membrane stabilization, bile acid conjugation, and brain function. Begin supplementing with taurine, a sulfur-containing amino acid found only in animals.";
                btn_text = "Shop Now";
            }
            else if (t === ('Proanthocyanidins').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Proanthocyanidins*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Proanthocyanidins').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Proanthocyanidins*&type=product%2Cpage&view=ls";
                action = "Proanthocyanidins, a group of flavonoids found in pine bark, grape seed, and other plant sources. While grapes, apricots, and most berries are rich in proanthocyanidins, you may need to supplement for optimal intake.";
                btn_text = "Shop Now";
            }
            else if (t === ('Carnosine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=carnosine*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Carnosine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=carnosine*&type=product%2Cpage&view=ls";
                action = "L-carnosine occurs naturally in the body’s muscle and nervous tissues and is formed by the amino acids alanine and histidine. L-carnosine is an antioxidant to help the body maintain healthy protein and cellular function in various tissue. Begin supplementing with L-carnosine,  to support  blood sugar balance and protection from free radicals.";
                btn_text = "Shop Now";
            }
            else if (t === ('Resveratrol').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Resveratrol*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Resveratrol').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Resveratrol*&type=product%2Cpage&view=ls";
                action = "Resveratrol is a compound often associated with the health benefits of red wine, because of its antioxidant and cardioprotectant properties. It is a polyphenol found in grapes, berries, and red wine. Supplementing with trans-resveratrol promotes cardiovascular health through its antioxidant action and its ability to promote healthy platelet function and maintain healthy arachidonic acid metabolism.";
                btn_text = "Shop Now";
            }
            else if (t === ('Zinc Gluconate Lozenges').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Zinc*+Lozenges*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Zinc Gluconate lozenges').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Zinc*+Lozenges*&type=product%2Cpage&view=ls";
                action = "Zinc gluconate lozenges may be effective at reducing the duration and severity of cold symptoms.";
                btn_text = "Shop Now";
            }
            else if (t === ('Betaine HCl').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Zinc*+Lozenges*&type=product%2Cpage&view=ls";
                action = "Zinc gluconate lozenges may be effective at reducing the duration and severity of cold symptoms.";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Betaine HCl').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=betaine*+hcl*&type=product%2Cpage&view=ls";
                action = "Betaine hydrochloride (HCL) is a chemical compound that helps support digestion in the stomach by acting as a supplemental source of hydrochloric acid, also known as stomach acid. Begin supplementing with betaine hydrochloride (HCl) to restore adequate stomach acid.";
                btn_text = "Shop Now";
            }
            else if (t === ('Strontium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Strontium*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Strontium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Strontium*&type=product%2Cpage&view=ls";
                action = "Strontium is a mineral that is similar physical and chemical properties to calcium. Strontium provides all-natural bone support through its ability to naturally increase the formation of osteoblasts (cells that build up bone) and slow down the formation of osteoclasts (cells that break down bone tissue), helping to maintain healthy bone density. Start supplementing with strontium to improve bone health.";
                btn_text = "Shop Now";
            }
            else if (t === ('Medium chain triglycerides').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=mct*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Medium Chain Triglycerides (MCTs)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=mct*&type=product%2Cpage&view=ls";
                action = "MCTs (medium-chain triglycerides) are a unique form of dietary fat that have many health benefits. Due to their shorter length, they are easier and more quickly absorbed, digested, and utilized by the body. Incorporating MCTs into the diet helps to provide preferred and sustainable energy source that the body can use for fat metabolism, cognitive health, and cardiovascular health. Begin supplementing with MCT oil to provide fuel for liver cells, which inhibits fat storage and to support the microbiome, gut health, and immune health.";
                btn_text = "Shop Now";
            }
            else if (t === ('Bile acids').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=bile*+acids*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Bile salts').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=bile*+acids*&type=product%2Cpage&view=ls";
                action = "Bile is a digestive liquid  produced in the liver and contains bile salts, which help digest and absorb fats, allow the body to excrete cholesterol as well as promote overall gallbladder and liver function. Begin supplementing with bile salts, key to digestion and absorption of fats.";
                btn_text = "Shop Now";
            }
            else if (t === ('N-acetylglucosamine (NAG)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=NAG*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take N-acetylglucosamine (NAG)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=NAG*&type=product%2Cpage&view=ls";
                action = "N-acetylglucosamine (NAG) promotes the gut's normal mucus layer and the growth of desirable Bifidobacterium bifidum. Begin supplementing with N-acetylglucosamine (NAG), a building block for joint tissues, as well as intestinal cells.";
                btn_text = "Shop Now";
            }
            else if (t === ('Phosphatidylcholine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Phosphatidylcholine*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Phosphatidylcholine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Phosphatidylcholine*&type=product%2Cpage&view=ls";
                action = "Phosphatidylcholine is a major component of the membranes of the liver cells (hepatocytes). As such, it provides significant protection for the liver, probably because good liver health requires the ongoing replacement of old cell membranes with healthy new ones.  Begin supplementing with phosphatidylcholine (lecithin), important for gut integrity and cell membranes.Phosphatidylcholine also has the potential to decrease the absorption of dietary cholesterol, which helps maintain a normal cholesterol level.";
                btn_text = "Shop Now";
            }
            else if (t === ('Chondroitin Sulfate').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Chondroitin*+Sulfate*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Chondroitin Sulfate').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Chondroitin*+Sulfate*&type=product%2Cpage&view=ls";
                action = "Chondroitin Sulfate is a glycosaminoglycan (GAG) naturally present in many body tissues, and is an especially important component of joint cartilage and synovial tissue. Begin supplementing with chondroitin sulfate to support the maintenance of healthy, flexible joint tissue and promotes proper joint mobility and comfort.";
                btn_text = "Shop Now";
            }
            else if (t === ('Green-lipped mussel').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Green-lipped*+mussel*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Green-lipped Mussel').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Green-lipped*+mussel*&type=product%2Cpage&view=ls";
                action = "Green-lipped mussel or perna provides key building blocks to support the structural integrity and maintenance of joints, ligaments, and tendons. Begin supplementing with green-lipped mussel as a potent source of anti-inflammatory fats.";
                btn_text = "Shop Now";
            }
            else if (t === ('Glucosamine sulfate').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Glucosamine*+sulfate*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Glucosamine Sulfate').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Glucosamine*+sulfate*&type=product%2Cpage&view=ls";
                action = "Glucosamine is made in the body from glucose and the amino acid glutamine and is found in high concentrations in joint structures.  Its primary function is to provide the joints with the material necessary to produce glycosaminoglycan, a critical ingredient in cartilage. It also helps in the formation of tendons, skin, bones, nails, and ligaments. Start supplementing with glucosamine sulfate to improve joint health.";
                btn_text = "Shop Now";
            }
            else if (t === ('Saccharomyces boulardii').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Saccharomyces*+boulardii*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Saccharomyces boulardii').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Saccharomyces*+boulardii*&type=product%2Cpage&view=ls";
                action = "Saccharomyches boulardii is a non-colonizing baker’s yeast species that survives gastric acidity and is not adversely affected or inhibited by antibiotics and does not alter or adversely affect the normal flora in the bowel.  This strain helps protect and maintain a normal intestinal microflora. It also works to restore the normal intestinal microflora when possible disruptions may occur, such as during travel or the intake of certain medications. Start supplementing with Saccharomyces boulardii to improve gut microbial health.";
                btn_text = "Shop Now";
            }
            else if (t === ('Niacin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=niacin*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Niacin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=niacin*&type=product%2Cpage&view=ls";
                action = "Niacin is a form of vitamin B3 and is necessary for releasing energy from carbohydrates, processing alcohol, forming fats, and producing sex hormones. Supplementing with Niacin has been linked to improved lipids, including HDL cholesterol, triglycerides, and Lp(a).";
                btn_text = "Shop Now";
            }
            else if (t === ('Lipase').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Lipase*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Lipase').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Lipase*&type=product%2Cpage&view=ls";
                action = "Lipase is an enzyme found in the stomach and pancreatic juices, and is also present in fats in foods, aids in fat digestion.";
                btn_text = "Shop Now";
            }
            else if (t === ('Lutein').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Lutein*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Lutein').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Lutein*&type=product%2Cpage&view=ls";
                action = "Lutein is a carotenoid found in fruits and dark green, leafy vegetable. Lutein is  also found in high amounts in the retina's macular region, an area vital to healthy vision  Lutein protects the macula from degradation normally associated with aging and oxidative stress. The macula is responsible for focus and color differentiation. Start supplementing with lutein to support eye health.";
                btn_text = "Shop Now";
            }
            else if (t === ('Calcium D-glucarate').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Calcium*+D-glucarate*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Calcium D-glucarate').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Calcium*+D-glucarate*&type=product%2Cpage&view=ls";
                action = "Calcium D-Glucarate is a supplement of D-glucaric acid bound to calcium. Calcium D-glucarate supports the body's natural defenses against environmental toxins and excess steroid hormones by way of glucuronidation. While apples and Brussels sprouts are rich in calcium D-glucarate, supplementation may be necessary for optimal intake.";
                btn_text = "Shop Now";
            }
            else if (t === ('Diindolylmethane (DIM)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=%28DIM%29*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Diindolylmethane (DIM)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=%28DIM%29*&type=product%2Cpage&view=ls";
                action = "DIM is an indole phytochemical that is a natural metabolite of compounds found in cruciferous vegetables such as broccoli, Brussels sprouts and cabbage. n preclinical studies, DIM has been shown to lead to the preferential formation of estrogen metabolites that are correlated with healthy breast, endometrial, and cervical tissues.";
                btn_text = "Shop Now";
            }
            else if (t === ('IP-6 (Phytate)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=IP-6*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take IP-6 (Phytate)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=IP-6*&type=product%2Cpage&view=ls";
                action = "Inositol hexaphosphate (IP6), also known as phytic acid, is a natural antioxidant component of fiber-rich foods such as whole grains and legumes and is found in almost every cell of the body.  IP6 is designed to promote healthy cell metabolism and maintain proper enzyme activity in cells. Start supplementing with IP-6, an immune booster with anti-cancer and bone-protective properties.";
                btn_text = "Shop Now";
            }
            else if (t === ('Psyllium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Psyllium*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Psyllium').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Psyllium*&type=product%2Cpage&view=ls";
                action = "Psyllium is a soluble fiber used primarily as a gentle bulk-forming laxative. The soluble fiber found in psyllium husks can help lower cholesterol. Psyllium has also been used to help regulate blood sugar levels in people with diabetes. Increase your intake of psyllium seed husks, known to improve digestive function, as well as blood sugar and lipid levels.";
                btn_text = "Shop Now";
            }
            else if (t === ('Nicotinamidadenindinucleotide (NADH)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=NADH*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take NADH').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=NADH*&type=product%2Cpage&view=ls";
                action = "NADH is a coenzyme derived from vitamin B-3 (niacin), is essential for basic metabolism, respiration, the breakdown of sugars and fats, and the production of ATP, the primary energy molecule in our cells.  Begin supplementing with NADH, a crucial component of the ATP energy production cycle, which supplies energy to the brain, nerves, muscles, heart and all other organs in order to function.";
                btn_text = "Shop Now";
            }
            else if (t === ('Acetylcarnitine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Acetylcarnitine*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Acetylcarnitine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Acetylcarnitine*&type=product%2Cpage&view=ls";
                action = "Acetylcarnitine (acetyl-L-carnitine) is the acetyl-derivative of carnitine. It is a nutrient and a naturally occurring metabolite that is involved in lipid, carbohydrate, and protein metabolism. Carnitine’s major role is to link up with fatty acids and transport them into the mitochondria, the cells’ “powerhouses” for energy production. Begin supplementing with Acetylcarnitine to  support energy production and nerve cell function.";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Raw Soy Flour').toLowerCase()) {
                action = "Raw soy flour has been linked to enhanced pancreatic enzyme production.";
                btn_text = "Learn More";
            }
            else if (t === ('Take Inhaled Magnesium').toLowerCase()) {
                action = "Using a nebulizer to inhale magnesium can help to improve respiratory function.";
                btn_text = "Learn More";
            }
            else if (t === ('Methylsulfonylmethane (MSM)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=msm*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Methylsulfonylmethane (MSM)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=msm*&type=product%2Cpage&view=ls";
                action = "MSM (methylsulfonylmethane or dimethylsulfone) is a naturally-derived sulfur formula that helps support joint functionality and comfort, specifically connective tissue health. MSM also provides potential support for healthy immune and respiratory function. Start supplementing with Methylsulfonylmethane (MSM), which enhances joint cartilage production.";
                btn_text = "Shop Now";
            }
            else if (t === ('Thymus extract').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=thymus*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Thymus Extract').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=thymus*&view=ls";
                action = "Thymus extract is made from the thymus glands of cows, typically calves. The thymus is a gland that is involved in the regulation of the body's immune response. Start supplementing with thymus extract to support immune function and thymus gland activity.";
                btn_text = "Shop Now";
            }
            else if (t === ('Molybdenum').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Molybdenum*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Molybdenum').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Molybdenum*&type=product%2Cpage&view=ls";
                action = "Molybdenum is a trace mineral essential for the formation of uric acid, a form of waste that is excreted as urine. If the body has too much molybdenum, it produces too much uric acid; if the body has too little molybdenum, it produces too little uric acid. Try supplementing with the mineral molybdenum, found in lentils and other legumes, and a key cofactor for detox enzymes.";
                btn_text = "Shop Now";
            }
            else if (t === ('Lactase, Oral').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=lactase*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Lactase Orally').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=lactase*&type=product%2Cpage&view=ls";
                action = "A form of the enzyme amylase, lactase  helps break down the milk sugar lactose. Supplement with lactase to support digestion of lactose in milk products.";
                btn_text = "Shop Now";
            }
            else if (t === ('Inositol').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Inositol*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Inositol').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=Inositol*&type=product%2Cpage&view=ls";
                action = "Inositol is involved in neuronal signaling and osmotic regulation in the brain. Start supplementing with inositol, a sugar linked to hormonal regulation, including insulin and FSH.";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Xylitol').toLowerCase()) {
                action = "Xylitol is a sugar alcohol that's structure allows them to stimulate the taste receptors for sweetness on the tongue. Supplement with the sugar alcohol xylitol, recognized for its anti-bacterial properties.";
                btn_text = "Shop Now";
            }
            else if (t === ('L-ornithine-L-aspartate').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=L-ornithine-L-aspartate*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take L-ornithine-L-aspartate').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=L-ornithine-L-aspartate*&type=product%2Cpage&view=ls";
                action = "L-ornithine-L-aspartate is a chemical made up of the two amino acids ornithine and aspartic acid.  L-ornithine-L-aspartate increases the levels of ornithine and aspartic acid in the body. These amino acids help to reduce levels of a toxic chemical called ammonia in the blood. L-ornithine-L-aspartate supports liver function, and can help convert ammonia to urea and glutamine.";
                btn_text = "Shop Now";
            }
            else if (t === ('Multivitamin/mineral Supplement').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=multivitamin*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Fumaric Acid').toLowerCase()) {
                action = "Fumaric acid supports healthy skin function.";
                btn_text = "Learn More";
            }
            else if (t === ('Stop taking Vitamin D').toLowerCase()) {
                action = "While vitamin D deficiency is common, elevated levels should prompt discontinuation.";
                btn_text = "Learn More";
            }
            else if (t === ('Take Fermented Wheat Germ Extract').toLowerCase()) {
                action = "Fermented wheat germ extract has anti-inflammatory properties.";
                btn_text = "Learn More";
            }
            else if (t === ('Take Water Soluble Polysaccharides').toLowerCase()) {
                action = "Water-soluble polysaccharides, a form of dietary fiber,  can improve meal satiety.";
                btn_text = "Learn More";
            }
            else if (t === ('Take a Multivitamin/mineral').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=multivitamin*&view=ls";
                action = "A multivitamin or multimineral provides  vitamins and/or minerals and other essential nutrients";
                btn_text = "Shop Now";
            }
            else if (t === ('Alkali minerals').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=phosphatidylserine*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Potassium Citrate').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=phosphatidylserine*&view=ls";
                action = "Potassium Citrate is a well-absorbed form of potassium. In addition to its role in heart and skeletal muscle function, it also alkalinizes urine to support kidney and lower urinary tract health. It is essential for nerve impulse transmission, muscle contractility, and maintaining normal blood pressure, energy production, and nucleic acid synthesis.  Supplement with potassium citrate to help neutralize excess acid production.";
                btn_text = "Shop Now";
            }
            else if (t === ('Citicoline').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=citicoline*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Citicoline').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=citicoline*&view=ls";
                action = "Citicoline is a naturally-occurring intermediate involved in the synthesis of phosphatidylcholine, a major constituent of the grey matter of brain tissue. Citicoline supplementation supports brain energy metabolism and the production of neurotransmitters involved in cognition, and has been shown in clinical research to support attention performance in healthy adults and adolesents.";
                btn_text = "Shop Now";
            }
            else if (t === ('Phosphatidylserine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=phosphatidylserine*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Phosphatidylserine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=phosphatidylserine*&view=ls";
                action = "Phosphatidylserine (PS) is a naturally occurring phospholipid. Like other phospholipids, PS is a critical component of cell membranes, and it is found in high concentrations in the brain and nervous tissues, primarily in the cell membranes of neurons. PS  is also known as the \"brain nutrient\" and promotes cognitive function, emotional well-being and behavioral performance by supporting cell membrane composition";
                btn_text = "Shop Now";
            }
            else if (t === ('L-citrulline').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=l-citruline*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take L-citrulline').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=l-citruline*&view=ls";
                action = "Citrulline, a buliding block for nitric oxide, is a non-essential amino acid that is an important intermediate in the urea cycle, functioning along with other amino acids to rid the body of ammonia, a byproduct of protein metabolism.* Citrulline also plays an important role in the healing process and in the maintenance of a healthy immune system.";
                btn_text = "Shop Now";
            }
            else if (t === ('Dehydroepiandrosterone (DHEA) cream').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=dhea*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take DHEA (Dehydroepiandrosterone)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=dhea*&view=ls";
                action = "DHEA (Dehydroephiandrosterone) is a most abundant adrenal steroid hormone in the body produced  by the adrenal glands, which is eventually converted into other hormones, such as progesterone, testosterone, and estrogen. These hormones regulate fat and mineral metabolism, endocrine and reproductive function, and energy levels.";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Sacrosidase').toLowerCase()) {
                action = "Sacrosidase is  an enzyme, which helps to digest sucrose (table sugar).";
                btn_text = "Learn More";
            }
            else if (t === ('Apply Peppermint Oil topically').toLowerCase()) {
                action = "Applying peppermint oil topically to the temples, forehead and neck can help relieve tension headaches. Apply a 10% solution of peppermint oil to the forehead and temples to relieve headaches.";
                btn_text = "Learn More";
            }
            else if (t === ('Apply Deglycyrrhizinated Licorice (DGL) topically').toLowerCase()) {
                action = "DGL licorice when dissolved in warm water and applied to the inside of the mouthmay shorten the healing time of canker sores.  Apply DGL (Deglycyrrhizinated licorice) topically to affected areas in the mouth, and let dissolve.";
                btn_text = "Learn More";
            }
            else if (t === ('5-methyltetrahydrofolate (5-MTHF)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=mthf*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('N-acetylcarnosine, topical').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=n-acetyl*+carnosine*";
                btn_text = "Shop Now";
            }
            else if (t === ('Apply N-acetylcarnosine topically').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=n-acetyl*+carnosine*&view=ls";
                action = "Topical NAC shows potential for helping with cataracts.  Apply 2 drops per eye of a 1% N-acetylcarnosine solution, twice per day.";
                btn_text = "Shop Now";
            }
            else if (t === ('Ear drops, herbal combination').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=ear*+drops*";
                btn_text = "Shop Now";
            }
            else if (t === ('Apply herbal ear drops').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=ear*+drops*&view=ls";
                action = "Herbal ear drops provide relief for ear pain and can help to clear an infection. Apply 5 drops, three times per day of a clinically-based herbal product, including Calendula, St. John's Wort, garlic, and more.";
                btn_text = "Shop Now";
            }
            else if (t === ('Garlic').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=garlic*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Garlic').toLowerCase()) {
                action = "Garlic is one of the most widely used and most well researched herbs in the world. Studies show that garlic is beneficial for heart health, promoting healthy blood lipids, and for supporting immune health. Increase your garlic intake through either diet or by supplementing with an aged garlic extract."
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=garlic*&view=ls";
                btn_text = "Shop Now";
            }
            else if (t === ('Ginkgo').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=ginkgo*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Gingko').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=ginkgo*&view=ls";
                action = "Ginkgo leaf supports healthy circulation, cognitive health and brain function.  Begin supplementing with the herb Gingko biloba, specifically, an extract from the leaf of this plant";
                btn_text = "Shop Now";
            }
            else if (t === ('Indian frankincense').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=boswellia*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Indian Frankincense (Boswellia)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=boswellia*&view=ls";
                action = "Boswellia  is an herbal extract taken from the bark of the boswellia tree. It is also known as frankincense.  Boswelli has anti-inflammatory and anti-tumor properties and is used to support joint and gastrointestinal health.";
                btn_text = "Shop Now";
            }
            else if (t === ('Feverfew').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=feverfew*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Feverfew').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=feverfew*&view=ls";
                action = "Feverfew has been traditionally used against inflammation with migraines and fevers and  to support healthy blood vessel tone.";
                btn_text = "Shop Now";
            }
            else if (t === ('Peppermint oil, enteric coated').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=enteric*+coated*+peppermint*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Enteric Coated Peppermint Oil').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=enteric*+coated*+peppermint*&view=ls";
                action = "Peppermint is a hybrid of water mint and spearmint and is classified as a carminitave, which prevents and relieves intestinal gas. Supplement with peppermint oil that is enterically coated - this protects it from stomach acid, to offer digestive relief.";
                btn_text = "Shop Now";
            }
            else if (t === ('Saint John\'s wort').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=st*+john%27s*+wort*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Saint John\'s Wort').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=st*+john%27s*+wort*";
                action = "St. John's Wort has traditionally been used for supporting emotional health. ";
                btn_text = "Shop Now";
            }
            else if (t === ('Kava').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=kava*";
                btn_text = "Shop Now";
            }
            else if (t === ("Take Saint John's Wort").toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=st*+john%27s*+wort*&view=ls";
                action = "St. John's Wort has traditionally been used for supporting emotional health. Begin supplementing with St. John's Wort, a well-researched herb with an effect on nerve cell chemistry.";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Kava (Piper methysticum)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=kava*&view=ls";
                action = "Kava helps to promote a sense of calm and relaxation and is beneficial for those experiencing ongoing stress.  Begin supplementing with Piper methysticum, the anxiety-relieving shrub more commonly known as Kava.";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Aloe Vera Gel').toLowerCase()) {
                action = "The fleshy leaves of aloe vera contain polysaccharides, which are effective for burns of all types and is also good for cuts, insect stings, bruises, acne and blemishes, poison ivy, welts, skin ulcers, and eczema. The gel form of aloe vera can be applied topically for burns/inflammation, or taken internally for digestive health.";
                l = "https://myvillagegreen.com/products/99-aloe-vera-gelly";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Aloe Vera Latex').toLowerCase()) {
                action = "When taken internally, aloe vera juice is known to aid in the healing of stomach disorders, ulcers, constipation, hemorrhoids, rectal itching, colitis, and all colon problems.  Begin supplementing with the latex form of Aloe vera to improve your digestion.";
                btn_text = "Learn More";
            }
            else if (t === ('Ginger').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=ginger*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Ginger').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=ginger*&view=ls";
                action = "Ginger root has warming properties, benfits circulation, helps to relieve nausea and upset stomach, has anti-inflammatory properties, and supports a healthy immune system.  Begin taking the anti-inflammatory root Ginger; either in your diet, or as a supplement of Ginger extract.";
                btn_text = "Shop Now";
            }
            else if (t === ('Deglycyrrhizinated Licorice (DGL)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=dgl*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Deglycyrrhizinated Licorice (DGL)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=dgl*&view=ls";
                action = "Deglycyrrhizinated licorice supports and promotes a healthy stomach lining and intestinal flora. The glycyrrhizinic and glycyrrhetinic acids, associated with high blood pressure, have been removed. Start supplementing with Deglycyrrhizinated licorice (DGL); a form of licorice ideal for digestive health.";
                btn_text = "Shop Now";
            }
            else if (t === ('Indole-3-Carbinol').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=indole*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Indole-3-Carbinol').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=indole*&view=ls";
                action = "Indole-3-carbinol (I3C) is derived from the breakdown of glucobrassicin, a compound found in cruciferous vegetables. It is involved in the metabolism and elimination of steroid hormones, drugs, carcinogens, and toxins. Start supplementing with Indole-3-Carbinol (I3C); an extract from cruciferous veggies which supports detoxification.";
                btn_text = "Shop Now";
            }
            else if (t === ('Chamomile').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=chamomile*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Chamomile').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=chamomile*&view=ls";
                action = "Chamomile is well-known for its gentle actions as it promotes relaxation and supports digestive health. Begin taking chamomile; in tea form, or supplemented as an extract as done in clinical trials.";
                btn_text = "Shop Now";
            }
            else if (t === ('Pectin, Modified Citrus (MCP)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=modified*+citrus*+pectin*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Modified Citrus Pectin (MCP)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=modified*+citrus*+pectin*&view=ls";
                action = "Pectin is a gelatinous substance known as a polysaccharide. Modified citrus pectin is made by exposing pectin to sodium hydroxide and hydrochloric acid so the polysachharide molecules break down and are more readily absorbed i nthe gut.";
                btn_text = "Shop Now";
            }
            else if (t === ('Green tea').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=green*+tea*+extract*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Green Tea Extract').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=green*+tea*+extract*&view=ls";
                action = "Green tea has been shown to have powerful antioxidant properties. In addition, it has thermogenic and immune supportive benefits.";
                btn_text = "Shop Now";
            }
            else if (t === ('Curcumin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=curcumin*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Curcumin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=curcumin*&view=ls";
                action = "Curcumin is a phytochemical in the rhizome turmeric  known for its anti-inflammatory and antioxidant properties and helps to support and promote skin and digestive health";
                btn_text = "Shop Now";
            }
            else if (t === ('Bromelain').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=bromelain*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Bromelain').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=bromelain*&view=ls";
                action = "Bromelain is an anti-inflammatory enzyme found in pineapples that supports protein digestion and joint health";
                btn_text = "Shop Now";
            }
            else if (t === ('Eleuthero').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=eleuthero*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Eleutherococcus (Siberian Ginseng)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=eleuthero*&view=ls";
                action = "Eleutherococcus supports immune health, general health and is used to improve endurance and stamina.";
                btn_text = "Shop Now";
            }
            else if (t === ('PSK').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=turkey*+tail*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take PSK').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=turkey*+tail*&view=ls";
                action = "PSK, polysaccharide-k is a protein-bound compound found in turkey tail mushrooms and known for its immune stimulating properties";
                btn_text = "Shop Now";
            }
            else if (t === ('Silymarin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=eleuthero*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Juzen-taiho-to (TJ-48)').toLowerCase()) {
                action = "Juzen-taiho-to (TJ-48), a traditional Japaneseherbal formula, can be helpful in alleviating anemia.";
                btn_text = "Learn More";
            }
            else if (t === ('Take Silymarin').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=eleuthero*&view=ls";
                action = "Silymarin is the active ingredient in the herb, milk thistle, which supports liver function";
                btn_text = "Shop Now";
            }
            else if (t === ('Ashwagandha').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=ashwagandha*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Ashwagandha').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=ashwagandha*&view=ls";
                action = "Ashwagandha (Withania somnifera) is a grounding, calming and restoring herb that promotes balance in the body by supporting healthy cortisol levels";
                btn_text = "Shop Now";
            }
            else if (t === ('Korean Ginseng').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=korean*+ginseng*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Korean Ginseng').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=korean*+ginseng*&view=ls";
                action = "Korean gingeng promotes energy, memory and libido.";
                btn_text = "Shop Now";
            }
            else if (t === ('Bitter Melon').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=bitter*+melon*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Bitter Melon').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=bitter*+melon*&view=ls";
                action = "Bittermelon (Momordica charantia) is used to support digestion, cardiovascular function and skin health";
                btn_text = "Shop Now";
            }
            else if (t === ('Gymnema').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=gymnema*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Gynmema').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=gymnema*&view=ls";
                action = "Gymnema  (Gymnema sylvestre) helps to support healthy blood sugar levels by promoting anti-sweetness activity by suppressing the ability to detect sweet tastes.";
                btn_text = "Shop Now";
            }
            else if (t === ('Butterbur').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=butterbur*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Butterbur').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=butterbur*&view=ls";
                action = "Butterbur has anti-inflammatory properties and supports healthy blood flow to the brain and promotes relief from headaches";
                btn_text = "Shop Now";
            }
            else if (t === ('Rhodiola').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=rhodiola*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Fenugreek').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=fenugreek*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Fenugreek').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=fenugreek*&view=ls";
                action = "Fenugreek has been known to support healthy blood sugar levels as well as promoting healthy lactation women who are breastfeeding.";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Prickly Pear').toLowerCase()) {
                action = "Prickly pear (Opuntia ficus-indica) supports healthy gut function by promoting bowel movements to remove toxic substances from the gut. Start taking prickly pear, for anti-inflammatory and blood sugar benefits.";
                btn_text = "Learn More";
            }
            else if (t === ('Cordyceps').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=cordyceps*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Cordyceps').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=cordyceps*&view=ls";
                action = "Cordyceps (Coryceps sinensis) is a mushroom used to improve immune function, athletic performance and sexual function.";
                btn_text = "Shop Now";
            }
            else if (t === ('Chasteberry').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=chaste*+tree*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Chasteberry').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=chaste*+tree*&view=ls";
                action = "Chaste tree berry (Vitex agnus castus)  is used to support  support gynecological health by helping to maintain hormone balance.";
                btn_text = "Shop Now";
            }
            else if (t === ('Cinnamon').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=cinnamon*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Cinnamon').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=cinnamon*&view=ls";
                action = "Cinnamon is used to support digestion, blood function, glycemic response and immune function.  Start supplementing with a cinnamon extract, or using 1-3g per day with meals.";
                btn_text = "Shop Now";
            }
            else if (t === ('Bilberry').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=bilberry*";
                btn_text = "Shop Now";
            }
            else if (t === ("Take Cat's Claw").toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=cats*+claw*&view=ls";
                action = "Cat's claw,  a South American plant, supports the inflammatory pathways in the human body by supporting joint health as well as the healthy functioning of the immune system.";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Bilberry').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=bilberry*&view=ls";
                action = "Bilberry promotes eye health and vision  and supports a healthy inflammatory response. Start taking Bilberry, known to contain an impressive variety of antioxidants and proanthocyanins.";
                btn_text = "Shop Now";
            }
            else if (t === ('Black cohosh').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=black*+cohosh*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Black Cohosh').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=black*+cohosh*&view=ls";
                action = "Black cohosh is used to to support normal levels of energy and to support the female reproductive system during the menopausal and perimenopausal years. Start supplementing with a black cohosh extract for relief of menopausal symptoms.";
                btn_text = "Shop Now";
            }
            else if (t === ('Cats Claw').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=cats*+claw*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Cat\'s Claw').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=cats*+claw*";
                action = "Cat's claw supports the inflammatory pathways in the human body by supporting joint health as well as the healthy functioning of the immune system.";
                btn_text = "Shop Now";
            }
            else if (t === ('Saw palmetto').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=saw*+palmetto*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Saw Palmetto').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=saw*+palmetto*&view=ls";
                action = "Saw palmetto is traditionally used to maintain healthy prostate function. Begin supplementing with Saw palmetto, an herb which targets hormone activity.";
                btn_text = "Shop Now";
            }
            else if (t === ('Forskolin').toLowerCase()) {
                l = "https://myvillagegreen.com/products/coleus-forskohlii-extract?_pos=5&_sid=d7f04984e&_ss=r";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Forskolin').toLowerCase()) {
                l = "https://myvillagegreen.com/products/coleus-forskohlii-extract?_pos=5&_sid=d7f04984e&_ss=r";
                action = "Extracted from the plant Coleus forskohlii, forskolin is a chemical compound that has been shown to be beneficial for heart health, digestion, respiratory health, as well as skin conditions.";
                btn_text = "Shop Now";
            }
            else if (t === ('Goldenseal').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=goldenseal*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Goldenseal').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=goldenseal*&view=ls";
                action = "Goldenseal is traditionally used to support the body's immune defenses as well as supporting digestive and urinary tract health. Begin supplementing with goldenseal, a plant with both antimicrobial and metabolic benefits.";
                btn_text = "Shop Now";
            }
            else if (t === ('Mastic gum').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=mastic*+gum*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Mastic Gum').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=mastic*+gum*&view=ls";
                action = "Mastic gum is a resinous product obtained from the mastic tree. It is beneficial for supporting healthy stomach lining and promoting GI microbial balancce.";
                btn_text = "Shop Now";
            }
            else if (t === ('White Willow Bark').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=willow*+bark*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take White Willow Bark').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=willow*+bark*&view=ls";
                action = "White willow bark has a long history of use as an anti-inflammatory and analgesic herb.";
                btn_text = "Shop Now";
            }
            else if (t === ('Echinacea').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=echinacea*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Echinacea').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=echinacea*&view=ls";
                action = "Echinacea is also known as purple coneflower and has antibiotic and antiviral properties to support the immune system";
                btn_text = "Shop Now";
            }
            else if (t === ('Hawthorn').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=hawthorn*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Hawthorn').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=hawthorn*&view=ls";
                action = "Hawthorn is a European shrub that is used to treat heart problems such as high blood pressure , heart palpitations and artherosclerosis.";
                btn_text = "Shop Now";
            }
            else if (t === ('Berberine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=berberine*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Berberine').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=berberine*&view=ls";
                action = "Berberine is the main phytochemical in goldenseal responsible for its antimicrobial properties.";
                btn_text = "Shop Now";
            }
            else if (t === ('Huperzine-A').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=huperzine*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Huperzine-A').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=huperzine*&view=ls";
                action = "Huperzine-A, which is derived from Chinese club moss, supports memory and cognitive health.";
                btn_text = "Shop Now";
            }
            else if (t === ('Yohimbe').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=yohimbe*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Yohimbe').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=yohimbe*&view=ls";
                action = "Yohimbe is derived from the West African yohimbehe tree and uses as an aphrodisiac and to increase blood flow.";
                btn_text = "Shop Now";
            }
            else if (t === ('Dong quai').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=dong*+quai*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Plant Stanols').toLowerCase()) {
                action = "Plant stanols are naturally occuring compounds that have been shown to support healthy cholesterol levels.";
                btn_text = "Learn More";
            }
            else if (t === ('Take Sho-saiko-to').toLowerCase()) {
                action = "Sho-saiko-to is a Japanese herbal formula designed to support liver health.";
                btn_text = "Learn More";
            }
            else if (t === ('Take Dong quai').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=dong*+quai*&view=ls";
                action = "Considered the \"female ginseng,\" dong quai supports women's health by reducing painful menstruation, promoting menstrual regularity, and reducing menopausal symptoms, such as hot flashes.";
                btn_text = "Shop Now";
            }
            else if (t === ('Devil\'s Claw').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=devil%27s*+claw*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Devil\'s Claw').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=devil%27s*+claw*&view=ls";
                action = "Devil's Claw, an African herb, is known for it's anti-inflammatory and blood sugar balancing properties.";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Devil\'s Claw').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=devil%27s*+claw*";
                btn_text = "Shop Now";
            }
            else if (t === ('Valerian').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=valerian*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Valerian').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=valerian*&view=ls";
                action = "Valerian provides a sense of calm and relaxation. Start supplementing with Valerian; this herb is often taken in the evenings to help with sleeping.";
                btn_text = "Shop Now";
            }
            else if (t === ('Licorice').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=licorice*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Picrorhiza').toLowerCase()) {
                action = "Picrorrhiza is an Ayurvedic herb that has been shown to have anti-inflammatory, antioxidant, respiratory, liver, and immune supportive properties.";
                btn_text = "Learn More";
            }
            else if (t === ('Take Carob').toLowerCase()) {
                action = "Carob is a fruit that can provide relief for diarrhea by helping with binding loose stools.";
                btn_text = "Learn More";
            }
            else if (t === ('Take Licorice').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=licorice*&view=ls";
                action = "Licorice root (Glycyrrhiza glabra root) has anti-inflammatory, mucoprotective, demulcent, anti-ulcer, anti-viral, and adrenal supportive properties.";
                btn_text = "Shop Now";
            }
            else if (t === ('Oregano').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=oregano*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Oregano').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=oregano*&view=ls";
                action = "Oregano supports immune health, microbial balance, and provides antioxidant protection.";
                btn_text = "Shop Now";
            }
            else if (t === ('Cascara').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=cascara*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Cascara').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=cascara*&view=ls";
                action = "Cascara is a stimulating laxative and supplementation can be helpful for situational constipation. Regular use should be avoided.";
                btn_text = "Shop Now";
            }
            else if (t === ('Senna').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=senna*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Senna').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=senna*&view=ls";
                action = "Extracts of Senna have laxative effects which support regularity through.";
                btn_text = "Shop Now";
            }
            else if (t === ('Andrographis').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=andrographis*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Andrographis').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=andrographis*&view=ls";
                action = "Andrographis  (Andrographis paniculata) is an Ayurvedic herb that has been shown to support immune, liver, and cardiovascular health.";
                btn_text = "Shop Now";
            }
            else if (t === ('Phytosterols').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=phytosterols*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Phytosterols').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=phytosterols*&view=ls";
                action = "Plant sterols are plant compounds that promote healthy cholesterol levels and cardiovascular health. Begin supplementing with phytosterols, or adding them to your diet - used primarily for cholesterol and prostate health.";
                btn_text = "Shop Now";
            }
            else if (t === ('Red clover').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=red*+clover*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Red Clover').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=red*+clover*&view=ls";
                action = "Red clover contains phytoestrogenic compounds, which makes it helpful for relieving menopausal and peri-menopausal symptoms.";
                btn_text = "Shop Now";
            }
            else if (t === ('Pygeum').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=pygeum*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Pygeum').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=pygeum*&view=ls";
                action = "Pygeum (Pygeum africanum)  is an evergreen tree native to Africa and it's bark is used to support urinary / prostate health. Studies show that pygeum has anti-inflammatory properties.";
                btn_text = "Shop Now";
            }
            else if (t === ('Stinging nettle').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=stinging*+nettle*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Rye Grass Pollen Extract').toLowerCase()) {
                action = "Rye grass pollen extract, shown to improve a variety of urological symptoms.";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Stinging Nettle').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=stinging*+nettle*&view=ls";
                action = "Stinging nettle (Urtica dioica) has both anti-inflammatory and anti-allergy effects.";
                btn_text = "Shop Now";
            }
            else if (t === ('American Ginseng').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=american*+ginseng*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take American Ginseng').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=american*+ginseng*&view=ls";
                action = "American ginseng (Panax quinquefolius)  is an herbal adaptogen that supports stamina, vitality, and helps to strengthen the immune health.";
                btn_text = "Shop Now";
            }
            else if (t === ('Passionflower').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=passionflower*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Passionflower').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=passionflower*&view=ls";
                action = "Passionflower promotes a sense of calm and relaxation. It helps restlessness and general agitation.";
                btn_text = "Shop Now";
            }
            else if (t === ('California poppy (Eschscholzia californica)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=california*+poppy*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Pelargonium Sidoides').toLowerCase()) {
                action = "Pelgaronium (Pelargonium sidoides) supports upper respiratory health and can be beneficial when taken at the first sign of a cold, or when experiencing a cough or sinus symptoms.";
                btn_text = "Learn More";
            }
            else if (t === ('Take California Poppy').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=california*+poppy*&view=ls";
                action = "California poppy supports nervous system heallth. It is helpful for mild anxiety and nervousness and has gentle sedative properties. Start supplementing with an extract of California poppy, known to provide relief for anxiety-related conditions.";
                btn_text = "Shop Now";
            }
            else if (t === ('Lemon balm (Melissa officinalis)').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product&q=lemon*+balm*";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Lemon Balm').toLowerCase()) {
                l = "https://myvillagegreen.com/search?type=product%2Cpage&q=lemon*+balm*&view=ls";
                action = "Lemon balm (Melissa officinalis) is a member of the minf family and has traditionally been used to support digestion and to calm nerves.";
                btn_text = "Shop Now";
            }
            else if (t === ('Elderberry').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=elderberry*&type=product";
                btn_text = "Shop Now";
            }
            else if (t === ('Take Elderberry ').toLowerCase()) {
                l = "https://myvillagegreen.com/search?q=elderberry*&type=product%2Cpage&view=ls";
                action = "Elderberry (Sambucus nigra) is rich in antioxidants and supports immune health. Start supplementation with elderberry to reduce swelling, fight inflammation, and boost the immune system.";
                btn_text = "Shop Now";
            }
            else if (t === ('Decrease your intake of foods containing Histamine').toLowerCase()) {
                action = "Identify histamine-rich foods, e.g. red wine, chocolate, aged cheese, etc., and avoid these common food triggers.";
                btn_text = "Learn More";
            }
            else if (t === ('Decrease your intake of Histamines').toLowerCase()) {
                action = "Identify histamine-rich foods, e.g. red wine, chocolate, aged cheese, etc., and avoid these common food triggers.";
                btn_text = "Learn More";
            }
            else if (t === ('Remove Gluten-containing foods from your diet').toLowerCase()) {
                action = "Identify all sources of gluten (wheat, barley, etc.) and remove them from your diet. This requires some close detective work.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid gluten').toLowerCase()) {
                action = "Identify all sources of gluten (wheat, barley, etc.) and remove them from your diet. This requires some close detective work.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid consuming foods containing Tyramine').toLowerCase()) {
                action = "Identify dietary tyramines, e.g. aged cheese, soy sauce, fermented sausage, etc., and remove these triggers from your diet.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid dietary Tyramines').toLowerCase()) {
                action = "Identify dietary tyramines, e.g. aged cheese, soy sauce, fermented sausage, etc., and remove these triggers from your diet.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce the amount of Iron you consume').toLowerCase()) {
                action = "Avoiding animal foods and using an iron skillet are steps to avoid ingesting dietary forms of iron.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut down on dietary Iron').toLowerCase()) {
                action = "Avoiding animal foods and using an iron skillet are steps to avoid ingesting dietary forms of iron.";
                btn_text = "Learn More";
            }
            else if (t === ('Increase the amount of protein in your diet').toLowerCase()) {
                action = "Identify healthy protein sources, e.g. nuts, seeds, beans, lentils, healthy meats, and start to increase your total intake.";
                btn_text = "Learn More";
            }
            else if (t === ('Increase your protein intake').toLowerCase()) {
                action = "Identify healthy protein sources, e.g. nuts, seeds, beans, lentils, healthy meats, and start to increase your total intake.";
                btn_text = "Learn More";
            }
            else if (t === ('Increase your dietary fiber').toLowerCase()) {
                action = "Identify good dietary sources of fiber, e.g. fruits/veggies, oats, whole grains, beans, etc., and eat these foods regularly.";
                btn_text = "Learn More";
            }
            else if (t === ('Increase your fiber intake').toLowerCase()) {
                action = "Identify good dietary sources of fiber, e.g. fruits/veggies, oats, whole grains, beans, etc., and eat these foods regularly.";
                btn_text = "Learn More";
            }
            else if (t === ('Decrease your total dietary fat').toLowerCase()) {
                action = "Reduce your intake of dietary fats (see the HOW guide) - typically around 20% is considered a reasonable goal.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut down on dietary fat').toLowerCase()) {
                action = "Reduce your intake of dietary fats - typically around 20% is considered a reasonable goal.";
                btn_text = "Learn More";
            }
            else if (t === ('Decrease your intake of sugar').toLowerCase()) {
                action = "There are many sources of dietary sugar - try to eliminate most/all of them, particularly 'added' sugars.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut down on Dietary Sugar').toLowerCase()) {
                action = "There are many sources of dietary sugar - try to eliminate most/all of them, particularly 'added' sugars.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce the amount of saturated fats in your diet').toLowerCase()) {
                action = "Try to cut down on your intake of saturated fats, e.g. meats, dairy, butter, to no more than 10% of your calories.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut down on saturated fats').toLowerCase()) {
                action = "Try to cut down on your intake of saturated fats, e.g. meats, dairy, butter, to no more than 10% of your calories.";
                btn_text = "Learn More";
            }
            else if (t === ('Follow a Calorie-Restricted Diet').toLowerCase()) {
                action = "A calorie restricted diet can have benefits in addition to weight loss - see the HOW section for details.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your Calorie intake').toLowerCase()) {
                action = "A calorie restricted diet can aid in weight loss and may also have benefits for increasing lifespan. ";
                btn_text = "Learn More";
            }
            else if (t === ('Salicylates, Dietary, Decrease Intake').toLowerCase()) {
                action = "Identify and avoid foods rich in salicylates, e.g. tea, curry, berries, licorice, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce dietary Salicylate intake').toLowerCase()) {
                action = "Identify and avoid foods rich in salicylates, e.g. tea, curry, berries, licorice, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce the amount of protein in your diet').toLowerCase()) {
                action = "Consult with a nutritionist to help reduce your protein intake - this may be necessary for your kidney function.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your Protein intake').toLowerCase()) {
                action = "Consult with a nutritionist to help reduce your protein intake - this may be necessary for your kidney function.";
                btn_text = "Learn More";
            }
            else if (t === ('Decrease your fiber intake').toLowerCase()) {
                action = "Though generally helpful, you may need to cut your dietary fiber intake to 10 grams per day or less.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your Fiber intake').toLowerCase()) {
                action = "Though generally helpful, you may need to cut your dietary fiber intake to 10 grams per day or less.";
                btn_text = "Learn More";
            }
            else if (t === ('Minimize your intake of Cholesterol-containing foods').toLowerCase()) {
                action = "Reduce your intake of cholesterol, i.e. animal foods. Elimination is more effective than small reductions.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut down on dietary Cholesterol').toLowerCase()) {
                action = "Reduce your intake of cholesterol, i.e. animal foods. Elimination is more effective than small reductions.";
                btn_text = "Learn More";
            }
            else if (t === ('Limit foods containing trans fatty acids').toLowerCase()) {
                action = "Aim for a goal of zero dietary trans fats, found in processed foods with \"hydrogenated\" in the ingredient list.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Trans Fatty Acids').toLowerCase()) {
                action = "Aim for a goal of zero dietary trans fats, found in processed foods with \"hydrogenated\" in the ingredient list.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Phenylethylamine containing foods').toLowerCase()) {
                action = "Identify sources of phenylethylamines (e.g. chocolate, aged cheese, etc.), and eliminate them from your diet.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid dietary Phenylethylamines').toLowerCase()) {
                action = "Identify sources of phenylethylamines (e.g. chocolate, aged cheese, etc.), and eliminate them from your diet.";
                btn_text = "Learn More";
            }
            else if (t === ('Decrease your sodium intake').toLowerCase()) {
                action = "Cut back on your salt intake; aim for no more than 2300mg, and as low as 1500mg per day.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut back on Dietary sodium (salt)').toLowerCase()) {
                action = "Cut back on your salt intake; aim for no more than 2300mg, and as low as 1500mg per day.";
                btn_text = "Learn More";
            }
            else if (t === ('Increase your daily intake of Calories').toLowerCase()) {
                action = "Increase your total caloric intake, emphasizing foods that are also nutrient-rich, e.g. fruits/veggies, whole grains, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Increase your dietary Calorie intake').toLowerCase()) {
                action = "Increase your total caloric intake, emphasizing foods that are also nutrient-rich, e.g. fruits/veggies, whole grains, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Vitamin K, reduce intake').toLowerCase()) {
                action = "Monitor your vitamin K intake; you may be consuming too much or too inconsistent amounts given your medications.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your Vitamin K intake').toLowerCase()) {
                action = "Monitor your vitamin K intake; you may be consuming too much or too inconsistent amounts given your medications.";
                btn_text = "Learn More";
            }
            else if (t === ('Increase your potassium intake').toLowerCase()) {
                action = "Emphasize potassium rich foods, e.g. sweet potato, Swiss chard, etc.; this has both cardiovascular and urinary benefits.";
                btn_text = "Learn More";
            }
            else if (t === ('Increase your dietary Potassium intake').toLowerCase()) {
                action = "Emphasize potassium rich foods, e.g. sweet potato, Swiss chard, etc.; this has both cardiovascular and urinary benefits.";
                btn_text = "Learn More";
            }
            else if (t === ('Low Iodine Diet').toLowerCase()) {
                action = "Begin eating a diet with a low amount of iodine (See HOW section) - this may improve autoimmune thyroid conditions.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your intake of Iodine').toLowerCase()) {
                action = "Begin eating a diet with a low amount of iodine - this may improve autoimmune thyroid conditions.";
                btn_text = "Learn More";
            }
            else if (t === ('Decrease your alcohol consumption').toLowerCase()) {
                action = "Reduce your alcohol intake; a high intake is linked to cardiovascular and overall mortality.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut back on Alcohol consumption').toLowerCase()) {
                action = "Reduce your alcohol intake; a high intake is linked to cardiovascular and overall mortality.";
                btn_text = "Learn More";
            }
            else if (t === ('Try doing Biofeedback or Meditation or Relaxation Exercise').toLowerCase()) {
                action = "Find a technique, e.g. biofeedback, meditation, etc., which helps you to reduce the effects of stress - See the HOW section.";
                btn_text = "Learn More";
            }
            else if (t === ('Try Biofeedback/Meditation/Relaxation').toLowerCase()) {
                action = "Stress is a major contributor to many health problems. Find a technique, e.g. biofeedback, meditation, etc., which helps you to reduce the effects of stress.";
                btn_text = "Learn More";
            }
            else if (t === ('Quit smoking').toLowerCase()) {
                action = "Quitting smoking is one of the most powerful steps you can take to improve your overall health.";
                btn_text = "Learn More";
            }
            else if (t === ('Consider switching to an Non-Hormonal Contraceptive method').toLowerCase()) {
                action = "Oral contraceptives, while effective, may have adverse effects. Consider switching to a non-hormonal method, e.g. IUD, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Consider a Non-hormonal Contraceptive').toLowerCase()) {
                action = "Oral contraceptives, while effective, can have adverse effects. Consider switching to a non-hormonal method, e.g. IUD, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Exercise for 150 minutes/week at a moderate aerobic rate').toLowerCase()) {
                action = "Exercise on average 30 minutes per day, most days - this may include walking, jogging, dancing, stair climbing, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Aim for 150 minutes aerobic exercise/week').toLowerCase()) {
                action = "Exercise on average 30 minutes per day, most days - this may include walking, jogging, dancing, stair climbing, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Exercise 300 minutes/week at a moderate aerobic rate').toLowerCase()) {
                action = "Exercise on average 60 minutes per day, most days - this may include walking, jogging, dancing, stair climbing, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Aim for 300 minutes aerobic exercise/week').toLowerCase()) {
                action = "Exercise on average 60 minutes per day, most days - this may include walking, jogging, dancing, stair climbing, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Add Resistance Training to your exercise plan: moderate intensity').toLowerCase()) {
                action = "Begin resistance training - this means adding exercise designed to increase muscle mass/strength. See HOW for details.";
                btn_text = "Learn More";
            }
            else if (t === ('Add in Resistance Training').toLowerCase()) {
                action = "Begin resistance training - this means adding exercise designed to increase muscle mass/strength.";
                btn_text = "Learn More";
            }
            else if (t === ('Add Resistance Training to your exercise plan: light intensity').toLowerCase()) {
                action = "Start adding in light strength training to increase your muscle strength and mass. See HOW for details.";
                btn_text = "Learn More";
            }
            else if (t === ('Add light Resistance Training').toLowerCase()) {
                action = "Start adding in light strength training to increase your muscle strength and mass.";
                btn_text = "Learn More";
            }
            else if (t === ('Kegel exercises').toLowerCase()) {
                action = "Identify the right muscles by stopping urination midstream. Practice contracting these for longer duration, throughout the day.";
                btn_text = "Learn More";
            }
            else if (t === ('Do daily Kegel Exercises').toLowerCase()) {
                action = "Identify the right muscles by stopping urination midstream. Practice contracting these for longer duration, throughout the day.";
                btn_text = "Learn More";
            }
            else if (t === ('Improve your Sleep Habits').toLowerCase()) {
                action = "Restful sleep allows your body and mind to recharge. Take steps to developing healthy sleep habits, such as setting a consistent sleep schedule, limiting caffeine, and creating relaxing bedtime rituals to help promote a good night's sleep.";
                btn_text = "Learn More";
            }
            else if (t === ('Include Hamstring stretches in your exercise plan').toLowerCase()) {
                action = "Stretch your hamstrings regularly (See HOW section) - this includes holding a stretch for at least 30-45 seconds.";
                btn_text = "Learn More";
            }
            else if (t === ('Add Hamstring Stretches').toLowerCase()) {
                action = "Stretch your hamstrings regularly - this includes holding a stretch for at least 30-45 seconds.";
                btn_text = "Learn More";
            }
            else if (t === ('Add lumbar support in the car').toLowerCase()) {
                action = "Begin using a lumbar support pad, especially while driving. These are widely available and provide relief.";
                btn_text = "Learn More";
            }
            else if (t === ('Use a Lumbar Support Pad').toLowerCase()) {
                action = "Begin using a lumbar support pad, especially while driving. These are widely available and provide relief.";
                btn_text = "Learn More";
            }
            else if (t === ('Use proper lifting techniques').toLowerCase()) {
                action = "Make sure when you lift anything heavy, while exercising or not, use correct techniques to avoid injury.";
                btn_text = "Learn More";
            }
            else if (t === ('Begin doing Core Body strengthening exercises').toLowerCase()) {
                action = "Begin adding core strengthening exercises to protect against injury - See our HOW section for details.";
                btn_text = "Learn More";
            }
            else if (t === ('Add Core Body Strengthening Exercise').toLowerCase()) {
                action = "Begin adding core strengthening exercises to protect against injury.";
                btn_text = "Learn More";
            }
            else if (t === ('Resume normal physical activity levels').toLowerCase()) {
                action = "Rather than bed rest, getting back to normal activity as soon as possible is more effective following an injury.";
                btn_text = "Learn More";
            }
            else if (t === ('Get back to normal physical activity').toLowerCase()) {
                action = "Rather than bed rest, getting back to normal activity as soon as possible is more effective following an injury.";
                btn_text = "Learn More";
            }
            else if (t === ('Hepatitis B Vaccine').toLowerCase()) {
                action = "The hepatitis B vaccine is strongly recommended for some populations, including health care workers, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Get vaccinated for Hepatitis B').toLowerCase()) {
                action = "The hepatitis B vaccine is strongly recommended for some populations, including health care workers, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Hepatitis A Vaccine').toLowerCase()) {
                action = "The hepatitis A vaccine is recommended for those with high risk, e.g. those in areas of high exposure.";
                btn_text = "Learn More";
            }
            else if (t === ('Get vaccinated for Hepatitis A').toLowerCase()) {
                action = "The hepatitis A vaccine is recommended for those with high risk, e.g. those in areas of high exposure.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your exposure to second hand smoke').toLowerCase()) {
                action = "More data is emerging on the dangers of second-hand smoke - it may be more hazardous than smoking, as it bypasses any filters.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Second Hand Smoke').toLowerCase()) {
                action = "More data is emerging on the dangers of second-hand smoke - it may be more hazardous than smoking, as it bypasses any filters.";
                btn_text = "Learn More";
            }
            else if (t === ('UVB light exposure').toLowerCase()) {
                action = "A short series (20-40 total) of UVB treatments is effective for some skin conditions.";
                btn_text = "Learn More";
            }
            else if (t === ('Get exposure to UVB Light').toLowerCase()) {
                action = "A short series (20-40 total) of UVB treatments is effective for some skin conditions.";
                btn_text = "Learn More";
            }
            else if (t === ('Bright light therapy').toLowerCase()) {
                action = "Start using bright light therapy - full spectrum lights appropriately timed can improve sleep & mood.";
                btn_text = "Learn More";
            }
            else if (t === ('Start using Bright Light Therapy').toLowerCase()) {
                action = "Start using bright light therapy - full spectrum lights appropriately timed can improve sleep & mood.";
                btn_text = "Learn More";
            }
            else if (t === ('Cognitive Behavioral Therapy').toLowerCase()) {
                action = "Find a therapist trained in cognitive behavioral therapy (CBT), a proven method for a number of mental health conditions.";
                btn_text = "Learn More";
            }
            else if (t === ('Find a Cognitive Behavioral Therapist').toLowerCase()) {
                action = "Find a therapist trained in cognitive behavioral therapy (CBT), a proven method for supporting mental health. Working with a therapist can help one manage stressful life situations in a healthy manner.";
                btn_text = "Learn More";
            }
            else if (t === ('Pacifier restriction').toLowerCase()) {
                action = "Avoiding or restricting pacifier use may help to reduce the risk for ear infections.";
                btn_text = "Learn More";
            }
            else if (t === ('Restrict Pacifier Use').toLowerCase()) {
                action = "Avoiding or restricting pacifier use may help to reduce the risk for ear infections.";
                btn_text = "Learn More";
            }
            else if (t === ('Yoga').toLowerCase()) {
                action = "Joining a regular yoga practice, including exercise for stretching, strengthening, relaxation, etc. has potent health benefits.";
                btn_text = "Learn More";
            }
            else if (t === ('Add Yoga to your life').toLowerCase()) {
                action = "Joining a regular yoga practice, including exercise for stretching, strengthening, relaxation, etc. has many health benefits.";
                btn_text = "Learn More";
            }
            else if (t === ('Chewing tobacco cessation').toLowerCase()) {
                action = "Take advantage of the many resources for chewing tobacco cessation; this reduces risk for oral cancer and heart disease.";
                btn_text = "Learn More";
            }
            else if (t === ('Stop using Chewing Tobacco').toLowerCase()) {
                action = "Take advantage of the many resources for chewing tobacco cessation; this reduces risk for oral cancer and heart disease.";
                btn_text = "Learn More";
            }
            else if (t === ('Examine your feet regularly').toLowerCase()) {
                action = "You may be at high risk for foot infections; monitoring your feet closely can help to spot these early and receive treatment.";
                btn_text = "Learn More";
            }
            else if (t === ('Consider a Protein Redistribution diet').toLowerCase()) {
                action = "A protein redistribution diet involves concentrating your protein intake to a certain time of the day. This type of dietary approach has been shown to help make the medication levadopa more effective and to help reduce the feelings of sickness in people with Parkinson's disease.";
                btn_text = "Learn More";
            }
            else if (t === ('Follow a Low Glycemic Load/Index Diet').toLowerCase()) {
                action = "Eating a low glycemic load/index diet can help to improve blood sugar regulation and may be benecial for weight loss.";
                btn_text = "Learn More";
            }
            else if (t === ('Try an Elimination and Rechallenge Diet').toLowerCase()) {
                action = "Identify dietary tyramines, e.g. aged cheese, soy sauce, fermented sausage, etc., and remove these triggers from your diet.";
                btn_text = "Learn More";
            }
            else if (t === ('Try an Elimination/Rechallenge Diet').toLowerCase()) {
                action = "An elimination/rechallenge diet is considered the gold standard for identifying food sensitivities and food intolerances. It is a helpful tool for discovering foods that may be triggering symptoms such as allergies, eczema, skin issues, joint pain, migraine, brain fog, and fatigue.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce the overall size of your meals').toLowerCase()) {
                action = "Avoiding animal foods and using an iron skillet are steps to avoid ingesting dietary forms of iron.";
                btn_text = "Learn More";
            }
            else if (t === ('Lower the size of your meals').toLowerCase()) {
                action = "Reducing the size of your meals can help to promote blood sugar balance, enhance digestion, and aid in weight management.";
                btn_text = "Learn More";
            }
            else if (t === ('Adopt a Low Potassium Diet').toLowerCase()) {
                action = "Identify healthy protein sources, e.g. nuts, seeds, beans, lentils, healthy meats, and start to increase your total intake.";
                btn_text = "Learn More";
            }
            else if (t === ('Consume a Low Potassium Diet').toLowerCase()) {
                action = "Potassium plays a role in keeping your heartrate regular, maintaining fluid balance, and allows your nerves and muscles to work properly. The kidneys help to control the correct level of potassium in your blood. People who take certain medications or who have kidney disease  are sometimes unable to regulate potassium efficiently. Eating a low potassium diet can be benficial for those with diminished renal function.";
                btn_text = "Learn More";
            }
            else if (t === ('Dietary Recommendations for Preconception').toLowerCase()) {
                action = "Identify good dietary sources of fiber, e.g. fruits/veggies, oats, whole grains, beans, etc., and eat these foods regularly.";
                btn_text = "Learn More";
            }
            else if (t === ('Follow Preconception dietary recommendations').toLowerCase()) {
                action = "Eating a diet rich in whole, fresh foods has been shown to help optimize fertility. This includes eating plenty of vegetables and fruits, good quality protein sources, healthy fats, legume, and whole grains. Other recommendations include, minimizing your intake of fast food, highly processed foods and sugar sweetened beverages, as well as reducing your exposure to chemicals and toxins.";
                btn_text = "Learn More";
            }
            else if (t === ('Prenatal diet').toLowerCase()) {
                action = "Reduce your intake of dietary fats (see the HOW guide) - typically around 20% is considered a reasonable goal.";
                btn_text = "Learn More";
            }
            else if (t === ('Follow Prenatal dietary recommendations').toLowerCase()) {
                action = "Eating a healthy and balanced diet during pregnancy is important for your health as well as the growth and development of your baby. Nutrient dense foods, especially protein, complex carbohydrates, and quality fats, provide key nutrients such as iron, folate, and choline.";
                btn_text = "Learn More";
            }
            else if (t === ('Morning sickness dietary recommendations').toLowerCase()) {
                action = "There are many sources of dietary sugar - try to eliminate most/all of them, particularly 'added' sugars.";
                btn_text = "Learn More";
            }
            else if (t === ('Follow Morning sickness dietary recommendations').toLowerCase()) {
                action = "Morning sickness is caused by the rapid change in hormonal levels that occurs during the first weeks of pregnancy. Eating small frequent meals that contain complex carbohydrates and avoiding high fat foods can be helpful. In addition, because low blood sugar can cause nausea, try eating a protein rich snack before you go to bed. Drink plenty of liquids, including nutritious broths. Takeing a B complex supplement, especially vitamin B6, can also help.";
                btn_text = "Learn More";
            }
            else if (t === ('Eat breakfast every day').toLowerCase()) {
                action = "Studies have linked eating breakfast to good health, including better memory and concentration, lower levels of “bad” LDL cholesterol, and lower chances of getting diabetes, heart disease, and being overweight.";
                btn_text = "Learn More";
            }
            else if (t === ('Low carbohydrate diet').toLowerCase()) {
                action = "A calorie restricted diet can have benefits in addition to weight loss - see the HOW section for details.";
                btn_text = "Learn More";
            }
            else if (t === ('Adopt a Low Carbohydrate Diet').toLowerCase()) {
                action = "Eating a low carbohydrate diet is an approach that reduces the overal intake of carbohydrates. Common sources include grains, legumes, starchy vegetables, fruits, as well as refined carbohdyrates such as bread, pasta, cookies, etc. This approach can reduce the risk of metabolic syndrom,e type 2 diabetes, and aid in weight loss.";
                btn_text = "Learn More";
            }
            else if (t === ('Mediterranean diet').toLowerCase()) {
                action = "Identify and avoid foods rich in salicylates, e.g. tea, curry, berries, licorice, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Adopt a Mediterranean Diet').toLowerCase()) {
                action = "A  Mediterranean diet is a way of eating that's based on the traditional cuisines of Greece, Italy and other countries that border the Mediterranean Sea. It is a heart-healthy dietary approach that involves eating a lot of plant-based foods, such as whole grains, vegetables, legumes, fruits, nuts, seeds, herbs and spices.  Olive oil is the main source of added fat. Fish, seafood, dairy and poultry are included in moderation. And, red meat and sweets are eaten only occasionally.";
                btn_text = "Learn More";
            }
            else if (t === ('Carbohydrate counting diet').toLowerCase()) {
                action = "Consult with a nutritionist to help reduce your protein intake - this may be necessary for your kidney function.";
                btn_text = "Learn More";
            }
            else if (t === ('Start a Carbohydrate Counting Diet').toLowerCase()) {
                action = "A carbohydrate counting diet is an eating plan designed to keep blood sugar levels even throughout the day. The diet involves counting the grams of carbohydrates in all the foods you eat. By keeping the amount of carbohydrates consumed at each meal consistent, it can help prevent fluctuations in blood sugar.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your coffee consumption').toLowerCase()) {
                action = "While it is now generally thought to have positive effects on blood sugar, coffee, especially caffeine is not for everyone.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut back on Coffee').toLowerCase()) {
                action = "While it is now generally thought to have positive effects on blood sugar, coffee, especially caffeine is not for everyone.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid cured meat products').toLowerCase()) {
                action = "Avoid nitrates and nitrites commonly used to cure meat; these compounds have been linked to allergies as well as cancer.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Cured Meats').toLowerCase()) {
                action = "Avoid nitrates and nitrites commonly used to cure meat; these compounds have been linked to allergies as well as cancer.";
                btn_text = "Learn More";
            }
            else if (t === ('Eat more vegetables').toLowerCase()) {
                action = "Increase your daily consumption of veggies - ideally consume at least 5 servings of a variety (rainbow) of colors.";
                btn_text = "Learn More";
            }
            else if (t === ('Add flaxseed to your diet').toLowerCase()) {
                action = "Flaxseeds provide a rich source of plant-based omega-3 essential fatty acids, fiber, and important minerals. They have been shown to support digestion, balance blood sugar levels, and promote cardiovascular health. Add flaxseeds to your meals, either whole or ground to reap their many healthy benefits.";
                btn_text = "Learn More";
            }
            else if (t === ('Substitute Olive oil (monounsaturated fats) for other fats in your diet').toLowerCase()) {
                action = "Substitute olive oil for other fats - rich in monounsaturated fats, it is a key component of the Mediterranean diet.";
                btn_text = "Learn More";
            }
            else if (t === ('Use Primarily Olive Oil').toLowerCase()) {
                action = "Substitute olive oil for other fats. Olive oil is rich in monounsaturated fats and is a key component of the Mediterranean diet. Olive oil has anti-inflammatory and antioxidant properties.";
                btn_text = "Learn More";
            }
            else if (t === ('Drink more water').toLowerCase()) {
                action = "Replace other beverages with clean water. Even mild dehydration has immediate effects.";
                btn_text = "Learn More";
            }
            else if (t === ('Drink more Clean Water').toLowerCase()) {
                action = "Replace other beverages with clean water. Even mild dehydration has immediate effects.";
                btn_text = "Learn More";
            }
            else if (t === ('Eat less improperly cooked or high-fat meat').toLowerCase()) {
                action = "Meat that has been cooked excessively (often true for high fat portions) is rich in carcinogenic HCA's. Avoid if possible.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut back on improperly cooked and high fat meat').toLowerCase()) {
                action = "Meat that has been cooked excessively (often true for high fat portions) is rich in carcinogenic HCA's. Avoid if possible.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce the amount of Chocolate you consume').toLowerCase()) {
                action = "Try cutting back on chocolate consumption; it contains compounds which trigger migraines, PMS symptoms, etc., in some people.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut back on Chocolate').toLowerCase()) {
                action = "Try cutting back on chocolate consumption; it contains compounds which trigger migraines, PMS symptoms, etc., in some people.";
                btn_text = "Learn More";
            }
            else if (t === ('Decrease your consumption of Red Wine').toLowerCase()) {
                action = "Although small amounts have benefit for some, red wine contains possible triggers: sulfites, histamines, tyramines, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut back on Red Wine').toLowerCase()) {
                action = "Although small amounts have benefit for some, red wine contains possible triggers: sulfites, histamines, tyramines, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid eating foods containing Aged Cheese').toLowerCase()) {
                action = "Many aged cheeses are rich in tyramines, known to be allergy symptom triggers for some individuals.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Aged Cheese').toLowerCase()) {
                action = "Many aged cheeses are rich in tyramines, known to be allergy symptom triggers for some individuals.";
                btn_text = "Learn More";
            }
            else if (t === ('Drink Pomegranate juice').toLowerCase()) {
                action = "Add at least 1.5 oz Pomegranate juice per day; clinical trials have shown cardiovascular benefit.";
                btn_text = "Learn More";
            }
            else if (t === ('Onions').toLowerCase()) {
                action = "Rich in quercetin, eating more onions may help to reduce the inflammation which drives many chronic conditions.";
                btn_text = "Learn More";
            }
            else if (t === ('Eat More Onions').toLowerCase()) {
                action = "Rich in quercetin, eating more onions may help to reduce inflammation, which drives many chronic conditions.";
                btn_text = "Learn More";
            }
            else if (t === ('Limit the animal products in your diet').toLowerCase()) {
                action = "Limit or avoid your dietary intake of animals products, e.g. meats, dairy, etc., linked to many chronic conditions.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut back on Animal Products').toLowerCase()) {
                action = "Limit or avoid your dietary intake of animals products, e.g. meats, dairy, etc., linked to many chronic conditions.";
                btn_text = "Learn More";
            }
            else if (t === ('Increase the amount of fish in your diet or substitute fish for other animal proteins').toLowerCase()) {
                action = "Either replace other meats with fish, or add in wild fish to your diet; rich in cardioprotective omega-3 fats.";
                btn_text = "Learn More";
            }
            else if (t === ('Increase your Fish consumption').toLowerCase()) {
                action = "Either replace other meats in your diet with fish, or add in wild fish to increase your intake of cardioprotective omega-3 fats.";
                btn_text = "Learn More";
            }
            else if (t === ('Add more Soy Protein to your diet').toLowerCase()) {
                action = "Increase your intake of soy protein (e.g. tofu, tempeh, protein shakes) - a complete protein with cardioprotective properties.";
                btn_text = "Learn More";
            }
            else if (t === ('Add Soy Protein to your diet').toLowerCase()) {
                action = "Increase your intake of soy protein (e.g. tofu, tempeh, protein shakes) - a complete protein with cardioprotective properties.";
                btn_text = "Learn More";
            }
            else if (t === ('Add more oats to your diet').toLowerCase()) {
                action = "Oats are rich in fiber, zinc, and magnesium. Add oatmeal to your breakfast, or see our HOW section for details.";
                btn_text = "Learn More";
            }
            else if (t === ('Increase your Oat consumption').toLowerCase()) {
                action = "Oats are rich in fiber, zinc, and magnesium and promote cardiovascular and digestive health.";
                btn_text = "Learn More";
            }
            else if (t === ('Eat more nuts').toLowerCase()) {
                action = "Eat more nuts, including cashews, almonds, and pecans, all linked to improved cardiometabolic health.";
                btn_text = "Learn More";
            }
            else if (t === ('Add more Nuts to your diet').toLowerCase()) {
                action = "Key to good detoxification, add more cruciferous veggies to your diet, including kale, broccoli, watercress, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Eat more cruciferous vegetables').toLowerCase()) {
                action = "Key to good detoxification, add more cruciferous veggies to your diet, including kale, broccoli, watercress, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Eat more Cruciferous Veggies').toLowerCase()) {
                action = "Key to good detoxification, add more cruciferous veggies to your diet, including kale, broccoli, watercress, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Black Tea').toLowerCase()) {
                action = "Drink black tea regularly for its cardiovascular benefit - avoid with meals if you are low in iron though.";
                btn_text = "Learn More";
            }
            else if (t === ('Drink more Black Tea').toLowerCase()) {
                action = "Drink black tea regularly for its cardiovascular benefit - avoid with meals if you are low in iron though.";
                btn_text = "Learn More";
            }
            else if (t === ('Eat more Fruits').toLowerCase()) {
                action = "FDA recommends 4 servings of fruit per day, choose berries high in antioxidants.";
                btn_text = "Learn More";
            }
            else if (t === ('Eat more Fruit').toLowerCase()) {
                action = "FDA recommends 4 servings of fruit per day, choose berries high in antioxidants.";
                btn_text = "Learn More";
            }
            else if (t === ('Decrease the amount of sucrose, and products containing sucrose, that you eat.').toLowerCase()) {
                action = "Just like lactose, not everyone can digest the sugar sucrose. See our HOW section for details.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut back on Sucrose').toLowerCase()) {
                action = "Just like lactose, not everyone can digest the sugar sucrose. Sucrose is made of glucose and fructose and is often the primary component of most granulated sugars used in baking.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your dietary exposure to Tartrazine').toLowerCase()) {
                action = "Avoid foods and other products with tartrazine, aka FD&C yellow #5. Some people have severe reactions to it.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Tartrazine in your diet').toLowerCase()) {
                action = "Avoid foods and other products with tartrazine, aka FD&C yellow #5. Some people have severe reactions to it.";
                btn_text = "Learn More";
            }
            else if (t === ('Heterocyclic Amines, decrease dietary intake').toLowerCase()) {
                action = "Reduce your intake of heavily cooked meats - these are known to contain heterocyclic amines, known carcinogens.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut back on dietary Heterocyclic Amines').toLowerCase()) {
                action = "Reduce your intake of heavily cooked meats - these are known to contain heterocyclic amines, known carcinogens.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid foods containing sodium glutamates or MSG').toLowerCase()) {
                action = "Avoid foods with MSG, monosodium glutamate. Some people have adverse reactions, and it is often disguised in ingredients.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid MSG').toLowerCase()) {
                action = "Avoid foods with MSG, monosodium glutamate. Some people have adverse reactions, and it is often disguised in ingredients.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce dietary exposure to Nitrate/Nitrites').toLowerCase()) {
                action = "Avoid foods with nitrates/nitrites, often used to cure meats. See our HOW section for details.";
                btn_text = "Learn More";
            }
            else if (t === ('Cut down on Nitrates/Nitrites').toLowerCase()) {
                action = "Avoid foods with nitrates/nitrites, often used to cure meats. See our HOW section for details.";
                btn_text = "Learn More";
            }
            else if (t === ('Quick acting carbohydrates').toLowerCase()) {
                action = "For short term emergencies, make sure to have quick acting carbs ready if your blood sugar falls too low.";
                btn_text = "Learn More";
            }
            else if (t === ('Have Quick acting Carbs ready').toLowerCase()) {
                action = "For short term emergencies, make sure to have quick acting carbs ready if your blood sugar falls too low.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce food packaging').toLowerCase()) {
                action = "Most food packaging has bisphenol A or phthalates, both known hormone disruptors. Avoid the plastics ubiquitous in packaging.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce or eliminate Food Packaging').toLowerCase()) {
                action = "Most food packaging has bisphenol A or phthalates, both known hormone disruptors. Avoid the plastics ubiquitous in packaging.";
                btn_text = "Learn More";
            }
            else if (t === ('Apply Coal Tar topically').toLowerCase()) {
                action = "Coal tar shampoo is used to treat dandruff and other scaly, itchy skin conditions, such as psoriasis and seborrheic dermatitis. Begin applying coal tar, topically or as a shampoo (1-2%), twice daily to affected areas";
                btn_text = "Learn More";
            }
            else if (t === ('Apply Capsaicin cream').toLowerCase()) {
                action = "Capsacin cream has been shown to be helpful for chronic soft tissue pain, back pain, and psoriasis.  Apply Capsaicin cream to affected areas to reduce pain and itching, 2-3 times per day.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your exposure to Lead').toLowerCase()) {
                action = "Identify and limit your lead exposure; common sources are water and old paint.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your exposure to Methylmercury').toLowerCase()) {
                action = "Identify and limit your exposure to methylmercury; the most common source is contaminated fish.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your exposure to PCBs (Polychlorinated Biphenyls)').toLowerCase()) {
                action = "Identify and reduce your exposure to PCBs (Polychlorinated Biphenyls); fish is the most common non-workplace source.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your exposure to DDT').toLowerCase()) {
                action = "Identify and reduce your exposure to DDT; the most common sources include meat, poultry, dairy products, and fish.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your exposure to PCP (Pentachlorophenol)').toLowerCase()) {
                action = "Identify and reduce your exposure to PCP (Pentachlorophenol); the most common is treated lumber.";
                btn_text = "Learn More";
            }
            else if (t === ('Consider cutting Acetaminophen dose').toLowerCase()) {
                action = "You may need to consider limiting or eliminating your acetaminophen dose; chronic or high dose can be very toxic.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your exposure to Carmoisine').toLowerCase()) {
                action = "Avoid / decrease intake of carmoisine, a commonly used red synthetic food/beverage dye.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Arsenic exposure').toLowerCase()) {
                action = "Identify and limit your exposure to arsenic; it can be in drinking water, as well as foods such as meat, poultry and rice.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid exposure to Cadmium').toLowerCase()) {
                action = "Identify and eliminate your exposure to cadmium; sources include cigarette smoke and foods grown in cadmium rich soils.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid exposure to Benzene').toLowerCase()) {
                action = "Identify and limit your exposure to benzene; sources include solvents, tobacco smoke, dry cleaning.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Chloroform exposure').toLowerCase()) {
                action = "Identify and limit your exposure to chloroform; chlorinated drinking water is the most common source.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid exposure to Vinyl Chloride').toLowerCase()) {
                action = "Identify and reduce your exposure to vinyl chloride; occupational exposure and water contamination are possible sources.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid exposure to Trichloroethylene').toLowerCase()) {
                action = "Identify and reduce your exposure to trichloroethylene; solvents, degreasers, and contaminated water are possible sources.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid exposure to Dieldrin').toLowerCase()) {
                action = "Identify and reduce your exposure to dieldrin; although banned, soils may still be contaminated with this insecticide.";
                btn_text = "Learn More";
            }
            else if (t === ('Reduce your exposure to Asbestos').toLowerCase()) {
                action = "Identify and eliminate your asbestos exposure; aside from occupational exposure, check insulation and roofing materials.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Hexavalent Chromium exposure').toLowerCase()) {
                action = "Identify and reduce hexavalent chromium exposure; check occupational (stainless steel, chrome, etc.) exposure and cigarettes.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid exposure to Tetrachloroethylene').toLowerCase()) {
                action = "Identify and avoid carbon tetrachloride; most exposure is occupational, though it may occur via drinking/shower water.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Carbon Tetrachloride exposure').toLowerCase()) {
                action = "Identify and avoid carbon tetrachloride; most exposure is occupational, though it may occur via drinking/shower water.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid PAH (Polycyclic Aromatic Hydrocarbon) exposure').toLowerCase()) {
                action = "Identify and avoid PAH (polycyclic aromatic hydrocarbon) exposure; grilling, burning, cigarette smoke are possible sources.";
                btn_text = "Learn More";
            }
            else if (t === ('Begin using a HEPA filter').toLowerCase()) {
                action = "HEPA filters remove a variety of air toxins, including VOCs and allergens.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid exposure to Cis-1,2-dichloroethane').toLowerCase()) {
                action = "Identify and avoid sources of cis-1,2-dichloroethane; occupational exposure includes plastic manufacture, photography, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid exposure to Radon').toLowerCase()) {
                action = "Identify and avoid exposure to radon; occupational exposure includes mining and water plant operation.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid exposure to Indoor Allergens').toLowerCase()) {
                action = "Find and avoid your indoor allergens; this may include obvious sources, e.g. pets, as well as molds, cockroaches, and rodents.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Bisphenol A').toLowerCase()) {
                action = "Find and avoid bisphenol A (BPA); a ubiquitous plasticizer, it is in most plastics, water bottles, can liners, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid exposure to Hexachlorobenzene').toLowerCase()) {
                action = "Identify and eliminate exposure to heaxachlorobenzene; fish from contaminated waters is a more common non-occupational source.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Di-isobutyl Phthalate').toLowerCase()) {
                action = "Identify and avoid di-isobutyl (DiBP) phthalate; food spices, nail polish, and cosmetics are all sources.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid DDE exposure').toLowerCase()) {
                action = "Identify and avoid DDE exposure; foods, particularly animal products and fish are potential sources.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Chlordane exposure').toLowerCase()) {
                action = "Identify and avoid chlordane; though banned, it persists in treated soils as well as from termite treatment.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid PFOS (Perfluorooctane sulfonic acid)').toLowerCase()) {
                action = "Identify and avoid sources of PFOS (Perfluorooctane sulfonic acid); it is primarily found in stain-resistant applications.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Heptachlor exposure').toLowerCase()) {
                action = "Identify and avoid heptachlor; sources include contaminated foods, termite, and fire ant treatments.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Benzylbutyl Phthalate (BzBP)').toLowerCase()) {
                action = "Identify and avoid sources of benzylbutyl phthalate (BzBP); this includes foods (spices, eggs), PVC, stain resistant, etc.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Organophosphate Insecticides').toLowerCase()) {
                action = "Identify and avoid Organophosphate insectides; this is most effectively done by eating an organic diet.";
                btn_text = "Learn More";
            }
            else if (t === ('Avoid Xylene').toLowerCase()) {
                action = "Identify and avoid sources of xylene; found in solvents, paints, gasoline, as well as tobacco smoke.";
                btn_text = "Learn More";
            }
            else {}
            if(btn_text === 'Buy Now' || btn_text === 'Shop Now'){
              var check_box = '<div class="add-to-my-plan-section"><input type="checkbox" id="laravel-my-plan-cb-' + rec_id + '" name="laravel-my-plan-cb" class="laravel-my-plan-cb" value="' + rec_id + '" rec-id="' + rec_id + '" in-my-plan="0" rec-name="' + rec_name + '" rec-url="' + l + '"></div>';
            }else{
              var check_box = '';
            }
            return '<div class="recomendation-buy-section"><a href="' + l + '" target="_blank"><button class="buy-button">' + btn_text + '</button></a>' + check_box + '</div>'
    
  }

  function listRecommendations(recommendations,rec_urls) {
    var obj = recommendations;
    var recom_body_html='';
    $.each(obj, function(key,val) {
      // console.log("dosage",val.dose_amount);
      if(val.dose_amount !== '' && val.dose_amount !== 'none found'){ var dose_amount = parseFloat(val.dose_amount).toFixed(2);}else{var dose_amount = '';}
      recom_body_html = recom_body_html + '<div class="recommendation-items ' + val.category.replace(/ /g,"_") + '" rec-id="' + val.recommendation_id + '">';
      recom_body_html = recom_body_html + '<div class="recommendation-name">' + val.label + '<span class="how-to" rec-id="' + val.recommendation_id + '">?</span><label style="display:none" id="how-to-' + val.recommendation_id + '">' + val.how + '</label></div>';
      recom_body_html = recom_body_html + '<div class="recommendation-dosage">' + dose_amount + ' ' + val.dose_units + ' ' + val.dose_interval + '</div>';
      recom_body_html = recom_body_html + getRecommendationUrl(val.label,rec_urls,val.recommendation_id);
      recom_body_html = recom_body_html + '</div>';
    });
    $('.laravel-recommendation-list').html(recom_body_html);
    addToMyPlan();
    howToClick();
    
  }

  function rec_list_html(list){
    var list_html = '';
    var my_plan_rec_ids = [];
    $.each(list, function (i, recom) {
      if(recom.recommendation_id != '0'){
        if( my_plan_rec_ids.includes(recom.recommendation_id) != true){
          my_plan_rec_ids.push(recom.recommendation_id);
          $('#laravel-my-plan-cb-' + recom.recommendation_id).attr("in-my-plan",recom.id);
        }else{
          recom.is_selected_my_plan = '0';
        }
        
      }
      
      
      if(recom.is_selected_my_plan == '1'){
        $('#laravel-my-plan-cb-' + recom.recommendation_id).addClass("selected-checkbox");
        var check_box_id="laravel-my-plan-cb-recrow-"+ recom.recommendation_id;
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
        
        if(intake_time.indexOf("AM") !== -1){ 
          intake_time_radio = intake_time_radio + '<label>AM<input type="checkbox" class="laravel-intake-time-class" id="laravel-am" name="laravel-intake-time-' + recom.id + '[]" value="AM" dataid="' + recom.id + '" checked></label>';
    
        }else{
          intake_time_radio = intake_time_radio + '<label>AM<input type="checkbox" class="laravel-intake-time-class" id="laravel-am" name="laravel-intake-time-' + recom.id + '[]" value="AM" dataid="' + recom.id + '"></label>';
        }
        if(intake_time.indexOf("Mid") !== -1){ 
          intake_time_radio = intake_time_radio + '<label>Mid-Day<input type="checkbox" class="laravel-intake-time-class" id="laravel-midday" name="laravel-intake-time-' + recom.id + '[]" value="Mid" dataid="' + recom.id + '" checked></label>';
    
        }else{
          intake_time_radio = intake_time_radio + '<label>Mid-Day<input type="checkbox" class="laravel-intake-time-class" id="laravel-midday" name="laravel-intake-time-' + recom.id + '[]" value="Mid" dataid="' + recom.id + '"></label>';
        }
        if(intake_time.indexOf("PM") !== -1){ 
          intake_time_radio = intake_time_radio + '<label>PM<input type="checkbox" class="laravel-intake-time-class" id="laravel-pm" name="laravel-intake-time-' + recom.id + '[]" value="PM" dataid="' + recom.id + '" checked></label>';
    
        }else{
          intake_time_radio = intake_time_radio + '<label>PM<input type="checkbox" class="laravel-intake-time-class" id="laravel-pm" name="laravel-intake-time-' + recom.id + '[]" value="PM" dataid="' + recom.id + '"></label>';
        }
    
        var intake_type_radio = '';
        var intake_type = recom.intake_type;
        if(intake_type == null){
          intake_type = '';
        }
        if(intake_type.indexOf("with_food") !== -1){ 
          intake_type_radio = intake_type_radio + '<label><input type="checkbox" class="laravel-intake-type-class" id="laravel-with_food" name="laravel-intake-type-' + recom.id + '[]" value="with_food" dataid="' + recom.id + '" checked>With Food</label>';
    
        }else{
          intake_type_radio = intake_type_radio + '<label><input type="checkbox" class="laravel-intake-type-class" id="laravel-with_food" name="laravel-intake-type-' + recom.id + '[]" value="with_food" dataid="' + recom.id + '">With Food</label>';
        }
        if(intake_type.indexOf("without_food") !== -1){ 
          intake_type_radio = intake_type_radio + '<label><input type="checkbox" class="laravel-intake-type-class" id="laravel-without_food" name="laravel-intake-type-' + recom.id + '[]" value="without_food" dataid="' + recom.id + '" checked>Without Food</label>';
    
        }else{
          intake_type_radio = intake_type_radio + '<label><input type="checkbox" class="laravel-intake-type-class" id="laravel-without_food" name="laravel-intake-type-' + recom.id + '[]" value="without_food" dataid="' + recom.id + '">Without Food</label>';
        }
        var my_plan_buy_button = '<div class="laravel-my-plan-buy"><a href="' + recom.url + '"><button class="laravel-my-plan-buy-button">Buy Now</button></a></div>';
        var intake_dosage_html = '<div class="laravel-dosage-items">';
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
              if(dosage_item[1] === 'null'){
                dosage_item[1] = '';
              }
              if(intake_time.indexOf("AM") !== -1){ 
                intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-am" name="laravel-intake-time-' + recom.id + '[]" value="AM" dataid="' + recom.id + '" checked>AM</label></div>';
                intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-div"><label><input type="text" class="laravel-am-dosage-input" id="laravel-am-dosage-input-' + recom.id +'" name="laravel-am-dosage-input-' + recom.id +'" value="' + dosage_item[1] + '"></label></div>';
                intake_am_dosage_html = intake_am_dosage_html + '</div>';
              }else{
                intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-am" name="laravel-intake-time-' + recom.id + '[]" value="AM" dataid="' + recom.id + '">AM</label></div>';
                intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-div"><label class="laravel-hide-m"><input type="text" class="laravel-am-dosage-input" id="laravel-am-dosage-input-' + recom.id +'" name="laravel-am-dosage-input-' + recom.id +'" value="" readonly></label></div>';
                intake_am_dosage_html = intake_am_dosage_html + '</div>';
    
              }
    
            }
            if(value.indexOf("Midday_dosage") !== -1){
    
              var dosage_item = value.split(":"); 
              if(dosage_item[1] === 'null'){
                dosage_item[1] = '';
              }
              if(intake_time.indexOf("Mid") !== -1){ 
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-midday" name="laravel-intake-time-' + recom.id + '[]" value="Mid" dataid="' + recom.id + '" checked>Mid-Day</label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-div"><label><input type="text" class="laravel-md-dosage-input" id="laravel-md-dosage-input-' + recom.id +'" name="laravel-md-dosage-input-' + recom.id +'" value="' + dosage_item[1] + '"></label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '</div>';
              }else{
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-midday" name="laravel-intake-time-' + recom.id + '[]" value="Mid" dataid="' + recom.id + '">Mid-Day</label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-div"><label class="laravel-hide-m"><input type="text" class="laravel-md-dosage-input" id="laravel-md-dosage-input-' + recom.id +'" name="laravel-md-dosage-input-' + recom.id +'" value="" readonly></label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '</div>';
    
              }
    
            }
            if(value.indexOf("PM_dosage") !== -1){
    
              var dosage_item = value.split(":"); 
              if(dosage_item[1] === 'null'){
                dosage_item[1] = '';
              }
              if(intake_time.indexOf("PM") !== -1){ 
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-pm" name="laravel-intake-time-' + recom.id + '[]" value="PM" dataid="' + recom.id + '" checked>PM</label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-div"><label><input type="text" class="laravel-pm-dosage-input" id="laravel-pm-dosage-input-' + recom.id +'" name="laravel-pm-dosage-input-' + recom.id +'" value="' + dosage_item[1] + '"></label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '</div>';
              }else{
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-pm" name="laravel-intake-time-' + recom.id + '[]" value="PM" dataid="' + recom.id + '">PM</label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-div"><label class="laravel-hide-m"><input type="text" class="laravel-pm-dosage-input" id="laravel-pm-dosage-input-' + recom.id +'" name="laravel-pm-dosage-input-' + recom.id +'" value="" readonly></label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '</div>';
    
              }
    
            }
          });
    
    
        }else{
          if(intake_time.indexOf("AM") !== -1){ 
    
            intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
            intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-am" name="laravel-intake-time-' + recom.id + '[]" value="AM" dataid="' + recom.id + '" checked>AM</label></div>';
            intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-div"><label><input type="text" class="laravel-am-dosage-input" id="laravel-am-dosage-input-' + recom.id +'" name="laravel-am-dosage-input-' + recom.id +'" value=""></label></div>';
            intake_am_dosage_html = intake_am_dosage_html + '</div>';
          }else{
    
            intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
            intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-am" name="laravel-intake-time-' + recom.id + '[]" value="AM" dataid="' + recom.id + '"></label></div>';
            intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-div"><label class="laravel-hide-m"><input type="text" class="laravel-am-dosage-input" id="laravel-am-dosage-input-' + recom.id +'" name="laravel-am-dosage-input-' + recom.id +'" value="" readonly>AM</label></div>';
            intake_am_dosage_html = intake_am_dosage_html + '</div>';
          }
          if(intake_time.indexOf("Mid") !== -1){ 
    
            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-midday" name="laravel-intake-time-' + recom.id + '[]" value="Mid" dataid="' + recom.id + '" checked>Mid-Day</label></div>';
            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-div"><label><input type="text" class="laravel-md-dosage-input" id="laravel-md-dosage-input-' + recom.id +'" name="laravel-md-dosage-input-' + recom.id +'" value=""></label></div>';
            intake_mid_dosage_html = intake_mid_dosage_html + '</div>';
          }else{
    
            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-midday" name="laravel-intake-time-' + recom.id + '[]" value="Mid" dataid="' + recom.id + '">Mid-Day</label></div>';
            intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-div"><label class="laravel-hide-m"><input type="text" class="laravel-md-dosage-input" id="laravel-md-dosage-input-' + recom.id +'" name="laravel-md-dosage-input-' + recom.id +'" value="" readonly></label></div>';
            intake_mid_dosage_html = intake_mid_dosage_html + '</div>';
          }
          if(intake_time.indexOf("PM") !== -1){ 
    
            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-pm" name="laravel-intake-time-' + recom.id + '[]" value="PM" dataid="' + recom.id + '" checked>PM</label></div>';
            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-div"><label><input type="text" class="laravel-pm-dosage-input" id="laravel-pm-dosage-input-' + recom.id +'" name="laravel-pm-dosage-input-' + recom.id +'" value=""></label></div>';
            intake_pm_dosage_html = intake_pm_dosage_html + '</div>';
          }else{
    
            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-pm" name="laravel-intake-time-' + recom.id + '[]" value="PM" dataid="' + recom.id + '">PM</label></div>';
            intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-div"><label class="laravel-hide-m"><input type="text" class="laravel-pm-dosage-input" id="laravel-pm-dosage-input-' + recom.id +'" name="laravel-pm-dosage-input-' + recom.id +'" value="" readonly></label></div>';
            intake_pm_dosage_html = intake_pm_dosage_html + '</div>';
          }
    
        }
             if(intake_am_dosage_html === ''){
               if(intake_time.indexOf("AM") !== -1){ 
    
                 intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                 intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-am" name="laravel-intake-time-' + recom.id + '[]" value="AM" dataid="' + recom.id + '" checked>AM</label></div>';
                 intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-div"><label><input type="text" class="laravel-am-dosage-input" id="laravel-am-dosage-input-' + recom.id +'" name="laravel-am-dosage-input-' + recom.id +'" value=""></label></div>';
                 intake_am_dosage_html = intake_am_dosage_html + '</div>';
               }else{
    
                 intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                 intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-am" name="laravel-intake-time-' + recom.id + '[]" value="AM" dataid="' + recom.id + '"></label>AM</div>';
                 intake_am_dosage_html = intake_am_dosage_html + '<div class="laravel-intake-dosage-div"><label class="laravel-hide-m"><input type="text" class="laravel-am-dosage-input" id="laravel-am-dosage-input-' + recom.id +'" name="laravel-am-dosage-input-' + recom.id +'" value="" readonly></label></div>';
                 intake_am_dosage_html = intake_am_dosage_html + '</div>';
               }
             }
            if(intake_mid_dosage_html === ''){
              if(intake_time.indexOf("Mid") !== -1){ 
    
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-midday" name="laravel-intake-time-' + recom.id + '[]" value="Mid" dataid="' + recom.id + '" checked>Mid-Day</label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-div"><label><input type="text" class="laravel-md-dosage-input" id="laravel-md-dosage-input-' + recom.id +'" name="laravel-md-dosage-input-' + recom.id +'" value=""></label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '</div>';
              }else{
    
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-midday" name="laravel-intake-time-' + recom.id + '[]" value="Mid" dataid="' + recom.id + '">Mid-Day</label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '<div class="laravel-intake-dosage-div"><label class="laravel-hide-m"><input type="text" class="laravel-md-dosage-input" id="laravel-md-dosage-input-' + recom.id +'" name="laravel-md-dosage-input-' + recom.id +'" value="" readonly></label></div>';
                intake_mid_dosage_html = intake_mid_dosage_html + '</div>';
              } 
            }
            if(intake_pm_dosage_html === ''){
              if(intake_time.indexOf("PM") !== -1){ 
    
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-pm" name="laravel-intake-time-' + recom.id + '[]" value="PM" dataid="' + recom.id + '" checked>Pm</label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-div"><label><input type="text" class="laravel-pm-dosage-input" id="laravel-pm-dosage-input-' + recom.id +'" name="laravel-pm-dosage-input-' + recom.id +'" value=""></label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '</div>';
              }else{
    
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-time-outer">';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-time-div"><label><input type="checkbox" class="laravel-intake-time-class" id="laravel-pm" name="laravel-intake-time-' + recom.id + '[]" value="PM" dataid="' + recom.id + '">PM</label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '<div class="laravel-intake-dosage-div"><label class="laravel-hide-m"><input type="text" class="laravel-pm-dosage-input" id="laravel-pm-dosage-input-' + recom.id +'" name="laravel-pm-dosage-input-' + recom.id +'" value="" readonly></label></div>';
                intake_pm_dosage_html = intake_pm_dosage_html + '</div>';
              }
    
            }
    
        intake_dosage_html = intake_am_dosage_html + intake_mid_dosage_html + intake_pm_dosage_html;
    
       
    
        var buy_button_display = '';
        var update_dosage_html = '<div class="laravel-update-dosage"><button id="laravel-update-dosage-button-' + recom.id + '" class="laravel-update-dosage-button" recid="' + recom.id + '" rec-customid="' + recom.id + '" rec-name="' + recom.recommendation_name + '" rec-url="' + recom.url + '">Update recommendation</button></div>';
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
          var buy_button_display = '<div class="laravel-nutritional-supplementation-buy-button"><div class="laravel-nutritional-supplementation-product-name"><a href="' + recom.url + '">' + product_name + '</a></div>' + my_plan_buy_button + '</div>';
        }else{
          
          if(recom.recommendation_id != null && recom.recommendation_id !== 'null' && recom.recommendation_id !== '' && recom.recommendation_id !== '0' && recom.recommendation_id !== 0){

            var old_href = $('a[rel="' + recom.recommendation_id + '"]').attr('href');
            var buy_button_display = '<div class="laravel-nutritional-supplementation-buy-button"><div class="laravel-nutritional-supplementation-product-name"></div><div class="laravel-my-plan-buy"><div class="laravel-my-plan-buy"><a href="' + old_href + '"><button class="laravel-my-plan-buy-button">Shop Now</button></a></div></div></div>';
          }else{
            
            var buy_button_display = '<div class="laravel-nutritional-supplementation-buy-button"><div class="laravel-nutritional-supplementation-product-name"></div><div class="laravel-my-plan-buy"><div class="laravel-my-plan-buy"></div></div></div>';
          }
          
    
        }
         var notes_html = '<div class="laravel-update-notes"><label>Notes<textarea  class="laravel-notes-input" id="laravel-notes-input-' + recom.id +'" name="laravel-notes-input-' + recom.id +'">' + note + '</textarea ></label></div>';
        list_html = list_html + '<div class="laravel-nutritional-supplementation-item">';
        list_html = list_html + '<div class="laravel-nutritional-supplementation-timing-outer"><div class="laravel-nutritional-supplementation-item-name"><a href="' + url + '" target="_BLANK">' + recom.recommendation_name + '</a><span><a class="laravel-remove-recoomendation" recid="' + recom.id + '" recommendationid="' + recom.recommendation_id + '">Remove?</a></span></div>' + buy_button_display + '</div>';
        list_html = list_html + '<div class="laravel-item-left-section">' + intake_dosage_html;
        list_html = list_html + '<div class="laravel-nutritional-supplementation-type-outer">' + update_dosage_html ;
        list_html = list_html + '<div class="laravel-intake-type-outer">' + intake_type_radio + '</div></div></div>';
        list_html = list_html + '<div class="laravel-item-right-section">' + notes_html + '</div>';
        list_html = list_html + '</div>';
    
      }else{
        var check_box_id="laravel-my-plan-cb-recrow-"+ recom.recommendation_id;
        $("#" + check_box_id).removeClass('selected-checkbox');
        $("#" + check_box_id).attr('title', 'Move to My Plan');
        $("#" + check_box_id).removeAttr('new-id');
        $("#" + check_box_id).attr('new-id', recom.id);
      }
    });
    localStorage.setItem("my_plan_rec_ids", my_plan_rec_ids);
    return list_html;
  
  }
  function clickMyPlan() {
    $('.laravel-update-dosage-button').each(function(){
      $(this).click(function() {                              
          
         var rec_id = $(this).attr('rec-customid');
          updateMyPlan(rec_id);
        });
      });
    $('.laravel-intake-type-class,.laravel-intake-time-class').each(function(){
      $(this).click(function() {                              
          
         var rec_id = $(this).attr('dataid');
          updateMyPlan(rec_id);
        });
      });
    $('.laravel-remove-recoomendation').each(function(){
      $(this).click(function() {                              
         
         var rec_id = $(this).attr('recid');
        if($(this).attr('recommendationid') === '0'){
          $('#laravel_remove_recommendation_confirm_modal').find('.laravel_cancel_remove_recom').removeAttr('data-id');
          $('#laravel_remove_recommendation_confirm_modal').find('.laravel_confirm_remove_recom').removeAttr('data-id');
          $('#laravel_remove_recommendation_confirm_modal').find('.laravel_cancel_remove_recom').attr('data-id',rec_id);
          $('#laravel_remove_recommendation_confirm_modal').find('.laravel_confirm_remove_recom').attr('data-id',rec_id);
          $('#laravel_remove_recommendation_confirm_modal').modal('show');
          
        }else{
          removeMyPlan(rec_id);
        }
          
        });
      });
    
    
  }
  function howToClick() {
    $('.how-to').each(function(){
       $(this).click(function(){
         var rec_id = $(this).attr('rec-id');
         if($('#how-to-' + rec_id).text() === ''){
             $('#laravel_why_cont').addClass('empty-text');
         }else{
           $('#laravel_why_cont').text($('#how-to-' + rec_id).text());
         }
         
         $('#laravel_top_why_content').modal('show');
         });
      });
    
  }
  function addToMyPlan() {     
       $('input[name="laravel-my-plan-cb"]').each(function(){
          $(this).on('change', function() {
           
            var rec_id = $(this).attr('rec-id');
            var new_id = $(this).attr('in-my-plan');
            var rec_name = $(this).attr('rec-name');
            var rec_url = $(this).attr('rec-url');
            var my_plan_data = {};
            var recom_data ={};
            var data ={};
           
            if($(this).hasClass("selected-checkbox")){
                  data.is_selected_my_plan = false; 
                  $(this).removeClass("selected-checkbox")
              }
            else{
                  data.is_selected_my_plan = true;
                  $(this).addClass("selected-checkbox")
            }
            if(new_id ==='0'){
                  recom_data.rec_name = $(this).attr('rec-name');
                  recom_data.custom_url = $(this).attr('rec-url');
                  recom_data.rec_id = rec_id;
                  recom_data.method = 'save';
                  data.recommendation_id = rec_id;	                                  
                  data.AM_dosage = '';  
                  data.PM_dosage = '';  
                  data.Midday_dosage = '';  
                  data.note = '';
                  data.intake_time = '';  
                  data.intake_type = ''; 
                  data.rec_name = rec_name;
                  data.custom_url = rec_url;
                  // console.log(recom_data);
                  sendRequest('post', 'https://api.iqyouhealth.com/api/v1/recommendations', recom_data, '');
               }
            else{                     
              data.id = new_id;  
              data.rec_name = rec_name;
              data.custom_url = rec_url;
            }                                  
          sendRequest('post', 'https://api.iqyouhealth.com/api/v1/my-plan', data, '');
           $(".laravel-recommendation-outer").removeClass('loading-blue');
        });
      });
  }
  function removeMyPlan(rec_id) {     
      var rec_name = $('#laravel-update-dosage-button-' + rec_id).attr('rec-name');
      var rec_url = $('#laravel-update-dosage-button-' + rec_id).attr('rec-url');
      data= {};
      data.id = rec_id;	                                  
      data.is_selected_my_plan = false;   
      data.rec_name = rec_name;
      data.rec_url = rec_url;
      sendRequest('post', 'https://api.iqyouhealth.com/api/v1/my-plan', data, getMyPlan);
        
  }
  function updateMyPlan(rec_id) {
          
          var note = $('#laravel-notes-input-' + rec_id).val();
          var rec_name = $('#laravel-update-dosage-button-' + rec_id).attr('rec-name');
          var rec_url = $('#laravel-update-dosage-button-' + rec_id).attr('rec-url');
          var check_name = 'laravel-intake-time-' + rec_id + '[]';
          
          var intake_time = '';
       
          $('[name="' + check_name + '"]').each( function (){
            
              if($(this).prop('checked') == true){
                if(intake_time === '' ){
                    intake_time = $(this).val();
                }else{
                    intake_time = intake_time + ',' +  $(this).val();
                }
                  
              }
          });
          var check_name = 'laravel-intake-type-' + rec_id + '[]';
          var intake_type = '';
          $('[name="' + check_name + '"]').each( function (){
              if($(this).prop('checked') == true){
                if(intake_type === '' ){
                  intake_type = $(this).val();
                }else{
                    intake_type = intake_type + ',' +  $(this).val();
                }

              }
          });
            if(intake_time.indexOf("AM") === -1){ 
                 // data.AM_dosage = ''; 
                 $('#laravel-am-dosage-input-' + rec_id).val('null');            
              }
               if(intake_time.indexOf("Mid") === -1){  
                  // data.Midday_dosage = ''; 
                  $('#laravel-md-dosage-input-' + rec_id).val('null');
              }
              if(intake_time.indexOf("PM") === -1){ 
                // data.PM_dosage = ''; 
                $('#laravel-pm-dosage-input-' + rec_id).val('null');
              }
          var AM_dosage = $('#laravel-am-dosage-input-' + rec_id).val();
          var PM_dosage = $('#laravel-pm-dosage-input-' + rec_id).val();
          var Midday_dosage = $('#laravel-md-dosage-input-' + rec_id).val();
          var data = {}; 
          data.id = rec_id;	                                  
          data.AM_dosage = AM_dosage;  
          data.PM_dosage = PM_dosage;  
          data.Midday_dosage = Midday_dosage;  
          data.note = note;
          data.intake_time = intake_time;  
          data.intake_type = intake_type; 
          data.rec_name = rec_name;
          data.rec_url = rec_url;
          sendRequest('post', 'https://api.iqyouhealth.com/api/v1/my-plan', data, getMyPlan);
  }
  function sendRequest(method, url, content, callback) {
   $(".laravel-recommendation-outer").addClass('loading-blue');
    if(url == 'https://api.iqyouhealth.com/api/v1/lab-results'){
      url = url + '?user_key=vga575451';
    }else{
      url = url + '?user_key='+window.cus_id;
    }
    
    //url = url + '?user_key=vga575162';
    var request = {
      	"Content-Type":"application/json",
      	"accept": "application/json",
      	crossDomain: true,
      	"api-key": "c6701296-5027-4076-b80c-d64a77c2ddc7"
    };
    $.ajax({
        type: method,
        url: url,
        data: JSON.stringify( content ),
      	dataType: "json",
      	contentType: "application/json",
      	headers: request
     }).done(function(data, status, xhr) {
      if(method === 'post'){
        toastr.success('The work has been saved.', 'Saved');
      }
      
        if (callback) callback(xhr.status, data, request);
     }).fail(function(xhr, status) {
      if(method === 'post'){
        toastr.error('There is some error in server please try again later...', 'Error');
      }
		
        if (callback) callback(xhr.status, xhr.response, request);
      
      
     });
    
	}
  function getCompletion() {
      var url = 'https://api.iqyouhealth.com/api/v1/completion';
      sendRequest('get', url, '', getCompletionCallback) ;
    }
  function getCompletionCallback(status, data, request){}
  function getHealthQuestions() {
    $('#api-questionnaire-body').addClass('loading-blue');
      var url = 'https://api.iqyouhealth.com/api/v1/health_questions';
      sendRequest('get', url, '', getHealthQuestionsCallback) ;
    }
  function getHealthQuestionsCallback(status, data, request){
   displayPercentage(data);
   displayMainPage(data.main.get_lane.page,data.input.get_inputs);
    //displayQuestions(data.input.get_inputs);
    loadingCompletion();
  }
  function getFamilyHistory() {
    $('#api-questionnaire-body').addClass('loading-blue');
      var url = 'https://api.iqyouhealth.com/api/v1/health_questions_family_history';
      sendRequest('get', url, '', getFamilyHistoryCallback) ;
    }
  function getFamilyHistoryCallback(status, data, request){
    displayPercentage(data);
    displayQuestions(data.input.get_inputs);
    loadingCompletion();
  }
  function getFoodDiet() {
    $('#api-questionnaire-body').addClass('loading-blue');
      var url = 'https://api.iqyouhealth.com/api/v1/health_questions_food_diet';
      sendRequest('get', url, '', getFoodDietCallback) ;
    }
  function getFoodDietCallback(status, data, request){
    displayPercentage(data);
    displayQuestions(data.input.get_inputs);
    loadingCompletion();
  }
  function getLifestyle() {
    $('#api-questionnaire-body').addClass('loading-blue');
      var url = 'https://api.iqyouhealth.com/api/v1/health_questions_lifestyle';
      sendRequest('get', url, '', getLifestyleCallback) ;
    }
  function getLifestyleCallback(status, data, request){
    displayPercentage(data);
    displayQuestions(data.input.get_inputs);
    loadingCompletion();
  }
  function getMedication() {
    $('#api-questionnaire-body').addClass('loading-blue');
      var url = 'https://api.iqyouhealth.com/api/v1/medications';
      sendRequest('get', url, '', getMedicationCallback) ;
    }
  function getMedicationCallback(status, data, request){
    //console.log("medications",data);
    displayPercentage(data);
    storeMedications(data.intakeform_data.get_inputs.input);
    loadingCompletion();
  }
  function getSmartQuestions() {
    $('#api-questionnaire-body').addClass('loading-blue');
      var url = 'https://api.iqyouhealth.com/api/v1/health_questions_smart_questions';
      sendRequest('get', url, '', getSmartQuestionsCallback) ;
    }
  function getSmartQuestionsCallback(status, data, request){
    displayPercentage(data);
    displaySmartQuestions(data.input.get_smartquestions);
    displaySmartQuestionsUsedInput(data.input_answered);
    loadingCompletion();
  }

  function getRecommendations() {
    $('#api-questionnaire-body').addClass('loading-blue');
      var url = 'https://api.iqyouhealth.com/api/v1/recommendations';
      sendRequest('get', url, '', getRecommendationsCallback) ;
    }
  function getRecommendationsCallback(status, data, request){
    //console.log(data);
    listRecommendations(data.allrecs,data.rec_urls);
    listRecommendationFilters(data.allcats);
    getMyPlan();
    //loadingCompletion();
  }
  function getMyPlan() {
    $('#api-questionnaire-body').addClass('loading-blue');
      var url = 'https://api.iqyouhealth.com/api/v1/my-plan';
      sendRequest('get', url, '', getMyPlanCallback) ;
    }
  function getMyPlanCallback(status, data, request){
    //console.log(data);
    var all_list_html ='';
    var list = data.list;
    var user_list = data.user_list;
    all_list_html = all_list_html + rec_list_html(list);
    all_list_html = all_list_html + rec_list_html(user_list);
    $('.laravel-my-plan-list').html(all_list_html);
    clickMyPlan();
    $(".laravel-recommendation-outer").removeClass('loading-blue');
    //loadingCompletion();
  }
  $('.api-health_box').click(function(){
    
    var data_lane = $(this).attr('data-lane');
    localStorage.setItem('upcoming_lane', data_lane);
    checkUnAnsweredHealthBox();
//     if(!($(this).hasClass('active'))){
//          if(!($(this).hasClass('loaded'))){
//        		changeActiveLane($(this).attr('data-lane'));
//          }else{
//          displayLoadedLane($(this).attr('data-lane'));
          
//          }
//   }
    hidePrevNextButton();
  });
  $('#api-laravel-next').click(function(){   
    var data_lane = $('.api-health_box.active').next('.api-health_box').attr('data-lane');
    localStorage.setItem('upcoming_lane', data_lane);
    checkUnAnswered();   
  });
  $('#api-laravel-prev').click(function(){
    var data_lane = $('.api-health_box.active').prev('.api-health_box').attr('data-lane');
    localStorage.setItem('upcoming_lane', data_lane);
    checkUnAnswered();   
  });
  $('#api-laravel-save').click(function(){   
    var data_lane = $('.api-health_box.active').attr('data-lane');
    localStorage.setItem('upcoming_lane', data_lane);
    $('#api-questionnaire-body').addClass('loading-blue');
    	checkUnAnswered();
  	$('#api-questionnaire-body').removeClass('loading-blue');
  });
  $('#api-laravel-update').click(function(){
    $('#api-questionnaire-body').addClass('loading-blue');
    	updateRadioInput();
  	$('#api-questionnaire-body').removeClass('loading-blue');
  });
   $('.laravel_ok').click(function(){
     hidePopUp($(this).closest('.modal').attr('id'));
    
  });
  $('.laravel_goback-finish').click(function(){
     hidePopUp($(this).closest('.modal').attr('id'));
    
    
  });
  
  
   $('.laravel_proceed-anyway').click(function(){
     hidePopUp($(this).closest('.modal').attr('id'));
     updateRadioInput();    
     var data_lane = localStorage.getItem('upcoming_lane');
     checkLaneLoading(data_lane);
  });
   $('.laravel_goback-finish_navigation').click(function(){
     hidePopUp($(this).closest('.modal').attr('id'));
    
    
  });
  
  
   $('.laravel_proceed-anyway_navigation').click(function(){
     hidePopUp($(this).closest('.modal').attr('id'));  
     var data_lane = localStorage.getItem('upcoming_lane');
     checkLaneLoading(data_lane);
     toastr.error('The work has not been saved.', 'Unsaved');
  });
  $('#health_qstns_modal_laravel').on('show.bs.modal', function (e) {
    checkPreviousUnAnswered() ;
    var data_lane ='201';
    if(!($('.api-health_box[data-lane="' + data_lane + '"]').hasClass('loaded'))){
              changeActiveLane($('.api-health_box[data-lane="' + data_lane + '"]').attr('data-lane'));
           }else{
           displayLoadedLane($('.api-health_box[data-lane="' + data_lane + '"]').attr('data-lane'));
             
           }
     //getHealthQuestions();
    //getFamilyHistory();
	});

  function lab_result_callback(status,arr,summery)
  {

    // var arr = JSON.parse(arr);
    var data='';
    for (var key in arr['inputordinalvalues']){
      var res_id = key;
	var value = arr['inputordinalvalues'][key];
	data+='<div class="' + key + '-section result-item">';
      var temp_data ='';
    var ordinal_value = value['ordinal_value'];
    
    var value = arr['allinputdata'][key];
    var public_desc = '';
    for (var key3 in value){
        if(key3 =='name')
        {
            var title_data = value[key3];
            public_desc = value['descr_public'];
            // data+=" - " + key3 + ": " + value3+' ';
          
            //data+='<div rel="' + key + '" class="lessdata lessdata-' + key + ' title">' + value3 + '</div><div rel="' + key + '" class="moredata moredata-' + key + ' title" style="display:none">' + value3 + '</div>';                                                                 
        }
    }
    // data+=" " + 'ordinal_value' + ": " + value2+' ';
      temp_data+='<div rel="' + key + '" class="lessdata lessdata-' + key + '" id="lessdata-' + key + '" >Show more</div><div rel="' + key + '" class="moredata moredata-' + key + '" id="moredata-' + key + '" style="display:none">Show less</div>';
           if(arr['referenceranges'][res_id]){
                 var reference_range = arr['referenceranges'][res_id]['1'];
                if(ordinal_value < reference_range['lessthan'] &&  ordinal_value > reference_range['greaterthan']){
                  temp_data+='<div class="result-colour-outer" lessthan-reference=' + reference_range['lessthan'] + ' greaterthan-refrence=' + reference_range['greaterthan'] + '><span class="green"></span></div>';
                  temp_reference_text = "Your test results currently have a value inside normal references range for your age and/or gender (" + reference_range['lessthan'] + "- " + reference_range['greaterthan'];
                  temp_flag_text = "which is why this test has been flagged green.";
                }else{
                  temp_data+='<div class="result-colour-outer"><span class="red"></span></div>';
                 temp_reference_text = "Your test results currently have a value out of normal references range for your age and/or gender (" + reference_range['lessthan'] + "- " + reference_range['greaterthan'];
                temp_flag_text = "which is why this test has been flagged red.";
                }
             
           }
        
      var allgroupinputs = arr['allgroupinputs'] ;
          var nodeinputs = arr['nodeinputs'];
          var group_id = false;
          for (let prop in nodeinputs) {
            for (let i = 0; i < nodeinputs[prop].length; i++) {
            if (nodeinputs[prop][i]['inputid'] && nodeinputs[prop][i]['inputid'] === res_id) {
              if(temp_reference_text !== ''){
                temp_reference_text = temp_reference_text +  nodeinputs[prop][i]['units'] + ") " + temp_flag_text;
              }
                temp_data+='<div class="unit-value-outer"><span> ' + nodeinputs[prop][i]['units'] + ' </span></div>'; 
                var title_data ='<div rel="' + key + '" class="lessdata lessdata-' + key + ' title">' + nodeinputs[prop][i]['label'] + '</div><div rel="' + key + '" class="moredata moredata-' + key + ' title" style="display:none">' + nodeinputs[prop][i]['label']  + '</div>';
                group_id = true;
                break;
              }
              if(group_id){
                break;
              }
            }          
          }     
      if(!group_id){
        for (let prop in allgroupinputs) {
        if (Array.isArray(allgroupinputs[prop]) && allgroupinputs[prop].includes(res_id)) {
          group_id = prop;         
          for (let prop in nodeinputs) {
            for (let i = 0; i < nodeinputs[prop].length; i++) {
            if (nodeinputs[prop][i]['groupid'] && nodeinputs[prop][i]['groupid'] === group_id) {
              if(temp_reference_text !== ''){
                temp_reference_text = temp_reference_text +  nodeinputs[prop][i]['units'] + ") which is why this test has been flagged red."
              }
              temp_data+='<div class="unit-value-outer"><span> ' + nodeinputs[prop][i]['units'] + ' </span></div>'; 
              var title_data ='<div rel="' + key + '" class="lessdata lessdata-' + key + ' title">' + nodeinputs[prop][i]['label'] + '</div><div rel="' + key + '" class="moredata moredata-' + key + ' title" style="display:none">' + nodeinputs[prop][i]['label']  + '</div>';
              group_id = true;
              break;
            }
            }
           
          }
          
          break;
        }
      }
      }
      
      if(!group_id){
        temp_data+='<div class="unit-value-outer"><span> - </span></div>'; 
      }
      
temp_data+='<div class="ordinal-value-outer"><input type="text" name="ordinal-value-' + key + '" value="' + ordinal_value + '"></div>';

    for (var key2 in value){
        var value2 = value[key2];
        for (var key3 in value2){
            var value3 = value2[key3];
            // data+=key3 + ": " + value3+'  ';
        }
    }
    data+= title_data + temp_data;
    data+='<div class="values values-' + key + '" style="display:none">' + public_desc + '<br><br>' + temp_reference_text + '</div></div>';
  }
    
    $('.values-cbc').html(data);


      var data='';
    // for (let i = 0; i < arr['allproducts'].length; i++ ){
      for(let key in arr['nodeinputs']){

      if(arr['nodeinputs'][key][0]['type'] === 'input'){
        var res_id = arr['nodeinputs'][key][0]['inputid'];
      }else{
        var g_id = arr['nodeinputs'][key][0]['groupid'];
       
        var res_id = arr['allgroupinputs'][g_id][0];
      }
   
      
	data+='<div class="' + res_id + '-section result-item">';   
    var temp_data = '';    
    var value = arr['allinputdata'][res_id];
         
    var public_desc = '';
    for (var key3 in value){
        if(key3 =='name')
        {
           // console.log(value[key3]);
            var value3 = value[key3];
            public_desc = value['descr_prof'];
            // data+=" - " + key3 + ": " + value3+' ';
            //data+='<div rel="' + res_id + '" class="lessdata lessdata-' + res_id + ' title">' + value3 + '</div><div rel="' + res_id + '" class="moredata moredata-' + res_id + ' title" style="display:none"> </div>';                                                                 
        }
    }

      temp_data+='<div rel="' + res_id + '" class="lessdata lessdata-' + res_id + '" id="lessdata-' + res_id + '" >Show more</div><div rel="' + res_id + '" class="moredata moredata-' + res_id + '" id="moredata-' + res_id + '" style="display:none">Show less</div>';
      if(arr['referenceranges'][res_id]){
                 var reference_range = arr['referenceranges'][res_id]['1'];

                  //temp_data+='<div class="result-colour-outer" lessthan-reference=' + reference_range['lessthan'] + ' greaterthan-refrence=' + reference_range['greaterthan'] + '><span class="green"></span></div>';
                  temp_reference_text = "Your test results references range for your age and/or gender (" + reference_range['lessthan'] + "- " + reference_range['greaterthan'];
           
             
           }
        
        temp_data+='<div class="result-colour-outer"><span class="np-result">N/A</span></div>';
         
      var allgroupinputs = arr['allgroupinputs'] ;
          var nodeinputs = arr['nodeinputs'];
          var group_id = false;
          for (let prop in nodeinputs) {
            for (let i = 0; i < nodeinputs[prop].length; i++) {
            if (nodeinputs[prop][i]['inputid'] && nodeinputs[prop][i]['inputid'] === res_id) {
                  if(temp_reference_text !== ''){
                    temp_reference_text = temp_reference_text +  nodeinputs[prop][i]['units'] + ") ";
                  }
                var title_data ='<div rel="' + key + '" class="lessdata lessdata-' + key + ' title">' + nodeinputs[prop][i]['label'] + '</div><div rel="' + key + '" class="moredata moredata-' + key + ' title" style="display:none">' + nodeinputs[prop][i]['label']  + '</div>';
                temp_data+='<div class="unit-value-outer"><span> ' + nodeinputs[prop][i]['units'] + ' </span></div>'; 
                group_id = true;
                break;
              }
              if(group_id){
                break;
              }
            }          
          }     
      if(!group_id){
        for (let prop in allgroupinputs) {
        if (Array.isArray(allgroupinputs[prop]) && allgroupinputs[prop].includes(res_id)) {
          group_id = prop;         
          for (let prop in nodeinputs) {
            for (let i = 0; i < nodeinputs[prop].length; i++) {
            if (nodeinputs[prop][i]['groupid'] && nodeinputs[prop][i]['groupid'] === group_id) {
            if(temp_reference_text !== ''){
                    temp_reference_text = temp_reference_text +  nodeinputs[prop][i]['units'] + ") ";
                  }
              temp_data+='<div class="unit-value-outer"><span> ' + nodeinputs[prop][i]['units'] + ' </span></div>'; 
              var title_data ='<div rel="' + key + '" class="lessdata lessdata-' + key + ' title">' + nodeinputs[prop][i]['label'] + '</div><div rel="' + key + '" class="moredata moredata-' + key + ' title" style="display:none">' + nodeinputs[prop][i]['label']  + '</div>';
              group_id = true;
              break;
            }
            }
           
          }
          
          break;
        }
      }
      }
      
      if(!group_id){
        temp_data+='<div class="unit-value-outer"><span> Missing</span></div>'; 
      }
      temp_data+='<div class="ordinal-value-outer"><input type="text" name="ordinal-value-' + res_id + '" value=""></div>'; 
        data+= title_data + temp_data;

    data+='<div class="values values-' + key + '" style="display:none">' + public_desc + '<br><br>' + temp_reference_text + '</div></div>';
  }
 $('.values-allresults').html(data);


    var data='';
    for (let i = 0; i < arr['lab_recomm']['reclabs'].length; i++ ){
      
      var res_id = arr['lab_recomm']['reclabs'][i];
      
	data+='<div class="' + res_id + '-section result-item">';   
    var value = arr['allproductdata'][res_id];
    var public_desc = '';
    for (var key3 in value[0]){
        if(key3 =='title')
        {
            var value3 = value[0][key3];
            public_desc = value[0]['body'];
            // data+=" - " + key3 + ": " + value3+' ';
            data+='<div rel="' + res_id + '" class="lessdata lessdata-' + res_id + ' title">' + value3 + '</div><div rel="' + res_id + '" class="moredata moredata-' + res_id + ' title" style="display:none">' + value3 + '</div>';                                                                 
        }
    }
    // data+=" " + 'ordinal_value' + ": " + value2+' ';
      data+='<div rel="' + res_id + '" class="lessdata lessdata-' + res_id + '" id="lessdata-' + res_id + '" >Show more</div><div rel="' + res_id + '" class="moredata moredata-' + res_id + '" id="moredata-' + res_id + '" style="display:none">Show less</div>';
      var public_desc_obj = JSON.parse(JSON.stringify(public_desc));
      //console.log(public_desc_obj);
      var public_desc = public_desc_obj.split('value":"');

      if(public_desc[1] ){
        public_desc = public_desc[1].split('","');
      }else{
        public_desc = '';
      }
    data+='<div class="values values-' + key + '" style="display:none">' + public_desc[0] + '</div></div>';
  }
   
    $('.recommended-labs-results-laravel').html(data);


     var data='';
    var womens_comprejhesnive_panel = arr['node'][0];
    data+= '<div class="' + womens_comprejhesnive_panel.nid + '-section result-item">';
    data+='<div rel="' + womens_comprejhesnive_panel.nid + '" class="lessdata lessdata-' + womens_comprejhesnive_panel.nid + ' title">' + womens_comprejhesnive_panel.title + '</div><div rel="' + womens_comprejhesnive_panel.nid + '" class="moredata moredata-' + womens_comprejhesnive_panel.nid + ' title" style="display:none">' + womens_comprejhesnive_panel.body + '</div>';
    data+='<div rel="' + womens_comprejhesnive_panel.nid + '" class="lessdata lessdata-' + womens_comprejhesnive_panel.nid + '" id="lessdata-' + womens_comprejhesnive_panel.nid + '" >Show more</div><div rel="' + womens_comprejhesnive_panel.nid + '" class="moredata moredata-' + womens_comprejhesnive_panel.nid + '" id="moredata-' + womens_comprejhesnive_panel.nid + '" style="display:none">Show less</div>';
   data+= '</div>';  
  for (let i = 0; i < arr['allproducts'].length; i++ ){
      
      var res_id = arr['allproducts'][i];
      var main_res_id = res_id;
     var nodeinputs = arr['nodeinputs'][res_id]; 
      
	data+='<div class="' + res_id + '-section result-item">';   
    var value = arr['allproductdata'][res_id];
    var public_desc = '';
    for (var key3 in value[0]){
        if(key3 =='title')
        {
            var value3 = value[0][key3];
            public_desc = value[0]['body'];
            // data+=" - " + key3 + ": " + value3+' ';
            data+='<div rel="' + res_id + '" class="lessdata lessdata-' + res_id + ' title">' + value3 + '</div><div rel="' + res_id + '" class="moredata moredata-' + res_id + ' title" style="display:none">' + value3 + '</div>';                                                                 
        }
    }
    // data+=" " + 'ordinal_value' + ": " + value2+' ';
      data+='<div rel="' + res_id + '" class="lessdata lessdata-' + res_id + '" id="lessdata-' + res_id + '" >Show more</div><div rel="' + res_id + '" class="moredata moredata-' + res_id + '" id="moredata-' + res_id + '" style="display:none">Show less</div>';
      var public_desc_obj = JSON.parse(JSON.stringify(public_desc));
      //console.log(public_desc_obj);
      var public_desc = public_desc_obj.split('value":"');

      if(public_desc[1] ){
        public_desc = public_desc[1].split('","');
      }else{
        public_desc = '';
      }
      var inner_main='';
      
      if(typeof(nodeinputs) != "undefined"){
        
      
       for (let i = 0; i < nodeinputs.length; i++) {
         var temp_data_inner = '';
         var inner_public_desc = '';
            if (nodeinputs[i].hasOwnProperty("inputid")) {
                
                inner_main += '<div class="' + nodeinputs[i]['inputid'] + '-section result-item">';
                var input_id = nodeinputs[i]['inputid'];
                var curent_id = input_id;
                var title_data ='<div rel="' + input_id + '" class="lessdata lessdata-' + input_id + ' title">' + nodeinputs[i]['label'] + '</div><div rel="' + input_id + '" class="moredata moredata-' + input_id + ' title" style="display:none">' + nodeinputs[i]['label']  + '</div>';
                 title_data+='<div rel="' + res_id + '" class="lessdata lessdata-' + res_id + '" id="lessdata-' + res_id + '" >Show more</div><div rel="' + res_id + '" class="moredata moredata-' + res_id + '" id="moredata-' + res_id + '" style="display:none">Show less</div>';
                if ((typeof(current_data) != "undefined") && (current_data.hasOwnProperty("descr_public"))) {
                  var inner_public_desc = current_data.descr_public;
                }
                    //console.log(current_data.descr_public); 
                 // var inner_public_desc = current_data.descr_public;
                  // for (var key3 in value){
                  //     if(key3 =='descr_prof')
                  //     {
                  //         //console.log(value[key3]);

                  //         inner_public_desc = value['descr_prof'];
                  //         var public_desc_obj = JSON.parse(JSON.stringify(inner_public_desc));
                  //         //console.log(public_desc_obj);
                  //         var public_desc = public_desc_obj.split('value":"');
                    
                  //         if(public_desc[1] ){
                  //           inner_public_desc = public_desc[1].split('","');
                  //         }else{
                  //           inner_public_desc = '';
                  //         }
                  //         temp_data_inner+='<div class="values values-' + key + '" style="display:none">' + inner_public_desc + '</div></div>';                         
                  //     }
                  // }
               temp_data_inner+='<div class="values values-' + key + '" style="display:none">' + inner_public_desc + '</div>';
              }else{
              var group_id = nodeinputs[i]['groupid'];
              var curent_id = group_id;
              var curent_id = arr['allgroupinputs'][curent_id][0];
               var current_data= arr['allinputdata'][curent_id];
                  inner_main += '<div class="' + group_id + '-section result-item">';     
                 var title_data ='<div rel="' + input_id + '" class="lessdata lessdata-' + input_id + ' title">' + nodeinputs[i]['label'] + '</div><div rel="' + input_id + '" class="moredata moredata-' + input_id + ' title" style="display:none">' + nodeinputs[i]['label']  + '</div>';
                 title_data+='<div rel="' + res_id + '" class="lessdata lessdata-' + res_id + '" id="lessdata-' + res_id + '" >Show more</div><div rel="' + res_id + '" class="moredata moredata-' + res_id + '" id="moredata-' + res_id + '" style="display:none">Show less</div>';
              if ((typeof(current_data) != "undefined") && (current_data.hasOwnProperty("descr_public"))) {
                var inner_public_desc = current_data.descr_public;
              }
              
                    // for (var key3 in value){
                    //     if(key3 =='descr_prof')
                    //     {
                    //         //console.log(value[key3]);

                    //         inner_public_desc = value['descr_prof'];
                    //           var public_desc_obj = JSON.parse(JSON.stringify(inner_public_desc));
                    //         //console.log(public_desc_obj);
                    //         var public_desc = public_desc_obj.split('value":"');
                      
                    //         if(public_desc[1] ){
                    //           inner_public_desc = public_desc[1].split('","');
                    //         }else{
                    //           inner_public_desc = '';
                    //         }
                    //         temp_data_inner+='<div class="values values-' + key + '" style="display:none">' + inner_public_desc + '</div></div>';                        
                    //     }
                    // }
              temp_data_inner+='<div class="values values-' + key + '" style="display:none">' + inner_public_desc + '</div>';
              }
           //console.log("NNNNNNNNNNNNNNNNNNNNNNN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",temp_data_inner); 
         inner_main += title_data + temp_data_inner + '</div>';
            }  
        
        data+='<div class="values values-' + main_res_id + '" style="display:none">' + inner_main + '</div></div>';
      }else{
        data+='<div class="values values-' + main_res_id + '" style="display:none">' + public_desc + '</div></div>';
      }
      
      
  }
   
    $('.recommended-labs-results-laravel-womens-panel').html(data);

    
    clickLabResults();

  }

  function lab_result()
    {
      // var data = {
      //   'api_key' :'c6701296-5027-4076-b80c-d64a77c2ddc7',
      // }; 
      //var url1='https://laravel.iqyouhealth.com/api/v1/lab-results';
      //var url1= 'https://api.iqyouhealth.com/api/v1/lab-results';
      var url1= 'https://api.iqyouhealth.com/api/v1/lab-results';
      sendRequest('get', url1,'', lab_result_callback); 
    }

  $( document ).ready(function() {
    lab_result();
    getRecommendations();
       $('.recomendation-button').click(function(){
         getRecommendations();
         $('.laravel-recommendation-body').show();
         $('.recommendation-filter-tab-button').show();
         $('.laravel-my-plan-body').hide();
         $('.my-plan-button').removeClass('active-tab');
         $(this).addClass('active-tab');
         
        });
      $('.my-plan-button').click(function(){
        getMyPlan();
         $('.laravel-recommendation-body').hide();
         $('.recommendation-filter-tab-button').hide();
         $('.laravel-my-plan-body').show();
        $('.recomendation-button').removeClass('active-tab');
        $(this).addClass('active-tab');
        
        });
      $('.laravel-add-new-recommendation').click(function() {
          $('#laravel_new_recommendation_modal').modal('show');
       });
    $('.laravel_save_new_recom').click(function() { 
          $('#laravel_new_recommendation_modal').modal('hide');
          data = {};
          data.rec_name = $('#laravel_new_recom_name').val()
        $('#laravel_new_recom_name').val('');
        sendRequest('post', 'https://api.iqyouhealth.com/api/v1/my-plan', data, getMyPlan);
           
       });
      $('.laravel_confirm_remove_recom').click(function() {
      $('#laravel_remove_recommendation_confirm_modal').modal('hide'); 
        var rec_id = $(this).attr('data-id');                               
          removeMyPlan(rec_id);                          	
      });
    $('.laravel_cancel_remove_recom').click(function() {
      $('#laravel_remove_recommendation_confirm_modal').modal('hide');                         	
      });
  });
});
jQuery(document).ready(function($) {
  $('.platinum-popup-link').click(function(e) {
    sessionStorage.setItem('openPlatinum', 'true');
    window.location.href = '/pages/signup-landing';
  });

  $('.platinum_buy_btn').click(function(e) {
    sessionStorage.setItem('openPlatinum', 'true');
  });
  $('.gold_buy_btn').click(function(e) {
    sessionStorage.setItem('openGold', 'true');
  });
  if (window.location.pathname === '/pages/signup-landing' && sessionStorage.getItem('openPlatinum')) {
    console.log("openPlatinum!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    $('.health_plan.health_plan_new.monthly .buy_btn').trigger('click');
    sessionStorage.removeItem('openPlatinum');
  }else if (window.location.pathname === '/pages/signup-landing' && sessionStorage.getItem('openGold')) {
    $('.health_plan.health_plan_new.annually .buy_btn').trigger('click');
    sessionStorage.removeItem('openGold');
  }
  // $(window).load(function ()  {
  //         if($('#create_customer').find('.note.form-error').length){
  //           console.log("Test Length");
  //          $('#membership_popup').modal('show');
            

  //         }

  // });

  // Add a click event handler to the element with the specified class
$('.go-to-membership').click(function() {
  // Find the element with the specified ID and scroll to it
  $('#health_box_plan').get(0).scrollIntoView({ behavior: 'smooth' });
});

});

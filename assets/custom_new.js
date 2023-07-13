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

    if (window.location.pathname === '/pages/sales-landing-private' && sessionStorage.getItem('openPlatinum')) {
    console.log("openPlatinum!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    $('.health_plan.health_plan_new.monthly .buy_btn').trigger('click');
    sessionStorage.removeItem('openPlatinum');
  }else if (window.location.pathname === '/pages/sales-landing-private' && sessionStorage.getItem('openGold')) {
    $('.health_plan.health_plan_new.annually .buy_btn').trigger('click');
    sessionStorage.removeItem('openGold');
  }
$('.go-to-membership').click(function() {
  $('#health_box_plan').get(0).scrollIntoView({ behavior: 'smooth' });
});

});

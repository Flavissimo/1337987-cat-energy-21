/* В работе
jQuery(document).ready(function() {
  $('.site-list__item').click(function() {
    $('.main-navigation__toggle').addClass('collapsed').attr('aria-expanded', 'false');
    $('.main-navigation').removeClass('collapse').removeClass('show').addClass('collapse');
  });

  var $navBar = $('.sticky-top');
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $navBar.addClass('border-b');
    } else {
      $navBar.removeClass('border-b');
    }
  });
});*/

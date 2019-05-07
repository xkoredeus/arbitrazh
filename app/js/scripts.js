$(function() {
  $('.portfolio__slider').owlCarousel({
      nav: true,
      loop: false,
      dots: false,
      margin: 20,
      rtl: true,
      navText: ["<img src='img/icon__arrow-prev.svg'>", "<img src='img/icon__arrow-next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        560 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1040 : {
            items: 3
        }
      }
	});
	// tabs
  $('.profile__tabs > div').on('click', function() {
    $('.profile__descr-item').removeClass('active');
    $('.profile__tabs > div').removeClass('active');
    $('.profile__descr-item[data-profile="' + $(this).attr('data-profile') + '"]').addClass('active');
    $(this).addClass('active');
  });
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
  $('#wrapper').fullpage({
    anchors: ['first-section', 'second-section', 'third-section', 'fourth-section', 'fifth-section', 'sixth-section'],
    navigation: true,
    navigationPosition: 'right',
    menu: '.nav'
  });
  $('.offer__mouse').on('click', function() {
    $("#wrapper").fullpage.moveTo($(this).index() + 1);
  });
});
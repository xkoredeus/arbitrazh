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
            items: 1,
            rtl: false,
        },
        430 : {
            items: 1,
            rtl: false,
        },
        560 : {
            items: 2,
            rtl: false,
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
    menu: '.nav',
    responsiveWidth: '1024'
  });
  //Кнопка скролла на вторую секцию
  $('.offer__mouse').on('click', function() {
    $("#wrapper").fullpage.moveTo($(this).index() + 1);
  });
  //Кнопка наверх
  $('.btn_top').hide();
  var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 500; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('.btn_top').fadeIn();
      else $('.btn_top').fadeOut();
    });
    $('.btn_top').click(function (e) { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      e.preventDefault();
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
});
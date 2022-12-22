$(function () {

  /*----- Tabs------- */
  $(document).on('click', '[data-toggle="tabs"]', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $target = $($this.attr('href'));
    $target.parent().children('.tab-block').removeClass('active');
    $this.parents('.tabs-menu').children('.tabs-item').removeClass('active');
    $this.parent().addClass('active');
    $target.addClass('active').find('.swiper-container')[0].swiper.update();
  });

  /*----end Tabs -------*/

  /*left mobile bar ----*/
  $('.left-toolbar-trigger').on('click', function (e) {
    e.preventDefault();

    $('.left-toolbar').toggleClass('active');
    $('body').toggleClass('toolbar-opened');

  });

  $('.left-toolbar-overlay').on('click', function (e) {
    e.preventDefault();
    $('.left-toolbar').toggleClass('active');
    $('body').toggleClass('toolbar-opened');
  });

  $('.left-toolbar__close').on('click', function (e) {
    e.preventDefault();
    $('.left-toolbar').toggleClass('active');
    $('body').toggleClass('toolbar-opened');
  });

  /**
   * Toggle trigger
   */
  (function () {

    var $toggle = $('.js-toggle');

    $toggle.on('click', function (e) {
      e.preventDefault();

      var $target;
      var $self = $(this);

      if ($self.data('target') == 'next') {
        $target = $self.next();
      } else if ($self.data('target') == 'parent') {
        $target = $self.parents('.dropdown:first');
      } else {
        $target = $($self.data('target'));
      }

      if ($('body').not('toggle-opened')) {
        $('body').addClass('toggle-opened');
        $target.find('.input-field:first').focus();
      }
      const el = $('.left-toolbar');
      console.log(el)
      $target.toggleClass('toggled');
      el[0].scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

    });

    $(document).on('click', '.toggle-opened', function (e) {
      if (!$(e.target).closest(".dropdown").length) {
        $('.toggled').removeClass('toggled');
        $(this).removeClass('toggle-opened');
      }
    });

  }());
})
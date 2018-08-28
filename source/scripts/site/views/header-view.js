var site = site || {};

el.core.utils.createNamespace(site, 'views');

site.views.Header = el.core.utils.class.extend(function(options){

  var globalDispatcher = el.core.events.globalDispatcher,
      event = site.events.event
  ;

  this.options = {};

  $.extend(this.options, options);

  this.name = 'HeaderView';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

}, el.core.events.EventsDispatcher);

site.views.Header.prototype.init = function(e) {

  var that = this;

  // console.log('init', this.id);

  this.$el = this.options.$el;
  this.$body = $('body');

  if(el.core.utils.environment.isMobile()){

    this.$el.find('.main-navbar-mobile').removeClass('hidden');

    // Remove Social Links from bottom & added to nav menu
    $('#npc2016 .share-section').appendTo( this.$el.find('.main-navigation__items') ).addClass('bg-dark');

    // Add functionality to Mobile Menu
    this.$el.find('.hamburguer-cont').on('click', $.proxy( function( event ){that.toggleMenu()} , this));
  }  

  return this;
}

site.views.Header.prototype.toggleMenu = function() {

  var target = this.$el.find('.main-navigation__items');

  if ( target.hasClass('opened') ) {

    this.$body.css({'overflow' : ''});

    target.find('span').css({'opacity' : 0});

    target.animate({'height' : 0 }, 300, 'linear', function (e){
      $(this).removeClass('opened')
            .siblings('.hamburguer-cont').children('.nav-icon').removeClass('open');

    });

  } else {

    this.$body.css({'overflow' : 'hidden'});

    var contentHeight = target.addClass('heightAuto').height();

    target.removeClass('heightAuto').animate({
        'height' : contentHeight
    }, 300, 'linear', function (e) {
      $(this).addClass('opened')
              .siblings('.hamburguer-cont').children('.nav-icon').addClass('open');
      target.find('span').css({'opacity' : 1});

    });

  }

}

site.views.Header.prototype.resize = function(size) {

}
var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.ServicesComponent = el.core.utils.class.extend(function(options){

	this.options = {

  };

  $.extend(this.options, options);

	this.name = 'ServicesComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$window = $(window)
  this.winW = -1;

  this.$el = this.options.$el;

  this.$items = this.$el.find('.servicesItems');
  this.slickActive = false;
	this._register();

}, el.core.events.EventsDispatcher);

site.components.ServicesComponent.prototype._register = function() {

  this.$el.data('componentId', this.id);
  site.managers.componentsManager.registerComponent(this);
}

site.components.ServicesComponent.prototype.destroy = function() {

	this.$el.remove();
}

site.components.ServicesComponent.prototype.resize = function(data) {

	var winW = data.winW,
			winH = data.winH;

  if(winW != this.winW) {

    this.winW = winW;

    if(this.winW < site.enums.breakpoint.NARROW.maxWidth) {
      this._makeSlick();
    }
    else {
      this._destroySlick();
    }
  }
}

site.components.ServicesComponent.prototype._makeSlick = function() {
  if(!this.slickActive){
    this.slickActive = true
    this.$items.slick({
      'arrows': true,
      'dots': false,
      'slidesToShow': 2,
      'infinite': false,
      'focusOnSelect': false,
			'prevArrow': '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<i aria-hidden></i></button>',
			'nextArrow': '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<i aria-hidden></i></button>',
    })
  }
}

site.components.ServicesComponent.prototype._destroySlick = function() {
  if(this.slickActive){
    this.slickActive = false
    this.$items.slick('unslick')
  }
}
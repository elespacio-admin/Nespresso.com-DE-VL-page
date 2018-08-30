var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.TabsComponent = el.core.utils.class.extend(function(options){

  this.options = {

  };

  $.extend(this.options, options);

  this.name = 'TabsComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;

  this.$tabs = this.$el.find('.choiceTab');
  this.$content = this.$el.find('.choiceContainer');
  this.$tabs.on('click', $.proxy(this.tabClickHandler, this));

  // this.titleSelector = this.$el.data('tabTitleSelector');
  // this.bodySelector = this.$el.data('tabBodySelector');

  this._register();

  // console.log(this.name, this.options);

  // if(el.core.utils.environment.isDesktop()){

  // 	// setup tabs
  // 	this.$el.addClass('desktop-func')
  // 					.find('.accordion-tab').remove();

  // 	this.$tabs = this.$el.find('.tab-menu__button');
  // 	this.$tabs.first().addClass('active');

  // 	this.$slickElem = this.$el.find('.bodies-list');

  // 	this.$slickElem.slick({
  // 	  infinite: true,
		//   arrows: true,
		//   speed: 0,
  // 		fade: true,
		//   prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><span class="arrow icon-arrow-left"></span></button>',
	 //    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><span class="arrow icon-arrow-right"></span></button>'
		// });

		// this.$slickElem.on('beforeChange', $.proxy(function(event, slick, currentSlide, nextSlide){

		//   $(this.$tabs[currentSlide]).removeClass('active');
		//   $(this.$tabs[nextSlide]).addClass('active');
		// }, this));

		// this.$tabs.click($.proxy(function(e){

		// 	var index = $(e.currentTarget).parents('.tab-menu__item').index();

		// 	this.$slickElem.slick('slickGoTo', index);
		// }, this));
  // }
  // else {

  // 	// setup accordion
  // 	this.$el.addClass('mobile-func')
  // 					.find('.tab-menu').remove();

  // 	this.$el.find('.accordion-tab').click(function(e){

		// 	$(e.currentTarget).toggleClass('selected').next().slideToggle({
		// 		'duration': 500,
		// 		'easing': 'easeOutExpo'
		// 	});
		// });
  // }


}, site.components.BaseComponent);


site.components.TabsComponent.prototype.tabClickHandler = function(e) {

  var $target = $(e.currentTarget);
  
  this.$content.toggleClass('is-visible', false);
  if($target.hasClass('original')) {
    this.$content.filter('.original').toggleClass('is-visible', true);
  }
  else {
    this.$content.filter('.vertuo').toggleClass('is-visible', true); 
  }
  
}

site.components.TabsComponent.prototype.destroy = function() {

  this.parent.destroy.call(this);
}
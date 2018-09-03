var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.ChoicesAlignComponent = el.core.utils.class.extend(function(options){

	this.options = {

  };

  $.extend(this.options, options);

	this.name = 'ChoicesAlignComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;

  this.$items = this.$el.find('.servicesItems');
  this.$window = $(window);
  this.active = false;
	this._register();

  this.$itemsOriginal = this.$el.find('.choiceContainer.original .choiceItem');
  this.$spacersOriginal = this.$el.find('.choiceContainer.original .choiceItemSpacer');

  this.$itemsVertuo = this.$el.find('.choiceContainer.vertuo .choiceItem');
  this.$spacersVertuo = this.$el.find('.choiceContainer.vertuo .choiceItemSpacer');

  var that = this;

  var winW = this.$window.width();

  if(winW >= site.enums.breakpoint.MEDIUM.maxWidth) {
	  setTimeout(function(){
	  	that.resize({'winW':winW});
	  }, 500);
  }

}, el.core.events.EventsDispatcher);

site.components.ChoicesAlignComponent.prototype._register = function() {

  this.$el.data('componentId', this.id);
  site.managers.componentsManager.registerComponent(this);
}

site.components.ChoicesAlignComponent.prototype.resize = function(data) {

	if(data.winW >= site.enums.breakpoint.MEDIUM.maxWidth) {
		// size elements
		this.active = true;
		this._reset();

		var $oTitle = null,
				$vTitle = null,
				$oBody = null,
				$vBody = null;

		for (var i = 0; i < this.$itemsOriginal.length - 1; i++) {
			$oItem = $(this.$itemsOriginal[i]);
			$vItem = $(this.$itemsVertuo[i]);

			var diff = $oItem.height() - $vItem.height();

			if(diff > 0) {
				$(this.$spacersVertuo[i]).height(Math.abs(diff));
			}
			else if(diff < 0) {
				$(this.$spacersOriginal[i]).height(Math.abs(diff));
			}
		}
	}
	else {
		if(this.active) {
			this.active = false;
			// reset
			this._reset();
		}
	}
}

site.components.ChoicesAlignComponent.prototype._reset = function() {
	this.$spacersOriginal.css('height', 0);
	this.$spacersVertuo.css('height', 0);
}

site.components.ChoicesAlignComponent.prototype.destroy = function() {

	this.$el.remove();

	// console.log('ChoicesAlignComponent.destroy', this.id);
}
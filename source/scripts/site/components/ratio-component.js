var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.RatioComponent = el.core.utils.class.extend(function(options){

  this.options = {

  };

  $.extend(this.options, options);

  this.name = 'RatioComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;

  this._register();

  // console.log(this.name, this.options);

  this.ratioTable = this.$el.data('ratioTable')//JSON.parse(this.$el.data('resizeTable'));

  if(!el.core.utils.environment.isMobile()) {

  	el.core.events.globalDispatcher.on(el.core.events.event.RESIZE, $.proxy(this._resizeHandler, this));
  }

}, site.components.BaseComponent);

site.components.RatioComponent.prototype._resizeHandler = function(e) {

	

	var i = 0,
			w = e.width,
			ratioData = this.ratioTable[0],
			styleWidth = this.$el.width()
	;

	while(w < this.ratioTable[i++]) {

		ratioData = this.ratioTable[i];
	}

	this.$el.height((styleWidth / ratioData.ratio));
}

site.components.RatioComponent.prototype.destroy = function() {

  this.parent.destroy.call(this);
}
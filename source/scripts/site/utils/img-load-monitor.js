var site = site || {};

el.core.utils.createNamespace(site, 'utils');

site.utils.IMGLoadMonitor = el.core.utils.class.extend(function(options){

	this.options = {
    'selector': '.monitor-js'
  };

  this.options = $.extend(this.options, options);

  this.name = 'IMGLoadMonitor';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

}, el.core.events.EventsDispatcher);

site.utils.IMGLoadMonitor.prototype.init = function() {

	var that = this;

	this.$images = $(this.options.selector);

	// console.log(this.id +' images:', this.$images);

	this.$images.each(function(i, img){

		if(!img.complete) {
			img.onload = function(){
				el.core.events.globalDispatcher.emit(site.events.event.IMAGE_LOADED, {});
			};
		}
		else {
			// image loaded before listerner attachment but possible after sections measurement were calulated
			el.core.events.globalDispatcher.emit(site.events.event.IMAGE_LOADED, {});
		}
	});
}

site.utils.IMGLoadMonitor.prototype.destroy = function() {

	this.$images.each(function(i, img){

		img.onload = null;
	});

	this.$images = null;

	this.parent.removeAllListeners.call(this);
}
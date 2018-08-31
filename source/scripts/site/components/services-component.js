var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.ServicesComponent = el.core.utils.class.extend(function(options){

	this.options = {

  };

  $.extend(this.options, options);

	this.name = 'ServicesComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;

	this._register();

}, el.core.events.EventsDispatcher);

site.components.ServicesComponent.prototype._register = function() {

  this.$el.data('componentId', this.id);

  site.managers.componentsManager.registerComponent(this);
}

site.components.ServicesComponent.prototype.destroy = function() {

	this.$el.remove();

	// console.log('ServicesComponent.destroy', this.id);
}

site.components.ServicesComponent.prototype.resize = function() {

}
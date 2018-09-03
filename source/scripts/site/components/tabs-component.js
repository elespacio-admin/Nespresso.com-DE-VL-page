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
  $(this.$tabs[0]).toggleClass('is-active', true);

  this._register();
}, site.components.BaseComponent);


site.components.TabsComponent.prototype.tabClickHandler = function(e) {

  var $target = $(e.currentTarget);

  if($target.hasClass('is-active')) {
    return;
  }

  this.$tabs.toggleClass('is-active');
  
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
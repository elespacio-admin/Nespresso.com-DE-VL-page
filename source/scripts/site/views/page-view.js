var site = site || {};

el.core.utils.createNamespace(site, 'views');

site.views.Page = el.core.utils.class.extend(function(options){

  this.options = {};
  this.components = [];

  $.extend(this.options, options);


  this.name = 'PageView';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;

  this.$body = $('body');
  this.$mainContent = this.$body.find('#main-content');
  this.$footer = this.$body.find('footer');

  el.core.events.globalDispatcher.on(el.core.events.event.RESIZE, $.proxy(this._resizeHandler, this));

}, el.core.events.EventsDispatcher);

site.views.Page.prototype.init = function(e) {

  this.initPage();

  return this;
}

site.views.Page.prototype.initPage = function() {

  var that = this;

  // create components
  this.$el.find('[data-component]').each(function(i, tag) {

    var $tag = $(tag)
    ;

    that.components.push(site.managers.componentsManager.createComponent($tag.data('component'), {
      '$el': $tag
    }));
  });

  el.core.managers.layoutManager.init();
  el.core.managers.layoutManager.resize();
}

site.views.Page.prototype.resize = function(size) {

  for (var i = 0; i < this.components.length; i++) {
    this.components[i].resize(size);
  };
}

site.views.Page.prototype._resizeHandler = function(e) {

  this.resize(e);
}
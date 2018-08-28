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

  el.core.managers.layoutManager.resize();

  // parse share links and make them open popups on desktop
  if(el.core.utils.environment.isDesktop()) {

    $('a.share-btn').each(function(){

      var $this = $(this);

      $this.on('click', function(e){

        e.preventDefault();

        var winWidth = 520;
        var winHeight = 320;
        var winLeft = (el.core.utils.environment.getScreenWidth() / 2) - (winWidth / 2);
        var winTop = (el.core.utils.environment.getScreenHeight() / 2) - (winHeight / 2);

        window.open($this.attr('href'), $this.data('title') ,'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
      });
    });
  }

}

site.views.Page.prototype.resize = function(size) {

  for (var i = 0; i < this.components.length; i++) {
    this.components[i].resize(size);
  };
}

site.views.Page.prototype._resizeHandler = function(e) {

  this.resize(e);
}
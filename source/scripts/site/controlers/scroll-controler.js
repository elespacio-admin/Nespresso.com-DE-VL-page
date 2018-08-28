var site = site || {};

el.core.utils.createNamespace(site, 'controlers')

site.controlers.ScrollControler = function(options){

  this.options = {

  };

  $.extend(this.options, options);

  this.name = 'ScrollControler';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;

  // console.log(this.name, this.options);

  el.core.events.globalDispatcher.on(site.events.event.sectionScrollTo.REQUEST, $.proxy(this._globalEventHendler, this));
};

site.controlers.ScrollControler.prototype._globalEventHendler = function(e) {

  switch(e.eventType) {

    case site.events.event.sectionScrollTo.REQUEST:

      var sm = el.core.managers.scrollManager,
          $el = $('.content #' + e.id),
          dest = $el.length ? sm.getScrollPosition() + $el.offset().top - this._getHeaderScrollShift(e.id) : 0,
          curr = el.core.managers.scrollManager.getScrollPosition(),
          distance = Math.abs(dest - curr)
      ;

      el.core.managers.scrollManager.scrollTo(dest, {
        'animate': e.animate === false ? false : true,
        'duration': Math.max(distance/2000, 0.25),
        'completeCallback': $.proxy(this._scrollToSectionCompleteHandler, this, {
          'target': e.target
        })
      });
    break;
  }
};

site.controlers.ScrollControler.prototype._getHeaderScrollShift = function(id) {

  var lm = el.core.managers.layoutManager,
      bp = site.enums.breakpoint,
      headerSize = $('header.main-header').height()
  ;

  return (lm.winSize.width < bp.HAMBURGER_MENU.maxWidth) || Modernizr.touch ? 0 : headerSize;
}

site.controlers.ScrollControler.prototype._scrollToSectionCompleteHandler = function(e) {

  el.core.events.globalDispatcher.emit(site.events.event.sectionScrollTo.COMPLETE, e);
}

site.controlers.ScrollControler.prototype.destroy = function() {

};
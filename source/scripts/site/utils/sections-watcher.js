/*
* @uses: el.core.managers.scrollManager
* @uses: el.core.events.globalDispatcher
* @uses: el.core.events.Event
* @uses: el.core.utils.AnimationFrame
* @uses: jQuery
* @uses: Modernizr
*/

var site = site || {};

el.core.utils.createNamespace(site, 'utils');

site.utils.SectionsWatcher = el.core.utils.class.extend(function(options){

  this.scrollManager = el.core.managers.scrollManager;
  this.globalDispatcher = el.core.events.globalDispatcher;
  this.coreEvent = el.core.events.event;
  this.AF = el.core.utils.AnimationFrame;

  this.options = {
    'sectionSelector': 'section',
    'onScreenActivation': 0.5
  };

  this.options = $.extend(this.options, options);

  this.name = 'SectionsWatcher';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this._scrollPosition = -1;
  this._$target = this.options.$target || $('.scroll-content');

}, el.core.events.EventsDispatcher);

site.utils.SectionsWatcher.prototype.init = function() {

  var that = this;

  this._targetsData = [];

  if(Modernizr && !Modernizr.touch) {

    this._frameId = -1;
    this._frameCheckProxy = $.proxy(this._frameCheck, this);
    this._animationFrame = new this.AF();
    this._frameId = this._animationFrame.request(this._frameCheckProxy);

    this._$target.find(this.options.sectionSelector).each(function(i){

      var $target = $(this);

      that._targetsData.push({
        '$target': $target,
        'top': 10000000, 
        'height': 1000,
        'id': $target.attr('id')
      });
    });
  }

  return this;
}

site.utils.SectionsWatcher.prototype._frameCheck = function(e) {

  this._check();

  this._frameId = this._animationFrame.request(this._frameCheckProxy);
}

site.utils.SectionsWatcher.prototype._check = function() {

  var newScrollPosition = this.scrollManager.getScrollPosition();

  if(newScrollPosition != this._scrollPosition || this._dirty) {

    this._dirty = false;
    this._scrollPosition = newScrollPosition;
    
    for (var i = 0; i < this._targetsData.length; i++) {
      var data = this._targetsData[i];

      if(this._scrollPosition + this._winH > data.top + this.options.onScreenActivation * this._winH &&
        this._scrollPosition + this._winH <  data.top + this.options.onScreenActivation * this._winH + data.height) {

        if( !data.entered ) {

          data.entered = true;

          el.core.events.globalDispatcher.emit(site.events.event.SECTION_IN_VIEW_CHANGE, {
            '$target': data.$target,
            'id': data.id
          });
        }
      }
      else if(data.entered) {

        data.entered = false;
      }
    }
  }
}

site.utils.SectionsWatcher.prototype.resize = function(options) {

  this._winH = options.height;

  var y = $('.marquee').height()
  ; 

  for (var i = 0; i < this._targetsData.length; i++) {

    this._targetsData[i].top = y;//this._targetsData[i].$target.position().top;
    this._targetsData[i].height = this._targetsData[i].$target.outerHeight();
    y += this._targetsData[i].height;
  };

  this._dirty = true;
}

site.utils.SectionsWatcher.prototype.destroy = function() {

  if(this._animationFrame) {
    this._animationFrame.cancel(this._frameId);
  }

  this._targetsData = null;
}
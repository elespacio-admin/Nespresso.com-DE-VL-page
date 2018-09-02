var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.OverlayComponent = el.core.utils.class.extend(function(options){

  this.options = {

  };

  $.extend(this.options, options);

  this.name = 'OverlayComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;

  this.overlayID = this.$el.data('id');
  this._isShown = false;

  this._register();

  el.core.events.globalDispatcher.on(site.events.event.OVERLAY_SHOW_REQUEST, $.proxy(this._onShowRequest, this));
  this.$el.find('button.close').on('click', $.proxy(this._onCloseClick, this));
  this.$el.on('click', $.proxy(this._onOuterClick, this));
//overlayWrapper
}, site.components.BaseComponent);

site.components.OverlayComponent.prototype._onShowRequest = function(data) {
  if(this.overlayID === data.id) {
    this._show();
  }
}

site.components.OverlayComponent.prototype._onOuterClick = function(e) {
  var $target = $(e.target);
  e.stopPropagation();
  if($target.hasClass('overlayWrapper') || $target.parents('.overlayWrapper').length) {
    return;
  }

  this._hide();
}
site.components.OverlayComponent.prototype._onCloseClick = function(e) {
  e.preventDefault();
  this._hide();
}

site.components.OverlayComponent.prototype._show = function() {
  if(!this._isShown) {
    this._isShown = true;
    this.$el.toggleClass('is-active', true).animate(
      {
        'opacity':1
      }, 
      {
        'duration':200,
        'specialEasing': {
          'opacity': 'easeOutExpo'
        }
      }
    );
}
}

site.components.OverlayComponent.prototype._hide = function() {
  if(this._isShown) {
    that = this;
    this._isShown = false;
    this.$el.toggleClass('is-active', true).animate(
      {
        'opacity':0
      }, 
      {
        'duration':100,
        // 'specialEasing': {
        //   'opacity': 'easeOutExpo'
        // },
        'complete': function() {
          that.$el.toggleClass('is-active', false);
        }
      }
    );
  }
}

site.components.OverlayComponent.prototype.resize = function(data) {

  if(this._isShown && data.winW <= site.enums.breakpoint.MEDIUM.maxWidth) {
    this._hide();
  }
}
site.components.OverlayComponent.prototype.destroy = function() {

  this.parent.destroy.call(this);
}
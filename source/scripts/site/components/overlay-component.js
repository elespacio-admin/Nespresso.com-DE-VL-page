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
  this._imagesInitiated = false;

  this._register();

  el.core.events.globalDispatcher.on(site.events.event.OVERLAY_SHOW_REQUEST, $.proxy(this._onShowRequest, this));
  this.$el.find('button.close').on('click', $.proxy(this._onCloseClick, this));
  this.$el.on('click', $.proxy(this._onOuterClick, this));

  if(!site.components.OverlayComponent.$targetEl) {
    site.components.OverlayComponent.$targetEl = $('<div class="nvertuo2018 nvertuo2018Overlay"></div>');
    $('body').append(site.components.OverlayComponent.$targetEl);
  }

  this.$parentEl = $(this.$el.parent());
  this.$targetEl = site.components.OverlayComponent.$targetEl

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

site.components.OverlayComponent.prototype._initialiseImages = function() {
  this._imagesInitiated = true;

  this.$el.find('.overlayItemGraphic').each(function(){
    var $target = $(this);
    $target.append('<img src="'+$target.data('image')+'">');
  });
}

site.components.OverlayComponent.prototype._show = function() {
  if(!this._isShown) {

    if(!this._imagesInitiated) {
      this._initialiseImages();
    }

    this._isShown = true;
    this.$targetEl.append(this.$el);
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
          that.$parentEl.append(that.$el);
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
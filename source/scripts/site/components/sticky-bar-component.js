var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.StickyBarComponent = el.core.utils.class.extend(function(options){

  this.options = {

  };

  $.extend(this.options, options);

  this.name = 'StickyBarComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;

  this._isShown = false;

  this._register();

  this.$window = $(window);
  this.$startEl = $(this.$el.data('startSelector'));
  this.$endEl = $(this.$el.data('endSelector'));
  this._startY = 10000;
  this._endY = -10000;
  this._canShow = false;
  this._isShown = false;
  this.height = this.$el.height();

  this.$window.on('scroll', $.proxy(this._onScroll, this));
}, site.components.BaseComponent);

site.components.StickyBarComponent.prototype.resize = function(data) {
  this.winW = data.winW,
  this.winH = data.winH;

  this._startY = this.$startEl.offset().top; 
  this._endY = this.$endEl.offset().top;
  this._canShow = this.winW >= site.enums.breakpoint.MEDIUM.maxWidth;
}

site.components.StickyBarComponent.prototype._onScroll = function(e) {
  
  if(this._canShow) {
    var scroll = this.$window.scrollTop();
    if(scroll + this.winH - this.height > this._startY && scroll + this.winH  < this._endY) {
      this._show();
    }
    else {
      this._hide(); 
    }
  }
}

site.components.StickyBarComponent.prototype._show = function() {
  if(!this._isShown) {
    this._isShown = true;
    this.$el.stop(true);
    this.$el.toggleClass('is-active', true).animate(
      {
        'opacity':1
      }, 
      {
        'duration':400,
        'specialEasing': {
          'opacity': 'easeOutCirc'
        }
      }
    );
  }
}

site.components.StickyBarComponent.prototype._hide = function() {
  if(this._isShown) {
    that = this;
    this._isShown = false;
    this.$el.stop(true);
    this.$el.toggleClass('is-active', true).animate(
      {
        'opacity':0
      }, 
      {
        'duration':200,
        'specialEasing': {
          'opacity': 'easeOutCirc'
        },
        'complete': function() {
          that.$el.toggleClass('is-active', false);
        }
      }
    );
  }
}

site.components.StickyBarComponent.prototype.destroy = function() {

  this.parent.destroy.call(this);
}
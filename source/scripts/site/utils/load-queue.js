var site = site || {};

el.core.utils.createNamespace(site, 'utils')

site.utils.LoadQueue = el.core.utils.class.extend(function(options){

}, el.core.events.EventsDispatcher);

site.utils.LoadQueue.prototype.init = function(options) {
  
  this.options = {};
  this.options = $.extend(this.options, options);

  this.name = 'LoadQueue';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.isLoading = false;
  this.isLoaded = false;

  this._qData = [];
  this._imagesLoaded = 0;

  this.imageLoadedProxy = $.proxy(this._imageLoadedHandler, this);
  this.imageErrorProxy = $.proxy(this._imageErrorHandler, this);

  return this;
};

site.utils.LoadQueue.prototype.addImages = function(newImages) {

  // console.log('LoadQueue.addImages', newImages);

  for (var i = 0; i < newImages.length; i++) {

    if(typeof newImages[i] == 'string') {
        
      this._qData.push({
        url: newImages[i],
        loaded: false,
        status: 0
      });                
    }
    else {
      this._qData.push($.extend({}, newImages[i], {
        url: newImages[i].url,
        loaded: false,
        status: 0
      })); 
    }
  };

  return this;
};

site.utils.LoadQueue.prototype.start = function (){

  // console.log('LoadQueue.start');

  if(!this._qData)
    return;

  this.isLoading = true;
  this.isLoaded = false;

  var that = this;

  if(this._qData.length == 0) {

    this._updateQueue();
  }
  else {

    for (var i = 0; i < this._qData.length; i++) {
      var qd = this._qData[i];

      if(!qd.loaded) {

        qd._image = new Image();
        qd._image.src = qd.url;
        qd._image.onload = (function() {
          var data = qd;
          return function() {
            data.loaded = true;

            //dispatch event
            that.emit(el.core.events.event.LOAD_PROGRESS, {
              'target': this,
              'data': data
            });
            that._updateQueue(data);
          }
        })();
        qd._image.onerror = qd._image.onabort = (function() {
          var data = qd;
          return function() {
            data.loaded = true;
            data.status = 1;

            that._updateQueue(data);
          }
        })();
      }
    };
  }

  return this;
};

site.utils.LoadQueue.prototype._updateQueue = function(data){

  // // console.log('LoadQueue._updateQueue try', this._qData);

  for(var i = 0; i < this._qData.length; i++) {
    // // console.log('LoadQueue._updateQueue check',i, this._qData[i].loaded);
    if(!this._qData[i].loaded){
      this.isLoading = true;
      this.isLoaded = false;
      return;
    }
  }

  // console.log('LoadQueue._updateQueue Ready');

  this.isLoading = false;
  this.isLoaded = true;

  // dispatch event
  this.emit(el.core.events.event.LOAD_COMPLETE, {
    'target': this,
    'data': this._qData
  });
};

site.utils.LoadQueue.prototype.destroy = function() {

  for (var i = 0; i < this._qData.length; i++) {
    var qd = this._qData[i];
    qd._image.onload = null;
    qd._image.onerror = null;
    qd._image.onabort = null;
  }

  this.removeAllListeners(el.core.events.event.LOAD_PROGRESS);
  this.removeAllListeners(el.core.events.event.LOAD_COMPLETE);

  this.isLoading = false;
  this.isLoaded = false;

  this._qData = null;
};
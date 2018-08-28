var site = site || {};

el.core.utils.createNamespace(site, 'utils').responsive = (function(){

  var Responsive = function() {

    this.pixelRatio = site.utils.device.pixelRatio;
    this.screenWidth = site.utils.device.screenWidth;
  }

  Responsive.prototype.getImageURL = function(url, vw) {

    // SVG case
    if(url.indexOf('.svg') > -1) {
      return url;
    }

    // check for Viewport Width
    if(typeof vw === 'undefined') {
      vw = 1;
    }

    // raster image case
    var imageW = this.screenWidth * vw,
        sizeFolder = '',
        urlBits = url.split('/');
    ;
    // S: 360
    // M: 800
    // L: 1024

    if(imageW < 1440) {

      if(imageW < 480) {
        urlBits.splice(urlBits.length-1, 0, 'S');
        url = urlBits.join('/');
      }
      else if(imageW < 1100) {
        urlBits.splice(urlBits.length-1, 0, 'M');
        url = urlBits.join('/');
      }
      else if(imageW < 1400) {
        urlBits.splice(urlBits.length-1, 0, 'L')
        url = urlBits.join('/');
      }
    }
    
    return url;
  };

  return new Responsive();
})();
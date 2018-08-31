var el = el || {};
el.core.utils.createNamespace(el, 'core.utils');

el.core.utils.environment = (function() {

  var pixelRatio,
      uaStr,
      $html,

      _isDevice,
      _isDesktop,
      _isTablet,
      _isMobile,
      _isIOS
  ;

  function init() {
    
      pixelRatio = window.devicePixelRatio !== undefined ? window.devicePixelRatio : 1;
      uaStr = window.navigator.userAgent.toLowerCase();
      $html = $('html');

      _isDevice = !Modernizr.touchevents;
      _isDesktop = !_isDevice;
      _isIOS = Boolean( /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream );
    ;    
  }

  function getPixelRatio() {
    return pixelRatio;
  }

  function getScreenWidth() {
    return window.screen.width;
  }

  function getScreenHeight() {
    return window.screen.height;
  }

  function getUA() {
    return uaStr;
  }

  function isDevice() {
    return _isDevice;
  }

  function isDesktop() {
    return _isDesktop;
  }

  function isIE() {
    return navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') !== -1;
  }

  function isIOS() {
    return _isIOS;
  }

  return {
    getPixelRatio: getPixelRatio,
    getScreenWidth: getScreenWidth,
    getScreenHeight: getScreenHeight,
    getUA: getUA,
    isDevice: isDevice,
    isDesktop: isDesktop,
    init: init
  }

})();
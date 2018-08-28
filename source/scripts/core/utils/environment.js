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

      _isDevice = Boolean(bowser.mobile) || Boolean(bowser.tablet);
      _isDesktop = !_isDevice;
      _isTablet = Boolean(bowser.tablet);
      _isMobile = Boolean(bowser.mobile);
      _isIOS = Boolean( /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream );
    ;    
  }

  function isIE9() {

    return bowser.msie && bowser.version == 9;
  }

  function isUnsupportedBrowser(){


    if(bowser.msie){

        if(bowser.windowsphone){
            return !(bowser.osversion >= 8);
        }
        else {
            return bowser.version <= 8
        }

        return  true;
    }

    if(bowser.android){

        var vStr = bowser.osversion.replace(/\./g,'');
        var vNum = parseInt(vStr);


        if (vNum < 100){
            vNum *= 10;
        }

        if(vNum < 440) {
            return  true;
        }
        else {
            return false;
        }

    }

    if(bowser.chrome && bowser.version <= 35){
        return true;
    }

    if(bowser.firefox && bowser.version <= 30){
        return true;
    }

    if(bowser.safari && bowser.version <= 6){
        return  true;
    }

    if(bowser.ios && bowser.version <= 6){
        return  true;
    }

    return false;
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

  function isTablet() {
    return _isTablet;
  }

  function isMobile() {
    return _isMobile;
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
    isTablet: isTablet,
    isMobile: isMobile,
    isIE: isIE,
    isUnsupportedBrowser: isUnsupportedBrowser,
    isIE: isIE,
    isIE9: isIE9,
    isIOS: isIOS,
    init: init
  }

})();
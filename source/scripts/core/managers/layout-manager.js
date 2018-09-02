/*
* @uses: el.core.events.EventsDispatcher
* @uses: el.core.events.Event
* @uses: jQuery
*/

var el = el || {};
el.core.utils.createNamespace(el, 'core.managers');

el.core.managers.layoutManager = (function() {

  var initiated = false,
      $body = null,
      $window = null,
      winSize = {
        'width': 0,
        'height': 0,
        'w': 0,
        'h': 0
      },
      Event = el.core.events.event
  ;

  function init(options) {

    if(!initiated) {

      // console.log('LayoutManager.init');

      initiated = true;

      $body = $('body');
      $window = $(window);

      _getWindowSize();

      $window.on('resize', $.proxy(_resizeHandler, this));
    }

    return this;
  }

  function _getWindowSize() {

    winSize.w = winSize.width = $window.width();
    winSize.h = winSize.height = $window.height();

    return winSize;
  }

  function _resizeHandler(e) {

    resize();
  }

  function resize() {

    _getWindowSize();

    el.core.events.globalDispatcher.emit(Event.RESIZE, {
      'winW': winSize.width,
      'winH': winSize.height,
      'width': winSize.width,
      'height': winSize.height
    });

    return this;
  }

  return {
    'init': init,
    'resize': resize,
    '$body': $body,
    '$window': $window,
    'winSize': winSize
  };
})();
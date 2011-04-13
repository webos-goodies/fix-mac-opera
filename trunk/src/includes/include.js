(function() {
  var repeatFlags = {};

  function onEvent(e) {
    if(e.metaKey) {
      if((65 <= e.keyCode && e.keyCode <= 90) ||
         (97 <= e.keyCode && e.keyCode <= 122)) {
        e.preventDefault();
        e.stopPropagation();
        if(e.type == 'keypress') {
          repeatFlags[e.keyCode & 0x1f] = false;
        }
      } else if(e.type == 'keypress' &&
                1 <= e.keyCode && e.keyCode <= 26) {
        if(repeatFlags[e.keyCode]) {
          e.preventDefault();
          e.stopPropagation();
        }
        repeatFlags[e.keyCode] = !repeatFlags[e.keyCode];
      }
    }
  }

  if(/^mac/i.test(window.navigator.platform)) {
    document.addEventListener('keypress', onEvent, true);
    document.addEventListener('keydown', onEvent, true);
    document.addEventListener('keyup', onEvent, true);
  }
})();

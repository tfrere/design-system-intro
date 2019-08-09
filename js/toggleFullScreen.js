var toggleFullScreen = function() {
  var el = document.documentElement;
  isFullScreen = !isFullScreen;
  if(isFullScreen) {
    if (el.requestFullscreen)
      el.requestFullscreen();
    else if (el.mozRequestFullScreen)
      el.mozRequestFullScreen();
    else if (el.webkitRequestFullScreen)
      el.webkitRequestFullScreen();
    else if (el.msRequestFullscreen)
      el.msRequestFullscreen();
  }
  else {
    if (document.exitFullscreen)
      document.exitFullscreen();
    else if (document.mozCancelFullScreen)
      document.mozCancelFullScreen();
    else if (document.webkitCancelFullScreen)
      document.webkitCancelFullScreen();
    else if (document.msExitFullscreen)
      document.msExitFullscreen();
  }
}

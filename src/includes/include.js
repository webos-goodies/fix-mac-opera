function onEvent(e) {
  if(e.metaKey &&
	 ((65 <= e.keyCode && e.keyCode <= 90) || (97 <= e.keyCode && e.keyCode <= 122))) {
	e.preventDefault();
    e.stopPropagation();
  }
}
document.addEventListener('keypress', onEvent, true);
document.addEventListener('keydown', onEvent, true);
document.addEventListener('keyup', onEvent, true);

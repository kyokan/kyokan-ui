function ready(callback) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

function initializeLuminous () {
  new LuminousGallery(document.querySelectorAll('.reference a'));
}

function main () {
  initializeLuminous();
}

ready(main);

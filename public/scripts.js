const LIGHTROOM_DISPLAY_ID    = 'lightroom-display';
const LIGHTROOM_TARGET_CLASS  = 'reference';
const LIGHTROOM_DISPLAY_CLASS = 'show';

function ready(callback) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

function handleClick (event) {
  const lightroomDisplayElement = document.getElementById(LIGHTROOM_DISPLAY_ID);

  // click on
  if (event.target.parentElement.parentElement.classList.contains(LIGHTROOM_TARGET_CLASS)) {
    event.preventDefault();

    // add image to display
    const link = event.target.parentElement;
    const targetImage = link.href;
    const image = document.createElement('img');
    image.src = targetImage;
    lightroomDisplayElement.appendChild(image);

    // show display
    lightroomDisplayElement.classList.add(LIGHTROOM_DISPLAY_CLASS);
  } else { // click off
    // hide display
    lightroomDisplayElement.classList.remove(LIGHTROOM_DISPLAY_CLASS);

    // remove all children from display element
    while (lightroomDisplayElement.firstChild) {
      lightroomDisplayElement.removeChild(lightroomDisplayElement.firstChild);
    }
  }
}

function addLightroomDisplay () {
  // don't add it if it already exists
  if (document.getElementById(LIGHTROOM_DISPLAY_ID)) return;

  const output = document.createElement('div');
  output.id = LIGHTROOM_DISPLAY_ID;

  document.body.appendChild(output);
}

function addListeners () {
  window.addEventListener('click', handleClick, false);
}

function main () {
  addListeners();
  addLightroomDisplay();
}

ready(main);

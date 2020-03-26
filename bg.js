const body = document.querySelector("body");

const IMG_NUMBER = 3;
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function paintImage(imgNumber) {
  const img = new Image();
  img.src = `/images/${imgNumber + 1}.jpg`;
  img.classList.add("bgImage");
  body.prepend(img);
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();

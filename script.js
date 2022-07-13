const container = document.getElementById('container');

for (let n = 1; n <= 256; n++) {
  let box = document.createElement('div');
  box.classList.add('box');
  //box.textContent = n;
  container.appendChild(box);
}

container.childNodes.forEach(box => box.addEventListener('mouseover', onHover));

function onHover(e) {
  e.target.style.backgroundColor = randomColor();
}

function randomRGBIndex() {
  return (Math.floor(Math.random() * 255));
}

function randomColor() {
  return `rgb(${randomRGBIndex()}, ${randomRGBIndex()}, ${randomRGBIndex()})`;
}
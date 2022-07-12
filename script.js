const container = document.getElementById('container');

for (let n = 1; n <= 16; n++) {
  let box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
}

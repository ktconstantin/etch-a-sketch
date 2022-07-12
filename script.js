const container = document.getElementById('container');

for (let n = 1; n <= 256; n++) {
  let box = document.createElement('div');
  box.classList.add('box');
  //box.textContent = n;
  container.appendChild(box);
}

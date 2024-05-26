const boneco = document.getElementById('boneco');
const moverFrenteBtn = document.getElementById('mover-frente');
const moverTrasBtn = document.getElementById('mover-tras');

let position = 0;

moverFrenteBtn.addEventListener('click', () => {
  position += 10;
  boneco.style.left = position + 'px';
});

moverTrasBtn.addEventListener('click', () => {
  position -= 10;
  boneco.style.left = position + 'px';
});

const createGrid = () => {
  const boxContainer = document.querySelector('#boxes');

  for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      boxContainer.appendChild(box);
    }
  }
};

createGrid();

const changeColors = () => {
  const allBoxes = document.querySelectorAll('.box');

  allBoxes.forEach((box) => {
    box.addEventListener(
      'mouseover',
      (e) => (e.target.style.backgroundColor = 'red')
    );
  });
};

changeColors();

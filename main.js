const createGrid = (numberOfBoxes) => {
  const boxContainer = document.querySelector("#boxes");

  const boxSize = 800 / numberOfBoxes + "px";

  for (let i = 1; i <= numberOfBoxes; i++) {
    for (let j = 1; j <= numberOfBoxes; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = boxSize;
      box.style.height = boxSize;

      boxContainer.appendChild(box);
    }
  }
};

createGrid(10);

const changeColors = () => {
  const allBoxes = document.querySelectorAll(".box");

  allBoxes.forEach((box) => {
    box.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = "red")
    );
  });
};

changeColors();

const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  document.body.classList.toggle("changeColor");
});

const newBtn = document.createElement("button");
const btnText = document.createTextNode("new button");

newBtn.appendChild(btnText);
newBtn.setAttribute("type", "button");

btn.after(newBtn);

newBtn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255 + 1);
  // console.log(r);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const rangeInput = document.querySelectorAll("input");
// console.log(rangeInput);
for (let i = 0; i < rangeInput.length; i++) {
  // console.log(r);
  rangeInput[i].addEventListener("input", () => {
    const red = rangeInput[0].value;
    const green = rangeInput[1].value;
    const blue = rangeInput[2].value;
    // console.log(r);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  });
}

document.body.addEventListener("mousemove", (e) => {
  const xPosisi = Math.floor((e.clientX / window.innerWidth) * 255);
  const yPosisi = Math.floor((e.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = `rgb(${xPosisi}, ${yPosisi}, 100)`;
  console.log(xPosisi);
});

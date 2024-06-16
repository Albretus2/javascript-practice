// const close = document.querySelectorAll(".close");

// close.forEach((c) => {
//   c.addEventListener("click", (e) => {
//     e.preventDefault();
//     c.parentElement.style.display = "none";
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");

// cards.forEach((c) => {
//   c.addEventListener("click", () => {
//     alert("oke");
//   });
// });

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (e.target.classList == "close")
    e.target.parentElement.style.display = "none";
});

const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
let eOld = null;

container.addEventListener("click", (e) => {
  if (e.target.classList == "thumb") {
    if (eOld != null) {
      eOld.classList.remove("active");
    }
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");

    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 100);

    e.target.classList.add("active");
    eOld = e.target;
  }
});

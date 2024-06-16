const pilihanKomputer = () => {
  let pilihan = Math.floor(Math.random() * 15 + 1);
  if (pilihan <= 5) pilihan = "semut";
  if (pilihan <= 10) pilihan = "orang";
  if (pilihan <= 15) pilihan = "gajah";
  return pilihan;
};

const hasil = (komputer, player) => {
  //   let h = "";
  if (player == komputer) return "DRAW";
  if (player == "gajah") return komputer == "orang" ? "YOU WIN" : "YOU LOSE";
  if (player == "orang") return komputer == "semut" ? "YOU WIN" : "YOU LOSE";
  if (player == "semut") return komputer == "gajah" ? "YOU WIN" : "YOU LOSE";
  //   return h;
};

const putarGambar = () => {
  const imgKomputer = document.querySelector(".img-komputer");
  let gambar = ["gajah", "orang", "semut"];
  const waktuMulai = new Date().getTime();
  let i = 0;
  //   console.log(waktuMulai);
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      return clearInterval;
    }
    imgKomputer.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i == gambar.length) i = 0;
  }, 100);
};

const pilihanPlayer = document.querySelectorAll("li img");
pilihanPlayer.forEach((p) => {
  p.addEventListener("click", function () {
    const pilKomputer = pilihanKomputer();
    const pilPlayer = p.className;
    const result = hasil(pilKomputer, pilPlayer);

    putarGambar();
    setTimeout(() => {
      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", `img/${pilKomputer}.png`);
      document.querySelector(".info").innerHTML = result;
    }, 1000);
  });
});

// -----------------------------------------

const text = document.querySelector(".diskon");
const waktuTengat = new Date("may 7, 2024 20:08:00").getTime();

setInterval(() => {
  const waktuSekarang = new Date().getTime();
  const selisih = waktuTengat - waktuSekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  text.innerHTML = `waktu tersisa tinggal ${hari} hari, ${jam} jam, ${menit} menit, ${detik} detik`;

  if (selisih < 0) {
    clearInterval();
    text.innerHTML = "waktu habis";
  }
}, 1000);

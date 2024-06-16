// ambil semua elemt
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih video yang hanya javascript lanjutan nya aja
let videoFilter = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // mengambil data durasi
  .map((item) => item.dataset.duration)
  //   mengubah durai menjadi float, dan ubah menit menjadi detik
  .map((durasi) => {
    const parts = durasi.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  //jumlahkan semua durasi
  .reduce((total, detik) => total + detik);

//   ubah formatnya menjadi jam menit dan detik
const jam = Math.floor(videoFilter / 3600);
// menit
const menit = Math.floor((videoFilter % 3600) / 60);
// detik
const detik = videoFilter % 60;

// simpan di DOM
// menampilkan data total durasi
let paragDurasi = document.querySelector(".total-durasi");
paragDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

// menampilkan data total videos
let paragTotal = document.querySelector(".total-video");
let totalVideos = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

paragTotal.textContent = `${totalVideos} video tentang javascript lanjutan`;

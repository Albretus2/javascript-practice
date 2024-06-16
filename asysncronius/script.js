// sysnchronous callback
// function pesan(nama) {
//   alert(`hai, ${nama}`);
// }

// function tampilPesan(callback) {
//   const nama = prompt("masukan nama:");
//   callback(nama);
// }

// console.log(tampilPesan((nama) => alert(`hai, ${nama}`)));

// const siswa = [
//   {
//     nama: "albretus ichvanius giharta",
//     kelas: "XIRPL3",
//     jurusan: "Rekayasa perangkat lunak",
//   },
//   {
//     nama: "adnan alif faturahman",
//     kelas: "XIRPL3",
//     jurusan: "Rekayasa perangkat lunak",
//   },
//   {
//     nama: "alya quatrum nada",
//     kelas: "XIRPL3",
//     jurusan: "Rekayasa perangkat lunak",
//   },
// ];

// console.log("mulai");
// siswa.forEach((s) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(s.nama);
// });
// console.log("selesai");

// versi asysnchronous
// // mengguanakan setTimeout
// console.log("mulai");
// setTimeout(() => {
//   siswa.forEach((s) => {
//     for (let i = 0; i < 10000000; i++) {
//       let date = new Date();
//     }
//     console.log(s.nama);
//   });
// }, 5000);
// console.log("selesai");

// ngambil data secara asynchronous menggunakan ajaxx
// function getDataSiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// getDataSiswa(
//   "data/siswa.json",
//   (result) => {
//     let siswa = JSON.parse(result);
//     siswa.forEach((e) => console.log(e.nama));
//   },
//   () => {
//     console.log("erorr");
//   }
// );

// -----

// JQuery
$.ajax({
  url: "data/siswa.json",
  success: (siswa) => {
    siswa.forEach((s) => console.log(s.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});

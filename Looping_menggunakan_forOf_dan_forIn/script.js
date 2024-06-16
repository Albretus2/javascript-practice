// perulangan For..of
// perulangan for..of bisa menggulangan object object iterable, yaitu:
// string, array, argument/node list, typedArray, map, set, dan user-defined iterable

// array
// const siswa = ["alber", "ichvanius", "giharta"];
// mengguanakan forEach
// siswa.forEach((e) => console.log(e));

// menggunakan for..of
// for (const e of siswa) {
//   console.log(e);
// }

// string
// const nama = "albretus";
// for (const e of nama) {
//   console.log(e);
// }

// mengambil parameter index
// const siswa = ["alber", "ichvanius", "giharta"];
// // siswa.forEach((e, i) => {
// //   console.log(`nama saya ${e}. saya index ke ${i + 1}`);
// // });

// for ([i, e] of siswa.entries()) {
//   console.log(`nama saya ${e}. saya index ke ${i + 1}`);
// }

// node list
// const nama = document.querySelectorAll(".nama");
// // nama.forEach((e) => console.log(e.innerHTML));
// for (e of nama) {
//   console.log(e.innerHTML);
// }

// arguments
// function kalkulus() {
//   let total = 0;
//   for (e of arguments) {
//     total += e;
//   }
//   return total;
// }

// console.log(kalkulus(1, 2, 3, 4, 5));

// -------------------------------------------------

// for..in
// perulangan untuk object
// const siswa = {
//   nama: "ichvanius giharta",
//   kelas: "XIRPL3",
//   jurusan: "rekayasa perangkat lunak",
// };

// for (e in siswa) {
//   console.log(siswa[e]);
// }

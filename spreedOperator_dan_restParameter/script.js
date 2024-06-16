// spread operator
// memecah iterable menjadi single element

// const siswa = ["alber", "ichvanius", "giharta"];
// console.log(...siswa[0]);

// menggabungkan 2 atau lebih aray menjadi lebih flexsible
// dibandingkan menggunakan concat()
// const siswa = ["alber", "ichvanius", "giharta"];
// const guru = ["fajar", "bagus", "ujang"];

// contoh menggunakan concat()
// let gabung = siswa.concat(guru);

// let gabung = [...siswa, "erma", ...guru];
// console.log(gabung);

// meng copy array
// const membreship = ["ijat", "mail", "susanto"];
// const membreshipCopy = [...membreship];
// membreshipCopy[0] = "taji";
// console.log(membreshipCopy);

// --

// contoh lainya
// mengambil element html kemudian di masukan ke dalam array
// const nama = document.querySelectorAll("li");

// // menggunakan for..of
// // let hasil = [];
// // for (e of nama) {
// //   hasil.push(e.innerHTML);
// // }

// // menggunakan spread dengan cara merubah const nama menjadi array
// let hasil = [...nama].map((e) => e.textContent);
// console.log(hasil);

// --

// contoh lainya
// const nama = document.querySelector(".nama");
// let memisah = [...nama.textContent]
//   .map((e) => {
//     return `<span>${e}</span>`;
//   })
//   .join("");

// nama.innerHTML = memisah;

// -------

// rest Parameter
// function jumlahkan() {
//   let total = 0;
//   //   [...arguments].map((e) => (total += e));
//   for (let e of arguments) {
//     total += e;
//   }
//   return total;
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// --

// filltering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, 3, "alber", true, false));

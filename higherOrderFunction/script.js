const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// const newAngka = [];
// for (let i = 0; i <= angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);

// filter
// mencari angka yang lebih kecil atau lebih besar dari 3
// const newAngka = angka.filter((e) => {
//   return e <= 3;
// });

// console.log(newAngka);

// map
// semua angaka di kali dengan dua
// const newAngka = angka.map((e) => {
//   return e * 2;
// });
// console.log(newAngka);

// reduce
// menambahkan total semau angaka
// [-1 + 8+ 9+ 1+ 4+ -5+ -4+ 3+ 2+ 9]
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(newAngka);

// method chaining
// mencari angaka yang lebih > 5
// kalikan dengan 3
// lalu di jumlahkan
// [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]
const newAngka = angka
  .filter((e) => e > 5) // 8,8,9
  .map((e) => e * 3) // 24, 27, 27
  .map((e) => e / 2)
  .reduce((accu, current) => accu + current, 0); // 78

console.log(newAngka);

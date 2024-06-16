// let totalVolume = function (a, b) {
//   let exponent = 3;
//   // fungsi math.pow seperti pangkat
//   let volumeA = Math.pow(a, exponent);
//   let volumeB = Math.pow(b, exponent);

//   let total = volumeA + volumeB;

//   return total;
// };

// alert("hitung jumlah total volume 2 kubus");
// let ulang = true;
// while (ulang) {
//   let angka1 = parseInt(prompt("masukan panjang sisi kubus 1: "));
//   let angka2 = parseInt(prompt("masukan panjang sisi kubus 2: "));

//   let hasil = totalVolume(angka1, angka2);
//   alert(
//     "hasilnya dari jumlah total volume kubus 1 dengan kubus dua adalah: " +
//       hasil
//   );
//   ulang = confirm("lagi?");
// }

// alert("terimakasih Bre");

// filter di array

let angka = [1, 3, 2, 5, 8, 7, 4];
let angka2 = angka.filter(function (e) {
  return e > 5;
});

angka2.forEach(function (e) {
  console.log(e);
});

console.log(angka2.join(" - "));

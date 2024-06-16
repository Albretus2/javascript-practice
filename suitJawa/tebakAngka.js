// pembukaan
alert("selamat datang di permainan tebak angka !!");
let ulang = true;
// mengulanag apakah game mau di ulang atau tidak
while (ulang) {
  let change = 3;
  let angka = Math.floor(Math.random() * 10) + 1;
  let hasil = "";

  // mengulang kesempatan yang ada
  while (change >= 1) {
    let tebak = prompt("tebak angka dari 1 - 10");
    if (tebak == angka) {
      //   mengecek hasil jika benar maka perulangan di break dan jika tidak perulangan di lanjut sampai sisa variable change habis
      hasil = "benar";
      alert(hasil + ", angka yang di cari adalah " + angka);
      break;
    } else if (tebak < angka) {
      hasil = "terlalu rendah";
      change -= 1;
      alert(
        "angka yang anda tebak " +
          hasil +
          " yaitu " +
          tebak +
          "\nsisa kesempatan: " +
          change
      );
    } else if (tebak > angka) {
      hasil = "terlalu tinggi";
      change -= 1;
      alert(
        "angka yang anda tebak " +
          hasil +
          " yaitu " +
          tebak +
          "\nsisa kesempatan: " +
          change
      );
    } else {
      hasil = "angka yang anda tebak bukan 1 - 10";
      alert(hasil);
    }

    // mengecek kesempatan yang tersisa
    if (change == 0) {
      alert("anda gaggal, angka yang di cari adalah " + angka);
    }
  }
  ulang = confirm("lagi?");
}

alert("terimakasih sudah bermain");

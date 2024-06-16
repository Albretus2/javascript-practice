alert("Selamat datang di game suit jawa !!");

let ulang = true;
while (ulang) {
  // Menagkap pilihan user
  let inputUser = prompt("Pilih : Gajah, Semut, orang");

  let randomAngka = Math.random();

  if (randomAngka < 0.34) {
    randomAngka = "gajah";
  } else if (randomAngka >= 0.34 && randomAngka < 0.67) {
    randomAngka = "orang";
  } else {
    randomAngka = "semut";
  }

  let hasil = "";
  // mengecek inputan user dengan randomg angka
  if (inputUser == randomAngka) {
    hasil = "SERI !!";
  } else if (inputUser == "gajah") {
    hasil = randomAngka == "orang" ? "kamu menang" : "kamu kalah";
  } else if (inputUser == "orang") {
    hasil = randomAngka == "gajah" ? "kamu kalah" : "kamu menang";
  } else if (inputUser == "semut") {
    hasil = randomAngka == "orang" ? "kamu kalah" : "kamu menang";
  } else {
    hasil = "kamu memasukan pilihan yang SALAH";
  }

  // menampilkan hasil
  alert(
    "kamu memilih: " +
      inputUser +
      " dan komputer memilih: " +
      randomAngka +
      "\nmaka hasilnya " +
      hasil
  );

  // mengecek apakah suit jawa mau di ulang atau tidak
  ulang = confirm("mau lagi atau tidak?");
}

alert("terimakasih sudah bermain");

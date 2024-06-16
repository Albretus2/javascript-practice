// -------------------------------------------------
// -------------------------------------------------
// membuat object menggunakan contructor
// -------------------------------------------------
// -------------------------------------------------

// let Karakter = function (nama, hp, energi, role) {
//   (this.nama = nama),
//     (this.hp = hp),
//     (this.energi = energi),
//     (this.role = role);

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan`;
//   };
// };

// let karakter1 = new Karakter("yusha", 50, 10, "assasin");

// object.create()

// const methodKarakter = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan`;
//   },
// };

// let Karakter = function (nama, hp, energi, role) {
//   let foo = Object.create(methodKarakter);
//   foo.nama = nama;
//   foo.hp = hp;
//   foo.energi = energi;
//   foo.role = role;

//   return foo;
// };

// let karakter1 = Karakter("yusha", 50, 10, "assasin");

// ----------------------------------
// ----------------------------------
// menggunakan prototype
// ----------------------------------
// ----------------------------------

// let Karakter = function (nama, hp, energi, skill) {
//   this.nama = nama;
//   this.hp = hp;
//   this.energi = energi;
//   this.skill = skill;
// };

// Karakter.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `helo ${this.nama}, selamat makan`;
// };

// Karakter.prototype.healing = function (heal) {
//   this.hp += heal * 2;
//   return `helo ${this.nama}, anda melakukan healing. total hp: ${this.hp}`;
// };

// let karakter1 = new Karakter("haru", 50, 40, "menghilang");

// -----------------------------------------------------
// -----------------------------------------------------
// menggunakan prototype tapi versi menggunakan class
// -----------------------------------------------------
// -----------------------------------------------------

// class Karakter {
//   constructor(nama, hp, energi, skill) {
//     this.nama = nama;
//     this.hp = hp;
//     this.energi = energi;
//     this.skill = skill;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `hi ${this.nama}, selamat makan. energi kamu adalah: ${this.energi}`;
//   }

//   healing(heal) {
//     this.hp += heal * 2;
//     return `hi ${this.nama}, kamu telah melakukan healing. total hp: ${this.hp}`;
//   }
// }

// let alber = new Karakter("alber", 40, 80, "cooking");
// -----------------------------------------------------
// --
// ----------------------------
// ----------------------------
// closure di javascript
// ----------------------------
// ----------------------------

// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let panggil = init();
// panggil("alber");

// .......................
// contoh lainya ----
// function menyapa(waktu) {
//   return function (nama) {
//     console.log(`hai ${nama}, selamat ${waktu}. semoga hari mu menyenangkan`);
//   };
// }

// // let selamatPagi = menyapa("Pagi");
// // let selamatSiang = menyapa("Siang");

// // selamatSiang("alber");
// menyapa("Pagi")("alber");
// .......................
// contoh lainya ---
// let add = (() => {
//   let counter = 0;
//   return () => {
//     console.log(++counter);
//   };
// })();

// add();
// add();
// add();

// .......................

// ----------------------------

// ------------------------------------------------------
// contoh penerapan javascript pada elemt html

const box = document.querySelector(".box");

box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});

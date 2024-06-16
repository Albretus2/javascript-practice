// promise
// Object yang mempresentasikan keberhasilan / kegagalan sebuah event
// yang asynschronous di masa yang akan datang.

// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then/ catch)

// contoh 1
// let status = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (status == true) {
//     resolve("janji terpenuhi");
//   } else {
//     reject("ingkar janji....");
//   }
// });

// janji1
//   .then((response) => alert(`OKE, ${response}`))
//   .catch((response) => console.log(`NO OKE, ${response}`));

//  ----

// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("ditetapi setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("tidak di tetapi setelah beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(
//   janji2
//     .finally(() => console.log("selesai menggu"))
//     .then((response) => console.log(response))
// );

// console.log("selesai");

//  ----

// promise all
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "fallout",
        sutradara: "roni marquez",
        actor: ["doni", "yayat", "toni", "tisna"],
      },
    ]);
  }, 3000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "bandung",
        temp: 28,
        kondisi: "cerah",
      },
    ]);
  }, 2000);
});

const kota = document.querySelector(".kota");
const temp = document.querySelector(".temp");
const kondisi = document.querySelector(".kondisi");

// film.then((response) => console.log(response));
cuaca.then((response) => {
  const data = response;
  data.map((c) => {
    kota.innerHTML = c.kota;
    temp.innerHTML = c.temp;
    kondisi.innerHTML = c.kondisi;
  });
});

// Promise.all([film, cuaca])
//   // .then(response => console.log(response))
//   .then((response) => {
//     const [film, cuaca] = response;
//     console.log(cuaca);
//   });

// ------------------------------------------
// ------------------------------------------
// Study case mengelola penumpang pada angkot
// ------------------------------------------
// ------------------------------------------

let penumpang = ["bambang", "agus", "jamal"];
// let tambahPenumpang = (nama, penumpang) => {
//   if (penumpang.length == 0) {
//     penumpang.push(nama);
//     return penumpang;
//   } else {
//     for (let i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] == undefined) {
//         penumpang[i] = nama;
//         return penumpang;
//       } else if (i == penumpang.length - 1) {
//         penumpang.push(nama);
//         return penumpang;
//       } else if (penumpang[i] == nama) {
//         return "nama penumpang sudah terdaftar";
//       }
//     }
//   }
// };

let tambahPenumpang = (nama, penumpang) => {
  if (penumpang.indexOf(nama) > -1) {
    console.log(nama + " sudah ada di dalam angkot");
  } else {
    let kosong = penumpang.findIndex(Object.is.bind(null, undefined));
    if (kosong >= 0) {
      penumpang[kosong] = nama;
    } else {
      penumpang.push(nama);
    }
  }
  return penumpang;
};

let hapusPenumpang = (nama, penumpang) => {
  if (penumpang.length == 0) {
    console.log("tidak ada penumpang");
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == nama) {
        penumpang[i] = undefined;
      } else if (penumpang[nama] == null) {
        console.log(nama + " tidak ada di dalam angkot");
      }
    }
  }
  return penumpang;
};

// ---------------------------------
// ---------------------------------
// method-method yang ada pada array
// ---------------------------------
// ---------------------------------

// let arr = [1, 2, 3];

// console.log(arr.join(" - "));

// arr.push("agus");
// console.log(arr.join(" - "));

// arr.pop();
// console.log(arr.join(" - "));

// arr.unshift("ganyu");
// console.log(arr.join(" - "));

// arr.shift();
// console.log(arr.join(" - "));

// arr.splice(1, 2, "agus", "anji", "bagas");
// console.log(arr.join(" - "));

// let arr2 = arr.slice(1, 3);
// console.log(arr2.join(" - "));

// let back = arr.map((e, i) => {
//   return "index ke - " + i + " adalah " + e;
// });

// console.log(back.join("\n"));

// let angka = [1, 2, 3, 6, 5, 9, 8, 10];
// let sortAngka = angka.sort((a, b) => {
//   return a - b;
// });
// console.log(sortAngka.join("\n"));

// let cari = angka.find((e) => {
//   return e < 5;
// });

// console.log(cari);

// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = arr.indexOf(1);
// console.log(arr2);

// distruckturing array
const anggota = ["karma", "yayat", "adam", "jarwo"];

// const [a, b, c, d] = nama;

// skiping items in array
// const [a, , , d] = nama;
// console.log(a);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// rest parameter
// const [a, ...values] = anggota;
// console.log(values);

// distruckturing object
// const data = {
//   nama: "haru",
//   umur: 24,
//   alamat: {
//     jalan: "jl.siliwangi",
//     kecamatan: "baleendah",
//     kelurahan: "manggahang",
//   },
// };

// const { nama, umur, alamat } = data;

// console.log(alamat.jalan);

// mengambil field pada objec, setelah di kirim sebagai parameter
// distructuring arguments
// const siswa = {
//   id: 123,
//   nama: "jajang karupat",
//   kelas: "XIRPL3",
//   no: 8089668438978,
// };

// const getId = ({ id }) => id;
// console.log(getId(siswa));

// distruckturing function
// contoh lainya
const siswa = {
  id: 123,
  nama: "jajang karupat",
  kelas: "XIRPL3",
  no: 8089668438978,
  nilai: {
    akademik: {
      keterampilan: 89,
      pengetahuan: 90,
      uts: 86,
    },
    sikap: "B",
  },
};

const panggilSiswa = ({
  nama,
  kelas,
  nilai: {
    akademik: { keterampilan, pengetahuan, uts },
    sikap,
  },
}) => {
  return `nama saya adalah ${nama}, kelas ${kelas}, dan nilai saya adalah ${keterampilan}`;
};

console.log(panggilSiswa(siswa));

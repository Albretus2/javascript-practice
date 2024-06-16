// html fragments
// looping condition
// const siswa = [
//   {
//     nama: "alber",
//     kelas: "xiRPl3",
//   },
//   {
//     nama: "farhan",
//     kelas: "XIRPL3",
//   },
//   {
//     nama: "firhin",
//     kelas: "XIRPL3",
//   },
// ];

// let el = `<div class="siswa">
//   <h2>Data siswa</h2>
//   ${siswa
//     .map(
//       (e) =>
//         `<ul>
//       <li>Nama: ${e.nama}</li>
//       <li>Kelas: ${e.kelas}</li>
//     </ul>`
//     )
//     .join("")}
// </div>`;

// ternary condition
// const lagu = {
//   judul: "berak tak cebok",
//   by: "asep bahenol",
// };

// const el = `<ul>
//   <li>artis: ${lagu.by}</li>
//   <li>judul: ${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
// </ul>`;

// nested condition
const siswa = {
  nama: "jajang karedok lenca",
  kelas: "XIRPL3",
  mapel: ["penjas", "mtk", "ipa"],
};

let cetakMapel = (mapel) => {
  return `
  <ol>
  ${mapel.map((e) => `<li>${e}</li>`).join("")}
  </ol>`;
};

const element = `
  <h2>${siswa.nama}</h2>
  <span>${siswa.kelas}</span>
  <h4>Mata pelajaran:</h4>
  ${cetakMapel(siswa.mapel)}
`;

document.body.innerHTML = element;

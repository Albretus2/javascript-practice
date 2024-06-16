//  contoh pembuatan object
// membuat object literal
let mahasiswa = {
  nama: "dayat suharto",
  lulus: true,
  nilai: [2.9, 3.0, 4.05, 3.09],
  rata_rata: function () {
    let total = 0;
    let n = this.nilai;
    for (let i = 0; i < n.length; i++) {
      total += n[i];
    }
    return total / n.length;
  },
};

let pegawai = {
  nama: "suyatno",
  pekerjaan: "budak korporat",
  umur: 30,
  alamat: {
    jalan: "jl.ahmad yani no.123",
    kota: "bandung",
    kecamatan: "baleendah",
  },
};

// membuat object menggunakan function declaration
let biodataSiswa = function (nama, kelas, jurusan) {
  let siswa = {
    nama: nama,
    kelas: kelas,
    jurusan: jurusan,
  };
  return siswa;
};

let panggil = biodataSiswa("jamal", "XIRPL1", "RPL");

// membuat object menggunakan function constructor
function Siswa(nama, kelas, jurusan) {
  (this.nama = nama), (this.kelas = kelas), (this.jurusan = jurusan);
}

let panggilSiswa = new Siswa("agus", "XIRPL3", "RPL");

// ---------------------------------------------------------
// studicase pengelolaan juragan angkot menggunakan objcet
// ---------------------------------------------------------

function Angkot(sopir, trayek, penumpang, kas) {
  (this.sopir = sopir),
    (this.trayek = trayek),
    (this.penumpang = penumpang),
    (this.kas = kas);

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      alert("tidak ada penumpang");
      return false;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
      } else if (namaPenumpang == null) {
        alert(namaPenumpang + "tidak ada");
        return false;
      }
    }
    return penumpang;
  };
}

let angkot1 = new Angkot("sandhika", ["cicaheum", "cibiru"], [], 0);

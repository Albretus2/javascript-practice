// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("done");
//   }, 2000);
// });
// // console.log(coba);
// coba.then((respone) => console.log(respone));

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("done");
      }, waktu);
    } else {
      reject("failed!!!");
    }
  });
}

// const coba = cobaPromise();
// // console.log(coba);
// coba.then((response) => console.log(response));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.log(err);
  }
}

cobaAsync();

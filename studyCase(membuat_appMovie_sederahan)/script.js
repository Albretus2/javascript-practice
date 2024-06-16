// menggunakan JQuery. Ajax
// $(".search-btn").on("click", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=d2dd862e&s=" + $(".search-keyword").val(),
//     success: (result) => {
//       const movies = result.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCard(m);
//       });
//       $(".movies-container").html(cards);

//       //   ketika tombol detail di click
//       $(".modal-detail-button").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=d2dd862e&i=" +
//             $(this).data("imdbid"),
//           success: (i) => {
//             const modalMovie = showInfo(i);

//             $(".modal-body").html(modalMovie);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

// menggunakan Fetch
// const searchBtn = document.querySelector(".search-btn");
// searchBtn.addEventListener("click", function () {
//   const searchKeyword = document.querySelector(".search-keyword");
//   fetch("http://www.omdbapi.com/?apikey=d2dd862e&s=" + searchKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((m) => (cards += showCard(m)));
//       document.querySelector(".movies-container").innerHTML = cards;

//       //  ketika btn details di click
//       const modalBtn = document.querySelectorAll(".modal-detail-button");
//       modalBtn.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           fetch(
//             "http://www.omdbapi.com/?apikey=d2dd862e&i=" + this.dataset.imdbid
//           )
//             .then((response) => response.json())
//             .then((i) => {
//               const movieInfo = showInfo(i);
//               document.querySelector(".modal-body").innerHTML = movieInfo;
//             });
//         });
//       });
//     })
//     .catch((e) => console.log(e.responseText));
// });

// memisahkan fungsi fungsi yang ada agar terlihat rapih.

const searchBtn = document.querySelector(".search-btn");
// ketika tombol di click
searchBtn.addEventListener("click", async function () {
  try {
    const keyword = document.querySelector(".search-keyword");
    const movies = await getMovies(keyword);
    getCards(movies);
  } catch (err) {
    const alert = ` 
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>${err}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    document.querySelector(".alert-error").innerHTML = alert;
  }
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=d2dd862e&s=" + keyword.value)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        throw new Error("movie not found");
      }
      return response.Search;
    });
}

function getCards(movies) {
  let cards = "";
  movies.forEach((m) => {
    cards += showCard(m);
  });
  document.querySelector(".movies-container").innerHTML = cards;
}

// ----

document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const infoMovie = await getInfoMovie(imdbid);
    getInfoModals(infoMovie);
  }
});

function getInfoMovie(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=d2dd862e&i=" + imdbid)
    .then((response) => response.json())
    .then((response) => response);
}

function getInfoModals(i) {
  document.querySelector(".modal-body").innerHTML = showInfo(i);
}

function showCard(m) {
  return `   
      <div class="col-lg-4 my-2">
          <div class="card" style="width: 18rem;">
              <img src="${m.Poster}" class="card-img-top" alt="${m.Title}">
              <div class="card-body">
                  <h5 class="card-title">${m.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                   <div class="flex">
                      <a href="#" class="btn btn-primary col-12 modal-detail-button" 
                      data-bs-toggle="modal" data-bs-target="#moviesModal"
                      data-imdbid="${m.imdbID}">show details</a>
                  </div>
              </div>
          </div>
      </div>`;
}

function showInfo(i) {
  return `
      <div class="container-fluid">
          <div class="row">
              <div class="col-md-3">
                  <img src="${i.Poster}" alt="${i.Title}" class="img-fluid">
              </div>
              <div class="col-md">
                  <ul class="list-group">
                      <li class="list-group-item">
                          <h4>${i.Title} (${i.Year})</h4>
                      </li>
                      <li class="list-group-item"><strong>Released : </strong> ${i.Released}</li>
                      <li class="list-group-item"><strong>Genre : </strong> ${i.Genre}</li>
                      <li class="list-group-item"><strong>Type : </strong> ${i.Type}</li>
                      <li class="list-group-item"><strong>Imdb ratting: </strong> ${i.imdbRating}</li>
                  </ul>
              </div>
          </div>
      </div>
      `;
}

const willow = getElement(".willow-container");
const magnolia = getElement(".magnolia-container");
const diehard = getElement(".die-hard-container");
const reservoir = getElement(".reservoir-dogs-container");
const totalRecall = getElement(".total-recall-container");
const laHaine = getElement(".la-haine-container");
const s1m0ne = getElement(".s1m0ne-container");
const rambo = getElement(".rambo-container");
const merrier = getElement(".more-merrier-container");
const logans = getElement(".logans-run-container");
const taxi = getElement(".taxi-driver-container");
const hit = getElement(".the-hit-container");

function Film(title, year, genre, poster, container, key) {
  if (!(this instanceof Film)) {
    return new Film(title, year, genre, poster, container, key);
  }
  this.title = title;
  this.year = year;
  this.genre = genre;
  this.poster = poster;
  this.container = container;
  this.key = key;

  const createdElement = document.createElement("div");

  createdElement.innerHTML = `
  <div class="card">
     <h2 class="title">${this.title}</h2> 
     <h3 class="year">${this.year}</h3>
     <h4 class="genre">${this.genre}</h4>
     <img class="poster-img" src="filmPoster/${this.poster}">
  </div>
  `;

  container.appendChild(createdElement);

  function loadData(key) {
    // Get stored rating on load
    var exampleWithoutLS = false;
    var testWithOutLS = {};

    var rating;
    if (!exampleWithoutLS) {
      rating = localStorage.getItem(key);
    } else {
      rating = testWithOutLS.rating;
    }

    if (!rating) {
      return;
    }

    var s = parseInt(rating);
    // Get all of our stars..
    var stars = document.getElementsByClassName(key);

    // Loop through, and based on rating int, apply style
    for (var i = 0; i < stars.length; i++) {
      if (i >= s) {
        stars[i].classList.remove("active");
      } else {
        stars[i].classList.add("active");
      }
    }
    try {
      // Check we can access localstorage
      if (!window.localStorage) {
        console.log("Unable to access LS");
      }
    } catch (e) {
      // Can't access LS
      exampleWithoutLS = true;
    }
  }
  loadData(key);
}

const see = (title, year, genre, poster, container, key) => {
  return new Film(title, year, genre, poster, container, key);
};

// title, year, genre, poster, specificed container to append to
see("Willow", 1988, "Fantasy", "willow.jpg", willow, "star-willow");
see("Magnolia", 1999, "Drama", "magnolia.jpg", magnolia, "star-magnolia");
see("Die Hard", 1988, "Action", "diehard.jpg", diehard, "star-die-hard");
see(
  "Reservoir Dogs",
  1992,
  "Drama",
  "reservoirdogs.jpg",
  reservoir,
  "star-reservoir"
);
see(
  "Total Recall",
  1987,
  "Drama",
  "totalrecall.jpg",
  totalRecall,
  "star-total-recall"
);
see("La Haine", 1995, "Drama", "lahaine.jpg", laHaine, "star-la-haine");
see("S1m0ne", 2003, "Drama", "s1m0ne.jpg", s1m0ne, "star-s1m0ne");
see("Rambo", 1985, "Action", "rambo.jpg", rambo, "star-rambo");
see("More the Merrier", 1946, "Comedy", "merrier.jpg", merrier, "star-merrier");
see(
  "Logan's Run",
  1973,
  "Thriller",
  "logonsrun.jpg",
  logans,
  "star-logans-run"
);
see("Taxi Driver", 1977, "Drama", "taxidriver.jpg", taxi, "star-taxi-driver");
see("The Hit", 1982, "Action", "hit.jpg", hit, "star-the-hit");

// - - - - -  - - - -
// STAR VOTES
// - - - - - - - - -
function stars(id, num) {
  var exampleWithoutLS = false;
  var testWithOutLS = {};

  let number = num;

  function saveStar(id, number) {
    if (!exampleWithoutLS) {
      localStorage.setItem(number, id);
    } else {
      testWithOutLS.rating = id;
    }

    // Refresh our rating on screen
  }
  saveStar(id, number);

  var rating = localStorage.getItem(number);

  var s = parseInt(rating);

  // Get all of our stars..
  var stars = document.getElementsByClassName(num);

  // Loop through, and based on rating int, apply style
  for (var i = 0; i < stars.length; i++) {
    if (i >= s) {
      stars[i].classList.remove("active");
    } else {
      stars[i].classList.add("active");
    }

    // return s;
  }
}

const ratings = stars();

// - - - - - - - -
// SELECT ELEMENTS
// - - - - - - - -
function getElement(selection) {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  }
  throw new Error(`Please check "${selection}", it's not a selector`);
}
// - - - - - - - -
// DATE
// - - - - - - - -
const foot = getElement(".foot");
const todayYear = new Date().getFullYear();

foot.innerHTML = `<h3 class="today-year">© ${todayYear}</h3>`;

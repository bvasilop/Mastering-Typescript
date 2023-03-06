let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9; error

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero"; // error

const gameOver: boolean = false;
// gameOver = "false"; // error

let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false; // error

//

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];

// let foundMovie; // type any
let foundMovie: string;

for (const movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}

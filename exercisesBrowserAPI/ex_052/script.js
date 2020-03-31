// Create a basic HTML document
// Create a script tag on the document head element
// Use fetch to call the following api: https://swapi.co/api/films/
// You need to check that the response it's ok
// Then convert the response from JSON string object to a JavaScript one
// Finally show the following values for each film you get back:
// title: %filmTitle%
// episode_id: %filmID%
// release_date: %filmReleasedDate%

const apiURL = 'https://swapi.co/api/films/?format=json';
const ul = document.getElementById("movies");

fetch(apiURL)
      .then(function(response) {
        return response.json();
        console.log("response ok");
      })

      .then(function(data) {
        const movies  = data.results;
        console.log(movies);
        movies.forEach(function(movie){
            movieInfo("Title: " + movie.title +"</br>"+ "Episode ID: "+movie.episode_id +"</br>"+ "Release Date: " +movie.release_date);
        });
      });

const movieInfo = function (info){
  let li = document.createElement("li");
  li.innerHTML = info;
  ul.appendChild(li);
}

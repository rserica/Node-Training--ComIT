// Transform this JSON object into a JavaScript one using JSON.parse
// Select the jsonresponse id element
// Add title, episode_id as jsonresponse content
// Also iterate the response species and create a link for each item and assign the corresponding href
// At the end you need to have the following HTML:


const response = document.getElementById("jsonresponse");;
console.log(response);
const JSONmovie = `{
                  "title": "A New Hope",
                  "episode_id": 4,
                  "species": [
                    "https://swapi.co/api/species/5/",
                    "https://swapi.co/api/species/3/",
                    "https://swapi.co/api/species/2/",
                    "https://swapi.co/api/species/1/",
                    "https://swapi.co/api/species/4/"
                  ]
                }`;

const movie = JSON.parse(JSONmovie);

const title = document.createElement("div");
const episode = document.createElement("div");
const species = document.createElement("div");
title.innerHTML = "<p> Movie Title: "+movie.title+"</p>";
episode.innerHTML = "<p> Episode: "+ movie.episode_id +"</p>";
species.innerHTML = "<p> Species: </p>";

response.appendChild(title);
response.appendChild(episode);
response.appendChild(species);

movie.species.forEach(function(link, specie, i){
  specie = document.createElement("a");
  specie.href = link;
  specie.innerHTML = "<p> " + link + "</p>";
  species.appendChild(specie);
  console.log(specie);
})

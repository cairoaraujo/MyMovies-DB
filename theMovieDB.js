const API_KEY = "api_key=97d329f487562e453068e15ca4f995d4";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const main = document.getElementById("main");
getMovies(API_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}



function showMovies(data) {
    document.getElementById("main").innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, release_date} = movie;
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = 
        `            
        <img src= "${IMG_URL+poster_path}" alt"${title}">
            
        <div class="movie-info">
            <h3>${title}</h3>
            <h4>${release_date}</h4>
            <span class="rating">IMDB: ${vote_average}</span>
            <p>${overview}</p>
        </div>
        `
        document.getElementById("main").appendChild(movieElement);
    })
}

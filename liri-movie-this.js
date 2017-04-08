const request = require('request');


var inputs = process.argv;
var movieQuery = process.argv.slice(2).join(' ');

if (inputs.length === 2) {
    var defaultInput = 'Mr. Nobody';
    movieSearch(defaultInput);
} else if (movieQuery.length > 0) {
    var userInput = movieQuery;
    movieSearch(userInput);
}

function movieSearch(movieQuery){
	queryUrl = "http://www.omdbapi.com/?t=" + movieQuery + "&plot=short"
	request.get(queryUrl, (err, response, movie) =>{
		movie = JSON.parse(movie);
		console.log('* ' + movie.Title + '\n' +
                		'* ' + movie.Year + '\n' +
                		'* ' + movie.Imdbraiting + '\n' + 
                		'* ' + movie.Country + '\n' + 
                		'* ' + movie.Language + '\n' + 
                		'* ' + movie.Plot + '\n' + 
                		'* ' + movie.Actors + '\n' + 
                		'~~~~~~~~~~~~~~~'
            );

	}
)};


// node liri.js movie-this '<movie name here>'
   // * Title of the movie. movie.title
   // * Year the movie came out. movie.year
   // * IMDB Rating of the movie. movie.imdbraiting
   // * Country where the movie was produced. movie.Country
   // * Language of the movie. movie.Language
   // * Plot of the movie. movie.Plot
   // * Actors in the movie. movie.Actors
   // * Rotten Tomatoes Rating. tomato
   // * Rotten Tomatoes URL.
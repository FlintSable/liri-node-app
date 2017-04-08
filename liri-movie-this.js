const request = require('request');


var inputs = process.argv;
var movieQuery = process.argv.slice(2).join(' ');
// could use constructor function
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



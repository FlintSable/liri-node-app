const request = require('request');
var fs = require("fs");
var chalk = require('chalk');



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


function logger(putInFile){
    fs.appendFile('./assets/log.log', putInFile, function(err) {

  // If an error was experienced we say it.
  if (err) {
    console.log(err);
  }

  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
  else {
    // console.log(putInFile);
  }

});

}

function movieSearch(movieQuery){
	queryUrl = "http://www.omdbapi.com/?t=" + movieQuery + "&plot=short"
	request.get(queryUrl, (err, response, movie) =>{
		movie = JSON.parse(movie);
		var output =    '~~~~~~~~~~~~~~~' + '\n' + 
                        '* ' + movie.Title + '\n' +
                		'* ' + movie.Year + '\n' +
                		'* ' + movie.Imdbraiting + '\n' + 
                		'* ' + movie.Country + '\n' + 
                		'* ' + movie.Language + '\n' + 
                		'* ' + movie.Plot + '\n' + 
                		'* ' + movie.Actors + '\n' + 
                		'~~~~~~~~~~~~~~~';
        console.log(chalk.blue.bgWhite(output));
        logger(output);





	}
)};



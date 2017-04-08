const fs = require("fs");
var spotify = require('./spotify-this-song');
const inputs = process.argv.slice(2);


// console.log(inputs);

function whatIsSays() {
    fs.readFile('./assets/random.txt', 'utf8', function(err, data) {
            if (err) {
                console.log(err);
            } else if(data !== null){
                console.log(data);
            }

        }

    );
}

songSearch(defaultInput);

// whatIsSays();

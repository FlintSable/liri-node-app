const spotify = require('spotify');
var browser = require('child_process');
var os = require('os');
var confirm = require('inquirer-confirm');
// console.log(__filename);

var inputs = process.argv;
var songQuery = process.argv.slice(2).join(' ');


function SearchConstructor(arg1, arg2) {
    this.type = arg1;
    this.query = arg2;
}


if (inputs.length === 2) {
    console.log('no args');
    var defaultInput = new SearchConstructor('track', 'Ace of Base');
    // console.log(defaultInput);
    // var defaultInput = defaultInput.prototype.id = "0hrBpAOgrt8RXigk83LLNE";
    // spotify hash id
    songSearch(defaultInput);
} else if (songQuery.length > 0) {
    console.log('args');
    var userInput = new SearchConstructor('track', songQuery);
    songSearch(userInput);
}

function songSearch(searchObj) {
    spotify.search(searchObj, function(err, data) {

        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else if (!err) {
            console.log('Artist: ' + data.tracks.items[0] + '\n' +
                		'Song Name: ' + data.tracks.items[0].artists[0].name + '\n' +
                		'Album Name: ' + data.tracks.items[0].album.name + '\n'
            );


            confirm('Would you like to hear a sample?').then(function confirmed() {
                if (os.platform() === 'win32') {
                    browser.exec("Chrome.exe --window-position=0,0 --app=" + data.tracks.items[0].preview_url);
                } else if (os.platform === 'darwin') {
                    browser.exec("/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --app=" + data.tracks.items[0].preview_url);
                }
            }, function canceled() {
                console.log('Preview Url: ' + data.tracks.items[0].preview_url);
            });



            // console.log(data.tracks.items[0]);
            // console.log(data.tracks.items[0].artists[0].name);
            // console.log(data.tracks.items[0].album.name);

            // opn(data.tracks.items[0].preview_url, {app: 'chrome'});
            // console.log(data.tracks.items[0].preview_url);
            // var seachResult = data.tracks.items[0];
            // console.log(searchResult);
            // console.log(seachResult.name);
            // var localData = data.tracks.items[0];
            // console.log(localData.album.artists[0].name);

            // var artist = data.album.artist
            // var songnName = 
            // var preview = preview_url
            // var album = 
        }
    });
}




// lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback)
// search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback)
// get: function(query, hollaback) -- See http://developer.spotify.com/en/metadata-api/overview/
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from


// var program = require('..');

// console.log(__filename);
// console.log(arguments.callee.toString());

// console.log(process.argv.slice(2));

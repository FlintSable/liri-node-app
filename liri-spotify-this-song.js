const spotify = require('spotify');
// console.log(__filename);

var inputs = process.argv;
var songQuery = process.argv.slice(2).join(' ');


function SearchConstructor(arg1, arg2){
    this.type= arg1;
    this.query= arg2;
};


switch(inputs.length || songQuery.length){
    case (inputs.length === 2):
        console.log('no args');
        var defaultInput = new SearchConstructor('track', 'black sands');
        songSearch(defaultInput);
        break;
    case (songQuery.length > 0):
        console.log('args')
        break;

}



// if (inputs.length === 2){
//     console.log('no args');
//     var defaultInput = new SearchConstructor('track', 'black sands');
//     songSearch(defaultInput);
// } else if (songQuery.length > 0){
//     console.log('args')
// }

// object factory



// console.log(defaultInput);


function songSearch(searchObj) {
    // { type: 'track', query: 'black sands' }
    spotify.search(searchObj, function(err, data) {

        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else if (!err) {
            // if no data do then head back to the prompt
            console.log(data);
            // console.log(data.tracks.items[0]);
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

        // Do something with 'data' 
    });

}


function CustomView(artist, songName, preview, album){

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

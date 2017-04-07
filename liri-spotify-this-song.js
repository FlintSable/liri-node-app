const spotify = require('spotify');
// console.log(__filename);


console.log(process.argv.slice(2));


function songSearch() {
    spotify.search({ type: 'track', query: 'black sands' }, function(err, data) {

        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else if (!err) {
            var seachResult = data.tracks.items[0];
            // console.log(seachResult);
            console.log(seachResult.name);

     

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

songSearch();
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

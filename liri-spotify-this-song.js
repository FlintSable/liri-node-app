const spotify = require('spotify');
console.log(__filename);
// var program = require('..');


console.log(process.argv.slice(2));


function songSearch() {
    spotify.search({ type: 'track', query: 'black sands' }, function(err, data) {

        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else if (!err) {
        	console.log(data.tracks.items[0].album.name);
            console.log(data.tracks.items[1].album.name);
            var arr = data.tracks.items
            console.dir(JSON.stringify(arr[0].albums));
            for(nodes in arr){
                if(nodes.album === 'black sands'){
                    console.log(data.tracks[i].album.name + ' this was a match')
                }
            }

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

console.log(__filename);
// console.log(arguments.callee.toString());

console.log(process.argv.slice(2));

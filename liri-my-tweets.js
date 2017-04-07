// var program = require('..');
'use strict';

const credentials = require('./k/keys').twitterKeys;
const Twitter = require('twitter');

console.log(__filename);


var client = new Twitter({

    // consumer_key: process.env.TWITTER_CONSUMER_KEY,
    // consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    // access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    // access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret,
});

function getData() {

    const request = client.get('statuses/user_timeline', (error, tweets, response) => {
        if (!error && response.statusCode === 200) {
            // console.log(JSON.stringify(response, null, '\t'));

            let body = '';
            response.on('tweets', data => {
                body += tweets.toString();
            });

            response.on('end', () => {
                const gatheredObject = JSON.parse(body);
                console.dir(body);
            });


            // console.dir(tweets[3].text);
            for (var i = 0; i < tweets.length; i++) {
                console.log(i + ' ~~~~~~~~~~')
                console.log('                 ')
                console.log(tweets[i].created_at);
                console.log(tweets[i].text);

            }

        }
    });



}


function printData(time, date, data) {
    // should print to console
    // should append to file
    const viewData = `${time}, ${date}, ${data}`;
    // console.log(viewData);
}

getData();
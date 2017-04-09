'use strict';

const credentials = require('./k/keys').twitterKeys;
const Twitter = require('twitter');
var chalk = require('chalk');


var client = new Twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret,
});

function getData() {

    const request = client.get('statuses/user_timeline', (error, tweets, response) => {
        if (!error && response.statusCode === 200) {

            let body = '';
            response.on('tweets', data => {
                body += tweets.toString();
            });

            response.on('end', () => {
                const gatheredObject = JSON.parse(body);
                console.dir(body);
            });


            for (var i = 0; i < tweets.length; i++) {
                var tweetInfo = '~~~~~ '+ i +' ~~~~~' + '\n' +
                            tweets[i].created_at + '\n' + 
                            tweets[i].text + '\n' +
                            ' ~  ~  ~~ : ~~ ~  ~ ' + '\n' + 
                            '                   ';
            	console.log(chalk.blue.bgWhite(tweetInfo));

            }

        }
        
    });

}

getData();

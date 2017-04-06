#! /c/'Program Files (x86)'/nodejs/node

'use strict';

const https = require("https");
const program = require('commander');
const request = require('request');
const credentials = require('./k/keys').twitterKeys;
const Twitter = require('twitter');
const spotify = require('spotify');

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

const firstArg = process.argv[2];
console.log('~~~~~~~~~~~~');
// console.log(credentials.consumer_key);

let tweet = (user, options) => {
    console.log(process.argv);
    console.log("jello")
};
// tweet();
let noodleTweet = { screen_name: 'Nicholaor' };

// function MessageBuild
// constructor should include date and the text 
// console.log(client);

// var st = new StreamTweets(credentials);

function printData(time, date, data) {
	// should print to console
	// should append to file
    const viewData = `${time}, ${date}, ${data}`;
    // console.log(viewData);
}


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
            		console.log( i + ' ~~~~~~~~~~')
            		console.log('                 ')
            		console.log(tweets[i].created_at);
            		console.log(tweets[i].text);

            }

        }
    });



}


if(firstArg === "my-tweets"){
	//working now but would like to use the printData()
	getData();

}
// program
// 	.command('my-tweets [default]')
// 	.description('get the tweets')
// 	.option('-a, --all', 'list all files and folders')
// 	.option('-l, --long', '')
// 	.action(getData());

// program 
// 	.command('noodle []')
// 	.action(console.log('noodleTweet'));
// program.parse(process.argv);
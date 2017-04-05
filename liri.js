#! /c/'Program Files (x86)'/nodejs/node

'use strict';

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
// console.log(client);
console.log('~~~~~~~~~~~~')
// console.log(credentials.consumer_key);

let tweet = (user, options) => {
	console.log(process.argv);
	console.log("jello")
}
// tweet();
let noodleTweet = {screen_name: 'Nicholaor'};
// console.log(client);

// var st = new StreamTweets(credentials);

// st.stream('Javascript', function(results){
// 	console.log(results);
// })

client.get('statuses/user_timeline', (error, tweets, response) => {
  if (!error) {
    console.log(tweets);
    // console.log("asdfa");
  }
});

// program
// 	.command('tweet <user> [default]')
// 	.description('get the tweets')
// 	.option('-a, --all', 'list all files and folders')
// 	.option('-l, --long', '')
// 	.action(tweet);

// program 
// 	.command('noodle []')
// 	.action(noodleTweet);
// program.parse(process.argv);
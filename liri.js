#! /c/'Program Files (x86)'/nodejs/node

'use strict';

const program = require('commander');
const request = require('request');
const keys = require('./k/keys.js');
const twitter = require('twitter');
const spotify = require('spotify');


let tweet = (user, options) => {
	console.log(process.argv);
	console.log("jello")
}
let noodleTweet = {screen_name: 'nodejs'};
twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

program
	.command('tweet <user> [default]')
	.description('get the tweets')
	.option('-a, --all', 'list all files and folders')
	.option('-l, --long', '')
	.action(tweet);

program 
	.command('noodle []')
	.action(noodleTweet);
program.parse(process.argv);
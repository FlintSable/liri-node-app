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

program
	.command('tweet <user> [default]')
	.description('get the tweets')
	.option('-a, --all', 'list all files and folders')
	.option('-l, --long', '')
	.action(tweet);

program 
	.command('noodle <>')
program.parse(process.argv);
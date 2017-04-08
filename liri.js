#! /c/'Program Files (x86)'/nodejs/node

'use strict';

const program = require('commander');
const request = require('request');
const https = require("https");

console.log('~~~~~~~~~~~~');

program
 .command('my-tweets [default]', 'gather tweets')
 .command('spotify-this-song <query>','search song')
 .command('movie-this [query]', 'search movie')
 .command('do-what-it-says [argument]', 'do whatever')
 .parse(process.argv);


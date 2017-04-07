#! /c/'Program Files (x86)'/nodejs/node

'use strict';

const program = require('commander');
const request = require('request');
const https = require("https");

console.log('~~~~~~~~~~~~');

function printData(time, date, data) {
    // should print to console
    // should append to file
    const viewData = `${time}, ${date}, ${data}`;
    // console.log(viewData);
}

program
 .command('my-tweets [default]', 'gather tweets')
 .command('spotify-this-song <query>','search song')
 .command('movie-this [query]', 'search movie')
 .command('do-what-it-says [argument]', 'do whatever')
 .parse(process.argv);


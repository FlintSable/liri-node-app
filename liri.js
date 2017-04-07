#! /c/'Program Files (x86)'/nodejs/node

'use strict';

const program = require('commander');
const request = require('request');
const https = require("https");




console.log('~~~~~~~~~~~~');
// console.log(credentials.consumer_key);



// function MessageBuild
// constructor should include date and the text 
// console.log(client);

// var st = new StreamTweets(credentials);







// }

// const options = process.argv.slice(2);

// // .join(' ')
// for (var i = 0; i < options.length; i++) {
//     if(options[i] === "my-tweets"){
//         optionsParser(options[i]);
//     }else if(options[i] === "spotify-this-song"){
//         optionsParser(options[i]);
//     }
// }


// function optionsParser() {

//     switch (options) {
//         case "my-tweets":
//             getData();
//             break;
//         case "thunder":
//             console.log('thunders');
//             break;
//         default:
//             console.log('do not recognize that command');


//     }

// }

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

// program
//   .version('0.0.1')
//   .option('-v, --chdir <path>', 'change the working directory')
//   .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
//   .option('-T, --no-tests', 'ignore test hook');

// program
//   .command('my-tweets [opt]')
//   .description('get tweets')
//   .action(function(env, options){
//     getData();
//   });

// program
//   .command('spotify-this-song <song>')
//   .description('execute the given remote cmd')
//   .action(function(song){
//     console.log(song);
//   });

// program
//   .command('nude')
//   .action(function(env){
//     console.log('deploying "%s"', env);
//   });

// program.parse(process.argv);
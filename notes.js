// Require
const https = require("https");

// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
//print message to console


function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}


// the requet is actually inside of a function
function getProfile(username) {


    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
        // returns the reponse object
        //                          console.dir(response);
        //                          console.log(response.statusCode);

        let body = "";
        response.on('data', data => {
            // this will actualy return a buffer, data type
            body += data.toString();
            //                          console.log('data:', data);
            //                            console.log('data:', data.toString());
        });

        response.on('end', () => {
            const profile = JSON.parse(body);
            // this willl show you an object .dir
            //                            console.dir(profile);
            //                            console.log(body);
            //                            console.log(typeof body);
            printMessage(username, profile.badges.length, profile.points.JavaScript);


            // Print the data
        });

    });
}
console.log(process.argv);
//console.dir(process);
const users = ["chalkers", "alenaholligan", "nnoochlaor", "davemcfarland"]

users.forEach(getProfile);


//getProfile("nnoochlaor");
// Connect to the API URL (`https://teamtreehouse.com/${username}.json`)
// Read the data
// Parse the data
// Print the data


// System event
httpRequest.onreadystatechange = () => {
    switch (httpRequest.readyState) {
        case XMLHttpRequest.DONE:
            console.log("Finished");
            break;
    }
};

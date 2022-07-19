const fs = require("fs");
  
// STEP 1: Reading JSON file
const topics = require("./database.json");

const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
}

const topic_arr = syncReadFile('./topics.txt')

for (let i = 0; i < topic_arr.length; i++) {
	let topic = {
		"name": topic_arr[i],
		"websites": [

		]
	}
	topics.push(topic);
}

fs.writeFile("database.json", JSON.stringify(topics, null, '\t'), err => {
     
    // Checking for errors
    if (err) throw err; 
   
    console.log("Done writing"); // Success
});


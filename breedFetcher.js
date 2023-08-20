const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(`Error: ${error}`, null);
    }
    if (response.statusCode !== 200) {
      callback(`Status: ${response.statusCode}`, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`Breed Not Found: ${breedName}`, null);
    } else {
      const firstEntry = data[0];
      callback(null, firstEntry.description);
    }
  });
};


module.exports = { fetchBreedDescription };

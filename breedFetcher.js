const request = require("request");

const agrs = process.argv.slice(2);
const breedName = agrs[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error: ',error);
  } else if (response.statusCode !== 200) {
    console.error('Status: ', response.statusCode);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed Not Found: ', breedName);
    } else {
      const firstEntry = data[0];
      console.log(firstEntry.description);
    }
  }
});


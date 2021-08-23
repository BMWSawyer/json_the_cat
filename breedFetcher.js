const request = require('request');
const breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  const data = JSON.parse(body);

  if (error !== undefined) {
    console.log(`This error occured: ${error}`);
    process.exit;
  } else {
    if (data[0] === undefined) {
      console.log('The breed of cat you provided was not found. Please search another breed!');
      process.exit;
    } else {
      console.log(data[0].description);
    }
  }
});
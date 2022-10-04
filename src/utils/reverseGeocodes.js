const axios = require('axios');
require('dotenv').config();
// reverse geocodes a lat/long pair to a human readable address
// using the Google Maps API
// returns a promise that resolves to the address
//const loc = {lat: 6.5244, lng: 3.3792};
const reverseGeocode = async (locationCood) => {
  const {lat, lng} = locationCood;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_API_KEY}`;

  const data = await axios.get(url).then(response => response.data)
  //console.log(data)

  if (data.status === 'OK') {
    const address = data.results[0].formatted_address;
    console.log(address)
    return address;
  }else{
    return 'Unknown address';
  }
}

//console.log(reverseGeocode(loc)); //test module

module.exports = reverseGeocode;
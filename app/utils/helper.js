const bycrpt = require('bcrypt');
const axios = require('axios');
require('dotenv').config();

hashPassword = (password) => {
    const salt = 10;//bycrpt.genSaltSync(); //default 10
    return bycrpt.hash(password, salt);
}

comparePassword = (password, hashedPassword) => {
    return bycrpt.compare(password, hashedPassword);
}


// reverse geocodes a lat/long pair to a human readable address
// using the Google Maps API
// returns a promise that resolves to the address
//const loc = {lat: 6.5244, lng: 3.3792};
reverseGeocode = async (coords) => {
    const { latitude, longitude } = coords;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.GOOGLE_API_KEY}`;

    const data = await axios.get(url).then(response => response.data);

    if (data.status === 'OK') {
        const address = data.results[0].formatted_address;
        console.log(address)
        return address;
    } else {
        return 'Unknown address';
    }
}

const helper = {
    hashPassword,
    comparePassword,
    reverseGeocode
}
module.exports = helper
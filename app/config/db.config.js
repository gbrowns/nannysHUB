const mongoose = require('mongoose');

module.exports = { 
     mongoose,
     URL: process.env.DB_CONNECTION,
     OPTIONS: {
          useNewUrlParser: true,
          useUnifiedTopology: true
     }
}
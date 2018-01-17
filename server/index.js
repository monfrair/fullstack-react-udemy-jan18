const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');


require('./models/User');
require('./services/passport');


// mongoose.connect('keys.mongoURI');

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/testdb",
  {
    useMongoClient: true
  }
);


const app = express();

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
	console.log("Now listening on port " + PORT);
});



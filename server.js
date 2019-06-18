const express = require('express'); //import express
const connectDB = require('./config/db'); // import our DB;

const app = express(); // create new express app

//Connect Database;
connectDB();

app.get('/', (req, res) => res.send('API Running')); //get request with callback; respond with 'API Running' when a GET request is made to the homepage

const PORT = process.env.PORT || 5000; // PORT equal whatever is in the environment variable PORT (can be nessery for Heroku), or 5000 if there's nothing there (for local)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //binds and listens for connections on the specified host and port.

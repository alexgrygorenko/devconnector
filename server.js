const express = require('express'); //import express
const connectDB = require('./config/db'); // import our DB;

const app = express(); // create new express app

//Connect Database;
connectDB();

//Init Middleware
//This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(
  express.json({
    extended: false
  })
);

app.get('/', (req, res) => res.send('API Running')); //get request with callback; respond with 'API Running' when a GET request is made to the homepage

//define Routes
app.use('/api/users', require('./routes/api/users')); //  app.use(middleware) loading the middleware function
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000; // PORT equal whatever is in the environment variable PORT (can be nessery for Heroku), or 5000 if there's nothing there (for local)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //binds and listens for connections on the specified host and port.

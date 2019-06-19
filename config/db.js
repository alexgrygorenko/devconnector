const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Create async function (An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.)
const connectDB = async () => {
  try {
    // The await operator is used to wait for a Promise. It can only be used inside an async function.
    await mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err);
    // Exit process with failure;
    process.exit(1);
  }
};

module.exports = connectDB;

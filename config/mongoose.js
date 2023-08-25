// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

// const db = mongoose.connection;

// //error
// db.on('error', function(err) { console.log(err.message); });

// //up and running then print the message
// db.once('open', function() {
  
//     console.log("Successfully connected to the database");

// });



// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contact-list-db');
// await mongoose.connect('mongodb+srv://yugal:yugal123@mongosy.8gfmfes.mongodb.net/MongoSY');

//   mongodb+srv://yugal:<password>@mongosy.8gfmfes.mongodb.net/

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// mongoose.connect('mongodb://127.0.0.1:27017/contact-list-db');

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { 
    console.log(err.message); 
});

//up and running then print the message
db.once('open', function() {
    console.log("Successfully connected to the database");
});
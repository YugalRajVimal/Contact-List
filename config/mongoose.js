// Require the libraries
const mongoose = require('mongoose');

//Connect to the Database
mongoose.connect('mongodb://localhost/contact_list_db');

// mongoose.connect('mongodb://127.0.0.1:27017/myapp');

//Acquire the connection (to check if it Successful)
const db = mongoose.connection;

//Error
db.on('error', function(err) { console.log(err.message); });

//Up and Handling then print the message
db.once('open', function(){
    console.log('Successfully Connected to the database')
})
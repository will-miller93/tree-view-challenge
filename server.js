// Dependencies
// require dotenv first
require('dotenv').config();

// require rest of dependencies here.
const express = require('express');
const bodyParser = require('body-parser');
const io = require('socket.io')(http);

// model file requirements
const branch = require('./models/branch');
const root = require('./models/root');

// other constants needed
const PORT = process.env.PORT || 3001
const app = express();
const Router = express.Router();

// define Middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// Route (just one get route for socket to work)
// this will probably be a sendFile get route. it should send the single HTML page 
// if there was a static HTML page but with React it may be different

// set up the Socket.io connection
io.on('connection', (client) => {
    // this is where all of the 'event handlers' for socket go.
    
    // the event emitters will be in the React Component App.js

    // socket code that goes here...
        // on create, update and delete branches
        // on create leaves

    // socket.on disconnect event handler
    socket.on('disconnect', function(){
        console.log('User has disconnected...');
    });
});

// set up the Socket.io Listener
const port = 8000;
io.listen(port);
console.log('Socket listening on port ' + port);

// set up app listener
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
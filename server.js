// Dependencies
// require dotenv first
require('dotenv').config();

// require rest of dependencies here.
const express = require('express');
const bodyParser = require('body-parser');
const io = require('socket.io')(); // this is the inital socket.io set up

// model file requirements
const branch = require('./models/branch');
const leaf = require('./models/leaf');

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
io.on('connection', (socket) => {
    console.log('New user has connected..');
    // this is where all of the 'event handlers' for socket go.
    // all of these .on methods should include the functionality code for creating/updating/deleting in the DB
    // use the Models here in each one to be able to access the database.
    socket.on('get branches', (cb) => {
        console.log("branches got");
        io.sockets.emit('get branches', (cb));
    });

    socket.on('create branch', (cb) => {
        console.log("branch created");
        io.sockets.emit('create branch', (cb));       
    });

    socket.on('update branch', (cb) => {
        console.log("branch updated");
        // you will emit changes to the branch back to the client
        io.sockets.emit('update branch', (cb));
    });

    socket.on('delete branch', (cb) => {
        console.log("branch deleted");
        // you will emit the deletion of a branch to all clients
        io.sockets.emit('delete branch', (cb));
    });

    // socket.on disconnect event handler
    socket.on('disconnect', () => {
        console.log('User has disconnected..');
    });
});

// set up the Socket.io Listener
// const port = 8000;
// io.listen(port);
// console.log('Socket listening on port ' + port);

// set up app listener
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
// Dependencies
// require dotenv first
require('dotenv').config();

// require rest of dependencies here.
const express = require('express');
const bodyParser = require('body-parser');
const io = require('socket.io')(); // this is the inital socket.io set up

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
    client.on('getBranches', function() {
        console.log("branches got");
        // select all from branch model
        // select from leaf data
        // you will emit back to all clients the branches.
    });
    client.on('createBranches', function() {
        console.log("branch created");
        
        // you will emit the newly created branch back to client
    });
    client.on('updateBranch', function() {
        console.log("branch updated");
        // you will emit changes to the branch back to the client
    });
    client.on('deleteBranch', function() {
        console.log("branch deleted");
        // you will emit the deletion of a branch to all clients
    });
    client.on('createLeaves', function() {
        console.log("leaves created");
        // you will emit the creation of leaves to all clients
        // client.emit('EventName', function() {

        // })  
    });

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
// Dependencies
// require dotenv first
require('dotenv').config();

// require rest of dependencies here.
const express = require('express');
const bodyParser = require('body-parser');
const io = require('socket.io')(); // this is the inital socket.io set up

// model file requirements
const Branch = require('./models/branch');
const Leaf = require('./models/leaf');

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

    socket.on('get branches', (cb) => {
        console.log("branches got");
        // use models here to access database. you will manipulate database in here

        // you will emit the branches to all clients
        io.sockets.emit('get branches', (cb));
    });

    socket.on('create branch', (newBranchName) => {
        console.log("branch created");
        // use models here to access database. you will manipulate database in here
        Branch.create(['branch_name'], newBranchName, function(results){
            console.log('New Branch added to database');
        })
        // you will emit the created branch back to all clients
        io.sockets.emit('create branch', (newBranchName));       
    });

    socket.on('update branch', (newBranchName, branch_id, newChildren, newMinRange, newMaxRange) => {
        console.log("branch updated");
        // use models here to access database. you will manipulate database in here
        

        // you will emit changes to the branch back to the client
        io.sockets.emit('update branch', (newBranchName, branch_id, newChildren, newMinRange, newMaxRange));
    });

    socket.on('delete branch', (branch_id) => {
        console.log("branch deleted");
        // use models here to access database. you will manipulate database in here

        // you will emit the deletion of a branch to all clients
        io.sockets.emit('delete branch', (branch_id));
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
// Dependencies
// require dotenv first
require('dotenv').config();

// require rest of dependencies here.
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// model file requirements
const Branch = require('./models/branch');
const Leaf = require('./models/leaf');

// other constants needed
const PORT = process.env.PORT || 3306;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server); // this is the inital socket.io set up
server.listen(PORT);

app.use(cors({origin: 'http:localhost:3306'}));
app.use(function (req, res, next){
    // website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', 'http:localhost:3000');

    // request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

const Router = express.Router();
const connection = require('./config/connection.js');

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

    socket.on('getAllBranches', () => {
        console.log("getting branches from database");
        // use models here to access database. you will manipulate database in here
        Branch.selectAll(function(branchData){
            console.log('branches have been retrieved from database');
            Leaf.selectAll(function(leafData){
                console.log('leaves have been retrieved from database');
                io.sockets.emit('getAllBranches', {branchData, leafData});
            });
        });
    });

    socket.on('createBranch', (newBranchName) => {
        console.log("creating branch");
        console.log(newBranchName);
        // use models here to access database. you will manipulate database in here
        Branch.create(["name"], [newBranchName], function(results){
            console.log('New Branch added to database');
            Branch.selectAll(function(branchData){
                console.log('branches retrieved after branch create');
                Leaf.selectAll(function(leafData){
                    console.log('leaves retrieved after branch create');
                    io.sockets.emit('getAllBranches', {branchData, leafData});
                })
            })
        })      
    });

    socket.on('updateBranch', (newBranchName, branch_id, newChildren, newMinRange, newMaxRange) => {
        console.log("updating branch");
        // use models here to access database. you will manipulate database in here
        Branch.update({'branch_name': `'${newBranchName}'`, 'children': `'${newChildren}'`, 'min_range':`'${newMinRange}'`, 'max_range': `'${newMaxRange}'`}, `branch_id = ${branch_id}`, function(results){
            console.log('branch updated');
            Branch.selectAll(function(branchData){
                Leaf.selectAll(function(leafData){
                    io.sockets.emit('getAllBranches', (branchData, leafData));
                })
            })
        })
    });

    socket.on('deleteBranch', (branch_id) => {
        console.log("deleting branch");
        // use models here to access database. you will manipulate database in here
        // delete leaves then delete branches
        Leaf.delete([branch_id], [branch_id], function(results){
            console.log('branch deleted');
            Branch.delete([branch_id], [branch_id], function(results){
                Branch.selectAll(function(branchData){
                    Leaf.selectAll(function(leafData){
                        io.sockets.emit('getAllBranches', (branchData, leafData));
                    })
                })
            })
        })
    });

    // socket.on disconnect event handler
    socket.on('disconnect', () => {
        console.log('User has disconnected..');
    });
});


// set up database listener
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + "\n");
// });

// set up app listener
// app.listen(PORT, () => {
//     console.log(`app listening on port ${PORT}`);
// });
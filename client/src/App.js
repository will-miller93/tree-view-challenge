import React, { Component } from 'react';
import AddBar from './components/addBar/addBar';
// import Branch from './components/Branch/branch';
import Container from './components/Grid/container';
// import Row from './components/Grid/row';
// import Col from './components/Grid/col';
import Jumbotron from './components/Jumbotron/jumbotron';
import EditingModal from './components/editingModal/editingModal';
// import Leaf from './components/Leaf/leaf';
import List from './components/list/list.js';
import ListItem from './components/listItem/listItem';
import './App.css';

import socketIOClient from 'socket.io-client';

class App extends Component {
  // manage state of data here
  constructor(props) {
    super(props);
    this.state = {
      branches: ["test", "test2"],
      leaves: ["1", "2", "3", "4"],
      name: "",
      branch_id: "",
      leaf_id: ""
    };
  }

  // Emit Event Listeners //
  //======================//
  
  componentDidMount() {
    // Socket.io connection for recieving emit events go here.
    const socket = socketIOClient('http://localhost:3001');

    // maybe call the getBranches() helper function for when page loads.???

    // .on methods for recieving emitters from server.
    socket.on('create branch', () => {
      console.log('create branch emitted recieved from server');
      // this create branch emit listener should have the create branch helper function executed here
      createBranch();
    });

    socket.on('update branch', () => {
      console.log('update branch emitter recieved from server');
      // this update branch emit listener should have the update branch helper function executed here
      updateBranch();
    });

    socket.on('delete branch', () => {
      console.log('delete branch emitter recieved from server');
      // this delete branch emit listener should have the delete branch helper function executed here
      deleteBranch();
    });

    socket.on('get branches', () => {
      console.log('get branches emitter recieved from server');
      // this get branches emit listener should have the get branches helper function executed here
      getBranches();
    });
    
  };

  // Emit Event Functions //
  //======================//

  sendCreateBranch = () => {
    // will be passed to submit button through props
    // create socket variable and connect to the server port
    const socket = socketIOClient('http://localhost:3001');

    // need to create a branch. (dynamically insert into the dom.)
    // emitter method for the Create Branch event.
    socket.emit('create branch', () => {
      console.log('branch create emitted from client');

    });

  };

  sendUpdateBranch = () => {
    // will be passed to save button through props
    const socket = socketIOClient('http://localhost:3001');

    // emitter method for update branch event.
    socket.emit('update branch', () => {
      console.log('update branch emitted from client');

    });

  };

  sendDeleteBranch = () => {
    // will be passed to delete button through props
    const socket = socketIOClient('http://localhost:3001');

    // emitter method for delete branch event. 
    socket.emit('delete branch', () => {
      console.log('delete branch emitted from client');

    });

  };

  sendGetBranches = () => {
    // this will happen on page load and maybe everytime that a branch is updated etc.
    const socket = socketIOClient('http://localhost:3001');

    // emitter method for getbranches event
    socket.emit('get branches', () => {
      console.log('get branches emitted from client');
      
    });

  };

  // Helper Functions //
  //==================//
  // these functions should have the functionality to gather data and then send data.
  // they should send the data to the server and the server will create/update/delete in the DB

  getBranches = () => {
    // needs branch_name, id, children, min_range, max_range
  };

  createBranch = () => {
    // needs branch_name, id
  };

  updateBranch = () => {
    // needs branch_name, id, children, min_range, max_range
  };

  deleteBranch = () => {
    // needs id
  };
  
  
  render() {
    return (

      <div className="app">
        <EditingModal />
        <Jumbotron />
        <AddBar />
        <Container>

        </Container>
      </div>
    );
  }
}

export default App;


// {this.state.branches.length ? (
//   <List>
//     {this.state.branches.map(branch => (
//       <ListItem key={this.state.branch_id}>
//         <Branch>
//         {/* you need to add leaf conditional rendering */}
//         </Branch>
//       </ListItem>
//     ))}
//   </List>
// ) : (
//   <h3>No Branches have been created. try making one.</h3>
// )}
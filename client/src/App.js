import React, { Component } from 'react';
import AddBar from './components/addBar/addBar';
import Branch from './components/Branch/branch';
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
      branches: [],
      children: ["1", "2", "3", "4"],
      branch_name: "",
      branch_id: "",
      leaf_id: "",
      min_range: "",
      max_range: "",
      disabled: true,
    };
  }

  // Emit Event Listeners //
  //======================//
  
  componentDidMount() {
    // Socket.io connection for recieving emit events go here.
    // const socket = socketIOClient('http://localhost:3001');

    // // maybe call the getBranches() helper function for when page loads.???

    // // .on methods for recieving emitters from server.
    // socket.on('create branch', () => {
    //   console.log('create branch emitted recieved from server');
    //   // this create branch emit listener should have the create branch helper function executed here
    //  
    // });

    // socket.on('update branch', () => {
    //   console.log('update branch emitter recieved from server');
    //   // this update branch emit listener should have the update branch helper function executed here
    //   
    // });

    // socket.on('delete branch', () => {
    //   console.log('delete branch emitter recieved from server');
    //   // this delete branch emit listener should have the delete branch helper function executed here
    //   
    // });

    // socket.on('get branches', () => {
    //   console.log('get branches emitter recieved from server');
    //   // this get branches emit listener should have the get branches helper function executed here
    //   
    // });
    
  };

  // Emit Event Functions //
  //======================//

  createBranch = () => {
    const socket = socketIOClient('http://localhost:3001');
    // declare variables for data that you are sending.
    var newBranchName = this.state.branch_name;

    // now emit the information to create a branch.
    socket.emit('create branch', (newBranchName));

  };

  updateBranch = () => {
    const socket = socketIOClient('http://localhost:3001');
    // declare variables for each bit of data you need to send for update
    var newBranchName = this.state.branch_name;
    var branch_id = this.state.branch_id;
    var newChildren = this.state.children;
    var newMinRange = this.state.min_range;
    var newMaxRange = this.state.max_range;
  

    // now emit the data to the server.
    socket.emit('update branch', (newBranchName, branch_id, newChildren, newMinRange, newMaxRange));

  };

  deleteBranch = () => {
    const socket = socketIOClient('http://localhost:3001');
    // declare variables for all the data you need to send
    var branch_id = this.state.branch_id;

    // now emit the data needed to the server. 
    socket.emit('delete branch', (branch_id));

  };

  // sendGetBranches = () => {
  //   // this will happen on page load and maybe everytime that a branch is updated etc.
  //   const socket = socketIOClient('http://localhost:3001');

  //   // emitter method for getbranches event
  //   socket.emit('get branches', () => {
  //     console.log('get branches emitted from client');
      
  //   });

  // };

  // Helper Functions //
  //==================//

  // changes disabled property in editing modal inputs.
  toggleModalInput = () => {
    // change state of disabled.
    console.log('clicked');
    console.log(this.state.disabled);
    if ( this.state.disabled === true ) {
      this.setState({
        disabled: false
      });
      console.log('Input enabled');
    } else if (this.state.disabled === false) {
      this.setState({
        disabled: true
      });
      console.log('Input disabled');
    };
  };

  handleInputChange = (event) => {
    // this is input change for all of the modal inputs.
    const {name, value} = event.target;
    this.setState({
      [name] : value
    });
    console.log(this.state.branch_name);
    console.log(this.state.children);
    console.log(this.state.min_range);
    console.log(this.state.max_range);
    
  };

  fillModalInput = () => {

  }

  renderBranches = () => {

  }

  render() {
    return (

      <div className="app">
        <EditingModal handleModalChange={this.handleInputChange} toggleInput={this.toggleModalInput} disabledValue={this.state.disabled} />
        <Jumbotron objectTest={this.testingStateObject}/>
        <AddBar createBranch={this.createBranch} newBranchName={this.handleInputChange}/>
        <Container>
          {this.state.branches.length ? (
            <List>
              {this.state.branches.map(branch => (
                <ListItem>
                {/* instead of using this.state.branch_name, name them using array index */}
                  <Branch branchName={this.state.branches}>
                  {/* this is where leaf generation will go. */}
                  </Branch>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No branches have been made yet. Try making one.</h3>
          )}
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


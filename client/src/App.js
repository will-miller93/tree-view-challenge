import React, { Component } from 'react';
import AddBar from './components/addBar/addBar';
// import Branch from './components/Branch/branch';
import Container from './components/Grid/container';
// import Row from './components/Grid/row';
// import Col from './components/Grid/col';
import Jumbotron from './components/Jumbotron/jumbotron';
import EditingModal from './components/editingModal/editingModal';
// import Leaf from './components/Leaf/leaf';
// import List from './components/list/list.js';
// import ListItem from './components/listItem/listItem';
import './App.css';

import socketIOClient from 'socket.io-client';

class App extends Component {
  // manage state of data here
  constructor(props) {
    super(props);
    this.state = {
      newBranches: [],
      newLeaves: [],
      branches: [{
        branch_name: '',
        branch_id: '',
        min_range: '',
        max_range: '',
      }],
      children: [{
        leaf_id: '',
        leaf_name: ''
      }],
      disabled: true,
    };
  
  }
  
  // Emit Event Listeners //
  //======================//

  componentDidMount() {
    // Socket.io connection for recieving emit events go here.
    const socket = socketIOClient('http://localhost:3306');
    // getAllBranches emit listener
    socket.on('getAllBranches', (results) => {
      // results returns both the branchData and the leafData
      console.log('getAllBranches was emitted and recieved!');
      console.log(results);
      this.setState({
        newBranches: results.branchData,
        newLeaves: results.leafData
      });
      
      

    });
    // emit getAllBranches to get them on page load.
    socket.emit('getAllBranches');
  };

  // Emit Event Functions //
  //======================//

  createBranch = () => {
    const socket = socketIOClient('http://localhost:3306');
    // declare variables for data that you are sending.
    var newBranchName = this.state.branch_name;
    console.log('create branch function called.');
    console.log(newBranchName);
    // now emit the information to create a branch.
    socket.emit('createBranch', (newBranchName));

  };

  updateBranch = () => {
    const socket = socketIOClient('http://localhost:3306');
    // declare variables for each bit of data you need to send for update
    var newBranchName = this.state.branch_name;
    var branch_id = this.state.branch_id;
    var newChildren = this.state.children;
    var newMinRange = this.state.min_range;
    var newMaxRange = this.state.max_range;
  

    // now emit the data to the server.
    socket.emit('updateBranch', (newBranchName, branch_id, newChildren, newMinRange, newMaxRange));

  };

  deleteBranch = () => {
    const socket = socketIOClient('http://localhost:3306');
    // declare variables for all the data you need to send
    var branch_id = this.state.branch_id;

    // now emit the data needed to the server. 
    socket.emit('deleteBranch', (branch_id));

  };

  createLeaves = () => {
    const socket = socketIOClient('http://localhost:3306');
    var branch_id = this.state.branch_id;
    var min_range = this.state.min_range;
    var max_range = this.state.max_range;
    var children = this.state.children;

    socket.emit('createLeaves', (branch_id, min_range, max_range, children)); 
  };


  // Helper Functions //
  //==================//


  // state reset helper function
  resetToInitialState = () => {
    this.setState({
      branches: [{
        branch_name: '',
        branch_id: '',
        min_range: '',
        max_range: '',
        children: [{
          leaf_id: '',
          leaf_name: ''
        }]
      }]
    });
  };

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
    // console.log(this.state.branch_id);
    // console.log(this.state.min_range);
    // console.log(this.state.max_range);
    // console.log(this.state.children);
    
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
          

        </Container>
      </div>
    );
  }
}

export default App;

// {this.state.branches.length ? (
//   <List>
//     {this.state.branches.map(branch => (
//       <ListItem>
//       {/* instead of using this.state.branch_name, name them using array index */}
//         <Branch branchName={this.state.branches}>
//         {/* this is where leaf generation will go. */}
//         </Branch>
//       </ListItem>
//     ))}
//   </List>
// ) : (
//   <h3>No branches have been made yet. Try making one.</h3>
// )}

// const branchesArray = this.state.branches;
// const branch_id = dbData[i].branch_id;
// const branch_name = dbData[i].branch_name;
// const min_range = dbData[i].min_range;
// const max_range = dbData[i].max_range;
// const leaf_name = dbData[i].children[i].leaf_name;
// const leaf_id = dbData[i].children[i].leaf_id;
// for (var i = 0; i < dbData.length; i++) {
//   for (var x = 0; x < branchesArray.length; x++) {
//     for (var z = 0; z < branchesArray.children.length; z++) {
//       branchesArray.push(branch_id, branch_name, min_range, max_range);
//       branchesArray[i].children.push(leaf_name, leaf_id)

//     }
//   }
// }

// branchArr.push([...branch_name, dbData[i].branch_name], [...branch_id, dbData[i].branch_id], [...min_range, dbData[i].min_range], [...max_range, dbData[i].max_range]);
// childrenArr.push([...leaf_id, dbData[i].leaf_id], [...leaf_name, dbData[i].leaf_name]);
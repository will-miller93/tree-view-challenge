import React, { Component } from 'react';
import AddBar from './components/addBar/addBar';
import Branch from './components/Branch/branch';
import Container from './components/Grid/container';
import Row from './components/Grid/row';
import Col from './components/Grid/col';
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
      newBranches: [],
      newLeaves: [],
      branch_name: '',
      branch_id: '',
      min_range: '',
      max_range: '',
      children: '',
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
    var newBranchName = this.state.branch_name;
    console.log('create branch function called.');
    console.log(newBranchName);
    // now emit the information to create a branch.
    socket.emit('createBranch', (newBranchName));

  };

  updateBranch = (event) => {
    const socket = socketIOClient('http://localhost:3306');
    // declare variables for each bit of data you need to send for update
    var newBranchName = this.state.branch_name;
    var newChildren = this.state.children;
    var newMinRange = this.state.min_range;
    var newMaxRange = this.state.max_range;
    var branch_id = this.state.branch_id;
    console.log(newBranchName);
    console.log(newChildren);
    console.log(newMinRange);
    console.log(newMaxRange);
    console.log(branch_id);
  

    // now emit the data to the server.
    socket.emit('updateBranch', newBranchName, newChildren, newMinRange, newMaxRange, branch_id);

  };

  deleteBranch = (event) => {
    const socket = socketIOClient('http://localhost:3306');
    // console.log(event.target.getAttribute('id'));
    var branch_id = event.target.getAttribute('id'); // this needs to grab the id of the deletebutton
    // now emit the data needed to the server. 
    socket.emit('deleteBranch', (branch_id));

  };

  createLeaves = () => {
    const socket = socketIOClient('http://localhost:3306');
    var branch_id = this.state.branch_id;
    var min_range = this.state.min_range;
    var max_range = this.state.max_range;
    var children = this.state.children;

    socket.emit('createLeaves', branch_id, min_range, max_range, children); 
  };

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

  getBranchId = (event) => {
    this.setState({
      branch_id: event.target.name
    });
  };

  handleInputChange = (event) => {
    // this is input change for all of the modal inputs.
    this.setState({
      [event.target.name] : event.target.value
    });
    // console.log(this.state.branch_id);
    console.log(this.state.branch_name);
    console.log(this.state.children);
    console.log(this.state.min_range);
    console.log(this.state.max_range);
  };

  render() {

    return (
  
      <div className="app">
        <EditingModal  updateBranch={this.updateBranch} inputChange={this.handleInputChange} toggleInput={this.toggleModalInput} disabledValue={this.state.disabled} />
        <Jumbotron objectTest={this.testingStateObject}/>
        <AddBar createBranch={this.createBranch} newBranchName={this.handleInputChange}/>
        <Container>
          <List>
          {this.state.newBranches.length ? (
            <ListItem>
              {this.state.newBranches.map((branch, index) => (
                <Row>
                  <Col size="md-6">
                    <Branch getBranchId={this.getBranchId} deleteBranch={this.deleteBranch} branch_id={this.state.newBranches[index].branch_id} branchName={this.state.newBranches[index].name} key={index} children={this.state.newBranches[index].children} min_range={this.state.newBranches[index].min_range} max_range={this.state.newBranches[index].max_range} />
                    <List>
                      {this.state.newLeaves.branch_id === this.state.newBranches.branch_id & this.state.newBranches[index].children !== null ? (
                        <Row>
                          <Col size="md-3">

                          </Col>
                        </Row>
                      ):(console.log('please work.'))}
                    </List>
                  </Col>
                </Row>
              ))}
            </ListItem>
          ) : (
            <h4>There are no branches made yet. Try making one.</h4>
          )}
          </List>
        </Container>
      </div>
    );
  }
}

export default App;




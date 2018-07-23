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

// import io from 'socket.io-client';
// let socket = io(`http://localhost:3001`);

class App extends Component {
  // manage state of data here
  constructor(props) {
    super(props);
    this.state = {
      modalHidden: "false",
      branches: [{
        name: "",
        id: "",
        leaves: [{
          name: "",
          id: ""
        }]
      }]
    };
  }

  

  componentDidMount() {
    // inside this lifecycle event is where all of the socket emitters will go
    this.getBranches();
  };

  createBranch = () => {
    // will be passed to submit button through props


  };

  updateBranch = () => {
    // will be passed to save button through props

  };

  deleteBranch = () => {
    // will be passed to delete button through props

  };

  getBranches = () => {
    // this will happen on page load and maybe everytime that a branch is updated etc.

  };

  // for the open and close modal functions you will need to pass the values down through state to the editing modal.
  // done by passing passedVal={this.state.val} into <EditingModal/> then in the editing modal component
  // you will need to pass {this.props.passedVal}
  openModal = (event) => {
    // open modal here
    event.preventDefault();
    this.setState({
      modalHidden: "false"
    });
  } 

  closeModal = (event) => {
    // close modal here
    event.preventDefault();
    this.setState({
      modalHidden: "true"
    });
  } 

  handleInputChange = (event) => {

  } 
  
  

  render() {
    return (

      <div className="app">
        <EditingModal passedVal={this.state.modalHidden}/>
        <Jumbotron />
        <AddBar createBranch={this.createBranch} handleInputChange={this.handleInputChange}/>
        <Container>

        </Container>
      </div>
    );
  }
}

export default App;

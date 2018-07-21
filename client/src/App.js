import React, { Component } from 'react';
import AddBar from './components/addBar/addBar';
import Branch from './components/Branch/branch';
// import EditingModal from './components/editingModal/editingModal';
import Container from './components/Grid/container';
import Row from './components/Grid/row';
import Col from './components/Grid/col';
import Jumbotron from './components/Jumbotron/jumbotron';
import Leaf from './components/Leaf/leaf';


// import io from 'socket.io-client';
// let socket = io(`http://localhost:3001`);

class App extends Component {
  // manage state of data here

  // componentDidMount Lifecycle event
    // inside this lifecycle event is where all of the socket emitters will go

  // function to create new branch
    // will be passed to submit button through props

  // function to update branch
    // will be passed to save button through props

  // function to delete branch
    // will be passed to delete button through props

  // function to get all branches
    // this will happen on page load and maybe everytime that a branch is updated etc.


  render() {
    return (
      <div className="app">
        <Jumbotron />
        <AddBar />
        <Container>
          <Row>
            <Col size="md-3">
              <Branch />
            </Col>
          </Row>
          <Row>
              <Col size="md-3">
                <ul>
                  <li>
                    <Leaf />
                  </li>
                  <li>
                    <Leaf />
                  </li>
                  <li>
                    <Leaf />
                  </li>
                  <li>
                    <Leaf />
                  </li>
                  <li>
                    <Leaf />
                  </li>
                </ul>
              </Col>
          </Row>
          <Row>
            <Col size="md-3">
              <Branch />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

// Import here
import React from 'react';
import './jumbotron.css';

const Jumbotron = (props) => (
    <div className="jumbotron jumbotron-fluid">
        <h1 onClick={props.objectTest} className="jtronHeader"> Tree Viewer App </h1>
        <p className="instr">Type a Name into input field and click the submit button to create a branch.</p>
    </div>
);

export default Jumbotron;
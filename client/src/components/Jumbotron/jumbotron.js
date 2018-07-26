// Import here
import React from 'react';
import './jumbotron.css';

const Jumbotron = (props) => (
    <div className="jumbotron jumbotron-fluid">
        <h1 onClick={props.objectTest} className="jtronHeader"> Tree Viewer App </h1>
        <p className="instr">This is where the instructions will go. don't go overboard with it just keep them simple</p>
    </div>
);

export default Jumbotron;

// Don't forget to Export
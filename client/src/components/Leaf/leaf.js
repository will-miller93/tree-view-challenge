import React from 'react';
import './leaf.css';

const Leaf = (props) => (
    <button id={props.id} name={props.name} type="button" className="btn btn-info leafBtn" disabled>{props.name}</button>
);

export default Leaf;



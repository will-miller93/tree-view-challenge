import React from 'react';
import './editButton.css';

const EditButton = (props) => (
    <div>
        <button onClick={props.toggleInput} type="button" className="btn btn-warning editButton"> Edit </button>  
    </div>
);

export default EditButton;
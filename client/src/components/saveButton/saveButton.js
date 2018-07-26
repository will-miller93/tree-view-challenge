import React from 'react';
import './saveButton.css';

const SaveButton = (props) => (
    <div>
        <button onClick={props.toggleInput} id="saveAndClose" type="button" className="btn btn-primary saveBtn" data-toggle="modal" data-target="#editingModal"> Save Branch </button>
    </div>
);

export default SaveButton;

// this is the button that will be used to save the changes to branches.
// will go in the editing modal. will be connected to Update Functions
import React from 'react';
import './saveButton.css';

const SaveButton = () => (
    <div>
        <button id="saveAndClose" type="button" className="btn btn-primary saveBtn"> Save Branch </button>
    </div>
);

export default SaveButton;

// this is the button that will be used to save the changes to branches.
// will go in the editing modal. will be connected to Update Functions
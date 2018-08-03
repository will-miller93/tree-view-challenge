import React from 'react';
import './saveButton.css';

const SaveButton = (props) => (
    <div>
        <button onClick={props.handleSave} id="saveAndClose" type="button" className="btn btn-primary saveBtn" data-toggle="modal" data-target="#editingModal"> Save Branch </button>
    </div>
);

export default SaveButton;

import React from 'react';
import './submitButton.css';

const SubmitButton = (createBranch, handleInputChange) => (
    <div>
        <div className="input-group addBranch">
            <input handleInputChange={() => this.handleInputChange} type="text" className="form-control" placeholder="Type Branch Name Here" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button onClick={() => this.createBranch} className="btn btn-outline-secondary addBranchBtn" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    </div>
);

export default SubmitButton;

// this will be the button in the "Create Bar" 
// will be connected to the Create Functionality
// used to make a new branch
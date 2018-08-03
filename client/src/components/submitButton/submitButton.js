import React from 'react';
import './submitButton.css';

const SubmitButton = (props) => (
    <div>
        <div className="input-group addBranch">
            <input onChange={props.newBranchName} id="createBranchName" name="branch_name" type="text" className="form-control" placeholder="Type Branch Name Here" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button onClick={props.handleSubmit} className="btn btn-outline-secondary addBranchBtn" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    </div>
);

export default SubmitButton;
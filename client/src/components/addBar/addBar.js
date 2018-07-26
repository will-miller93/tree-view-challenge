import React from 'react';
import SubmitButton from '../submitButton/submitButton';
import './addBar.css';

const AddBar = (props) => (
    <div>
        <nav className="navbar bg-dark">
            <SubmitButton createBranch={props.createBranch} newBranchName={props.newBranchName}/>
        </nav>
    </div>
);

export default AddBar;

// you will pass the create functionality down to the SubmitButton through props
// the functionality will be in app.js thats where the functions will be passed from.
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
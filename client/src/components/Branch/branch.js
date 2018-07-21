import React from 'react';
// import DeleteButton from '../deleteButton/deleteButton';
import './branch.css';

const Branch = () => (
    <div>
        <button type="button" className="btn btn-danger deleteBranch"> X </button>
        <button type='button' className='btn btn-secondary branchBtn' data-toggle='modal' data-target='#editingModal'> Branch </button>
    </div>
);

export default Branch;

// this is the button that will be the element representing the Branch. 
// this will be clickable and will open the editing modal.

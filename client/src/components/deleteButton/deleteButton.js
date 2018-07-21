import React from 'react';
import './deleteButton.css';

const DeleteButton = () => (
    <div>
        <button type='button' className='btn btn-danger deleteBranch'> Delete Branch </button>
    </div>
);

export default DeleteButton;

// This will be the button used to delete an entire branch. 
// will be next to the branch button. 
// connected to Delete Functions
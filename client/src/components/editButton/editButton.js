import React from 'react';
import './editButton.css';

const EditButton = (props) => (
    <div>
        <button onClick={props.toggleInput} type="button" className="btn btn-warning editButton"> Edit </button>  
    </div>
);

export default EditButton;

// this is the editing button. it is used to start the edit of a branch.
// this is inside the editing modal and users will need to click this to start
// editing their branch.
// this wont have any crud functionality but will simply make elements able to be 
// edited/updated.


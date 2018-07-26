import React from 'react';
import Row from '../Grid/row';
import Col from '../Grid/col';

// import DeleteButton from '../deleteButton/deleteButton';
import './branch.css';

const Branch = (props) => (
    <Row>
        <Col size="md-6">
            <div>
                <button id="deleteBranchBtn"  type="button" className="btn btn-danger deleteBranch"> X </button>
                <button id="modalOpen" type='button' className='btn btn-secondary branchBtn' data-toggle='modal' data-target='#editingModal' name={props.branchName} children="" min_range="" max_range=""> {props.branchName} </button>
            </div>
        </Col>
        {/* leaf generation goes here */}
    </Row>
);

export default Branch;

// this is the button that will be the element representing the Branch. 
// this will be clickable and will open the editing modal.




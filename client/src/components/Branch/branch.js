import React from 'react';
// import Row from '../Grid/row';
// import Col from '../Grid/col';
// import Leaf from '../Leaf/leaf';
// import List from '../list/list';
import './branch.css';



const Branch = (props) => (
    <div>
        <button id={props.branch_id} onClick={props.deleteBranch}  type="button" className="btn btn-danger deleteBranch"> X </button>
        <button id={props.branch_id} onClick={props.getBranchId} type='button' className='btn btn-secondary branchBtn' data-toggle='modal' data-target='#editingModal' name={props.branch_id} key={props.key} children={props.children} min_range={props.min_range} max_range={props.max_range} > {props.branchName} </button>
    </div>
);

export default Branch;

// this is the button that will be the element representing the Branch. 
// this will be clickable and will open the editing modal.




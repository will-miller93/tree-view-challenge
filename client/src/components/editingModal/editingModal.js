import React from 'react';
import EditButton from '../editButton/editButton';
import SaveButton from '../saveButton/saveButton';
import './editingModal.css';

const EditingModal = (props) => (
    <div>
        <div className="modal fade" id="editingModal" tableindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editingModalTitle"> Branch Details </h5>
                        <button type="button" id="closeModal" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* here is where the Name of the branch will be displayed or where it can be edited */}
                        <div className="row">
                            <label htmlFor="branchName"> Branch Name : </label>
                            <div className="col">
                                <input type="text" onChange={props.inputChange} name="branch_name" className="form-control" id="branchName" placeholder="Enter branch name here" disabled={props.disabledValue} />
                            </div>
                        </div>
                        {/* here is where the number of children is decided */}
                        <div className="row">
                            <label htmlFor="numChildren"> Children : </label>
                            <div className="col">
                                <input type="text" onChange={props.inputChange} name="children" className="form-control" id="branchChildren" placeholder="You can have up to 15 Children" disabled={props.disabledValue} />
                            </div>
                        </div>
                        {/* here is where the Range min and max is decided */}
                        <form>
                            <div className="row">
                                <label htmlFor="range"> Range : </label>
                                <div className="col">
                                    <input type="text" onChange={props.inputChange} name="min_range" className="form-control" id="minRange" placeholder="Min Range" disabled={props.disabledValue} />
                                </div>
                                <div className="col">
                                    <input type="text" onChange={props.inputChange} name="max_range" className="form-control" id="maxRange" placeholder="Max Range" disabled={props.disabledValue} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <EditButton toggleInput={props.toggleInput}/>
                        <SaveButton updateBranch={props.updateBranch}/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
);


export default EditingModal;

// you will need to pass props into this component from app.js to the EditButton and the SaveButton
// the functionality will be in the app.js component. 


import React from "react";
import { connect } from "react-redux";

import * as actions from "./../actions/index";

class TaskForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: '',
            name: '',
            status: true
        }
    }

    // cap nhat va nhap lai cac props
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.taskEditing){
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,  
                status: nextProps.taskEditing.status
            })
        }
    }
    // doc cac gia tri cua cca o input
    onChange = (event) =>{
        let target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (event) =>{
        event.preventDefault();
        this.props.onSaveTask(this.state)
        this.onClear();
    }
    onClear = () =>{
        this.setState({
            id: '',
            name: '',
            status: false
        })
    }
    render(){
        var {isDisPlayForm} = this.props

        return(
            <div>
                {isDisPlayForm === false ? '' 
                :
                    <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.id === '' ? 'them cong viec' : 'cap nhat cong viec'}</h3>
                        <span className="fa fa-times-circle text-right" aria-hidden="true"></span>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSave}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    // name phai bang name cua state
                                    required="required"
                                    name="name"
                                    //===========> value: ...
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <label>Trạng Thái :</label>
                            <select 
                                className="form-control"  
                                required="required"
                                name='status'
                                value={this.state.status}
                                //==============================> thieu onChange
                                onChange={this.onChange}
                                >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" 
                                    className="btn btn-warning"
                                    >Luu</button>&nbsp;
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={this.onClear}
                                    >Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
            </div>
        )
            
    }
    
}

const mapStatetoProps = (state) => {
    return {
        isDisPlayForm: state.isDisPlayForm,
        taskEditing: state.taskEditing
    }
}

const mapDispatchtoProps = (dispatch, props) =>{
    return {
        onSaveTask: (task) =>{
            //action
            dispatch(actions.saveTask(task))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps, null)(TaskForm); 
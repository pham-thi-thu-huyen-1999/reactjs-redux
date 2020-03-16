import React from 'react';

import * as actions from './../actions/index';
import { connect } from 'react-redux';

class TaskItem extends React.Component{
    onUpdateStatus = (task) =>{
        //truyen id ccua taskItem vao tasklist
        this.props.onUpdateStatus(task.id);
    }
    onDelete = (task) =>{
        this.props.onDelete(task.id);
    }
    onEditTask = (task) =>{
        // this.prop.task: task, truyen qua reducer de goi lai
        this.props.onOpenForm();
        this.props.onEditTask(task);
    }
    
    render(){

        return this.props.tasks.map((task, index) =>{
            return(
                <tr>
                    <td>{index}</td>
                    <td>{task.name}</td>
                    <td className="text-center">
                        <span 
                            onClick={e => {this.onUpdateStatus(task)}}
                            className={task.status === true ? 'label label-success' : 'label label-danger'}>
                            {task.status === true ? 'kich hoat' : 'an'}
                        </span>
                    </td>
                    <td className="text-center">
                        {/* click vao sua phai mo form */}
                        <button type="button" 
                            className="btn btn-warning"
                            onClick={e => {
                                 this.onEditTask(task)
                             }
                            }
                            >
                            <span className="fa fa-pencil mr-5"></span>Sửa
                        </button>
                        &nbsp;
                        <button type="button" 
                            className="btn btn-danger"
                            onClick={e =>{this.onDelete(task)}}
                            >
                            <span className="fa fa-trash mr-5"></span>Xóa
                        </button>
                    </td>
                </tr>            
            )
        })
        // )
    }
}

var mapStatetoProps = (state) =>{
    return {
        tasks: state.tasks
    }
}

const mapDispatchtoProps = (dispatch, props) =>{
    return {
        onUpdateStatus: (id) =>{
            dispatch(actions.updateStatus(id));
        },
        onDelete: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onOpenForm: () =>{
            dispatch(actions.openForm());
        },
        // truyen vao task de edit
        onEditTask: (task) => {
            dispatch(actions.editTask(task))
        }
        
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(TaskItem);

// khoi tao them state de delete, updateTask
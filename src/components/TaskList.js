import React from 'react';
import TaskItem from './TaskItem';
import * as actions from './../actions/index';

import { connect } from "react-redux";

class TaskList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }

    }

    // loc data on table
    onChange = (event) =>{
        var target = event.target
        var name = target.name;
        var value = target.value
        let filter = {
            name: name === 'filterName' ? value : this.state.filterName.toLowerCase(),
            status: name === 'filterStatus' ? value: this.state.filterStatus
        }
        // ** truyen filter sau khi gan cua tasklist truyen ra lai store
        this.props.onFilterTable(filter)
        this.setState({
            [name] : value
        })
    }
       
    render(){
        var {tasks, filterTable, keyword, sort} = this.props
        /**
         * filter
         */
        if(filterTable) {
            if(filterTable.name){
                tasks = tasks.filter((task) => {
                    // return task.name
                    return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
                })
            }

                tasks = tasks.filter((task) =>{
                    if(filterTable.status === -1){
                        return task;
                    }
                    else if(filterTable.status === 1){
                        return task.status === true;
                        // return task.status === (filter.status === 1 ? true : false)
                    }
                    else if(filterTable.status === 0){
                        return task.status === false;
                    }
                })           
        }
        /**
         * search
         */
        tasks = tasks.filter((task) =>{
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        })
        /**
         * sort
         */
       if(sort) {
            if(sort.by === 'name'){
                tasks.sort((a, b) =>{
                    //A-Z
                    if(a.name > b.name) return sort.value;
                    //Z-A
                    else if(a.name < b.name) return -sort.value;
                    else return 0;
                })
            }
            else if(sort.by === 'status'){
                tasks.sort((a, b) =>{
                    if(a.status > b.status) {
                        return -sort.value;
                    }
                    else if(a.status < b.status){
                        return sort.value;
                    }
                    else return 0;
                })
            }
       }
        
        // var elm = tasks.map((task, index)=>{
        //     return (
        //         <TaskItem
        //             key={index}
        //             task={task}
        //             index={index+1}
        //         />
        //     )
            
        // })

        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="filterName"
                                    onChange={this.onChange}
                                    value={this.state.filterName}
                                    
                                    />
                                    {/* value get from state */}
                            </td>
                            <td>
                                <select 
                                    className="form-control"
                                    name='filterStatus'
                                    onChange={this.onChange}
                                    value={this.state.filterStatus}
                                    
                                    >
                                    <option value="-1">Tất Cả</option>
                                    <option value="0">Ẩn</option>
                                    <option value="1">Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                       <TaskItem />
                    </tbody>
                </table>
            </div>
        )
    }
}

// map lai state list va chuyen thanh cac props
var mapStoretoProps = (state) =>{
    // state get tu index ma reducer combine
    // state luu tru cac gia tri cua input
    return {
        tasks : state.tasks,
        filterTable: state.filterTable,
        keyword: state.search,
        sort: state.sort
    }
}

const mapDispatchtoProps = (dispatch, props) =>{
    return {
        onFilterTable: (filter) =>{
            dispatch(actions.filterTable(filter))
        }
    }
}

// state cua store chuyen thanh cac props

export default connect( mapStoretoProps,mapDispatchtoProps, null)(TaskList);

//tai sao state get tu store rooi ma con phai khai bao lai
 return this.props.tasks.map((task, index) =>{
            return(
                <tr>
                    <td>{index}</td>
                    <td>{task.name}</td>
                    <td className="text-center">
                        <span 
                            onClick={this.onUpdateStatus}
                            className={task.status === true ? 'label label-success' : 'label label-danger'}>
                            {task.status === true ? 'kich hoat' : 'an'}
                        </span>
                    </td>
                    <td className="text-center">
                        {/* click vao sua phai mo form */}
                        <button type="button" 
                            className="btn btn-warning"
                            onClick={this.onEditTask}
                            >
                            <span className="fa fa-pencil mr-5"></span>Sửa
                        </button>
                        &nbsp;
                        <button type="button" 
                            className="btn btn-danger"
                            onClick={this.onDelete}
                            >
                            <span className="fa fa-trash mr-5"></span>Xóa
                        </button>
                    </td>
                </tr>            
            )
        })
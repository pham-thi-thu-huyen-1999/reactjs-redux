import React from 'react';
import TaskForm from './components/TaskForm';
import SearchAndSort from './components/searchAndSort';
import TaskList from './components/TaskList';

import * as actions from './actions/index';

import { connect } from 'react-redux'

class App extends React.Component{
    //openform
    addItem = () =>{
        this.props.onOpenForm()
    }
    // neu showform === true thi hien thi form va muc them cong viec  la 8
    render(){        
        // truyen prop de truyen du lieu tu form ra ngoai

        return(
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className='row'>
                    <div className={this.props.isDisPlayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        <TaskForm/>
                    </div>
                    <div className={this.props.isDisPlayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" 
                            className="btn btn-primary"
                            onClick={this.addItem}
                            >
                        <span className="fa fa-plus mr-5">Thêm Công Việc</span>
                        </button>
                      <hr/>
                        <SearchAndSort />
                        <hr></hr>
                        <div className="row mt-15">
                            <TaskList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{
    return {
        isDisPlayForm: state.isDisPlayForm
    }
}

const mapDispatchtoProps = (dispatch, props) => {
    return {
        onOpenForm : () =>{
            dispatch(actions.openForm())
        },
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);

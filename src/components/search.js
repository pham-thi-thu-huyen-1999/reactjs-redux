import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            keyword: ''
        }
    }
// su kien khi nhap vao
// phai co target moi co the hien thi input
// event.target de doc du lieu trong input sau do cap nhat lai state
    onHandleChange = (event) =>{
        this.setState({
            keyword: event.target.value
        })
        this.props.onHandleChange(this.state.keyword)
    }
    onSearch = () =>{
        // su dung prop de truyen state len reducer
        this.props.onSearch(this.state.keyword)
    }
    render() {
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Nhập từ khóa..."
                        name='keyword'
                        value={this.state.keyword}
                        onChange={this.onHandleChange}
                        />
                    <span className="input-group-btn">
                        <button 
                            className="btn btn-primary" 
                            type="button"
                            onClick={this.onSearch}
                            >
                        <span className="fa fa-search mr-5"></span>Tìm
                    </button>
                    </span>
                </div>
            </div>
        )
    }
}
// search theo name
// get state from reducer
var mapStatetoProps = (state) =>{
    return {}
}

const mapDispatchtoProps = (dispatch, props) =>{
    return {
        onSearch : (keyword) =>{
            dispatch(actions.searchName(keyword))
        },
        onHandleChange: (keyword) =>{
            dispatch(actions.enterName(keyword))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Search)
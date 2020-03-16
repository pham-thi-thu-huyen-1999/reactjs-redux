import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/index'


class Sort extends React.Component{

    onClick = (sortBy, sortValue) =>{
        
        // ben trong day la mot object
        this.props.onSort({
            by: sortBy,
            value: sortValue
        })
    }
    render() {

        // su dung sort dc chuyen tu state thanh prop de tryten ra gia tri
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        {/* su dung arow func de truyen tham so */}
                        <li onClick={() =>{this.onClick('name', 1)}}>
                            <a role="button" 
                                className={this.props.sort.by === 'name' && this.props.sort.value === 1 
                                ? 'sort_selected' : ''}
                                >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a role="button"
                                className={this.props.sort.by === 'name' && this.props.sort.value === -1 
                                ? 'sort_selected' : ''}
                                >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() =>{this.onClick('status', 1)}}>
                            <a role="button"
                                className={this.props.sort.by === 'status' && this.props.sort.value === 1 
                                ? 'sort_selected' : ''}
                                >
                                    Trạng Thái Kích Hoạt</a></li>
                        <li onClick={() =>{this.onClick('status', -1)}}>
                            <a role="button"
                            className={this.props.sort.by === 'status' && this.props.sort.value === 1 
                            ? 'sort_selected' : ''}
                        
                        >Trạng Thái Ẩn</a></li>
                    </ul>
                </div>
             </div>
        )
    }
}

const mapStatetoProps = (state) =>{
    // tao ra props dc map tu state chuyen thanh props ten...
    // chuyen sort thanh props
    return {
        sort: state.sort
    }
}

const mapDispatchtoProp = (dispatch) =>{
    return {
        onSort: (sort) => {
            dispatch(actions.sortList(sort))
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProp)(Sort);
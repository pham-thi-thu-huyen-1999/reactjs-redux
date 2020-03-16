import * as types from "./../constants/actionTypes";

var initialState = '';
var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SEARCH_NAME:
            return action.keyword
        case types.ENTER_NAME:
            return action.keyword
        default: return state
    }
}
export default myReducer
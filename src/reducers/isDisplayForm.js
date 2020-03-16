import * as types from "./../constants/actionTypes";

var initialState = false;
var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.OPEN_FORM:
            return !state
        default: return state
    }
}
export default myReducer
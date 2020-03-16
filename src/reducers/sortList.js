import * as types from "./../constants/actionTypes";

var initialState = {
    by: 'name',
    value: 1
};
var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SORT:
            // action dc lay tu state tren view
            // cap nhat lai state tren reducer thanh voi action.... va gan vao state hien tai tren reducer
            return {
                by: action.sort.by,
                value: action.sort.value
            }
            // action o day dc truyen ra ham map statetoprops va se dc su dung lai tren view voi key props
        default: return state
    }
}
export default myReducer
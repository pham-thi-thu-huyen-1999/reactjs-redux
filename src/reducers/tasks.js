import * as types from "./../constants/actionTypes";

var data = JSON.parse(localStorage.getItem('tasks'));
    /**
     * create unique id
     */
const s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}
const generateID = () =>{
    return s4() + s4() + '-' + s4();
}
var findIndex = (tasks, id) =>{
    var result = -1;
    tasks.forEach((task, index) =>{
        if(task.id === id){
            // index == task chua id
            result = index;
        }
    })
    return result;
}
var initialState = data ? data : [];
var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.LIST_ALL:
            return state
        case types.SAVE_TASK:
            var task ={
                id: action.task.id,
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            if(!task.id){
                task.id = generateID();
                state.push(task);
            }else {
                let index = findIndex(state, task.id)
                state[index] = task
            }
            
            localStorage.setItem('tasks', JSON.stringify(state))
            //tasks: key == key local data
            return [...state]
        case types.DELETE_TASK:
            var id = action.id
            var index = findIndex(state, id);
            if(index !== -1){
                state.splice(index, 1)
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        case types.UPDATE_STATUS:
            var idStatus = action.id
            var index = findIndex(state, idStatus);
            var cloneTask = {...state[index]};
            cloneTask.status = !cloneTask.status;
            state[index] = cloneTask
            // state[index] = {
            //     ...state[index],
            //     status: !state[index].status
            // }

            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        default: return state
    }
}
export default myReducer
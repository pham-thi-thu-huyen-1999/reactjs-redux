import tasks from "./tasks";
import isDisPlayForm from './isDisplayForm';
import taskEditing from './taskEditing';
import filterTable from './filterTable';
import search from './searchName'
import sort from './sortList'
import { combineReducers } from "redux";


// state get tu store
const myReducer = combineReducers({
    tasks, // tasks: tasks
    isDisPlayForm,
    taskEditing,
    filterTable,
    search,
    sort
})

export default myReducer;
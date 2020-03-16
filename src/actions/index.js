import * as types from "./../constants/actionTypes";

/**
 * action require
 * reducer khai bao case: type
 * map lai cca state den props de truyen vao component
 */
// show all list task
/**
 * muon lay state len store lay
 * -- tao type
 * -- tao cac state
 * -- map lai cac state va truyen no ra ngoai props
 * -- tu props truyen ra lai component
 * -- hien thi ra view
 */
const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

const saveTask = (task) =>{
    return {
        type: types.SAVE_TASK,
        task
    }
}

const openForm = () =>{
    return {
        type: types.OPEN_FORM,
    }
}

const closeForm = () =>{
    return {
        type: types.CLOSE_FORM
    }
}

const updateStatus = (id) =>{
    return {
        type: types.UPDATE_STATUS,
        id
    }
}

const deleteTask = (id) =>{
    return {
        type: types.DELETE_TASK,
        id
    }
}

const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task
    }
}

//truyen vao mot object de filter cho ca 2

const filterTable = (filter) =>{
    return {
        type: types.FILTER_TABLE,
        filter // filter: filterName, filterStatus

    }
}
const searchName = (keyword) =>{
    return {
        type: types.SEARCH_NAME,
        keyword
    }
}
const enterName = (keyword) =>{
    return {
        type: types.ENTER_NAME,
        keyword
    }
}

const sortList = (sort) =>{
    return {
        type: types.SORT,
        sort
    }
}

export { listAll, saveTask, openForm, closeForm, updateStatus, deleteTask, editTask, filterTable, searchName, enterName, sortList }
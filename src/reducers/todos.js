import _ from 'lodash'; 

export const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            // console.log("Action CREATE_TODO received");
            return {...state, [action.payload.id]: action.payload}
            // stores todos as a JS object with keys as id and values as todo objects
        case 'FETCH_TODOS': 
            return {...state, ..._.mapKeys(action.payload, "id")}; 
        case 'UPDATE_TODO':
            console.log("Action UPDATE_TODO received");
            return {...state, [action.payload.id]: action.payload}
        case 'DELETE_TODO':
            return _.omit(state, action.payload)
        default: 
            return state; 
    }
}
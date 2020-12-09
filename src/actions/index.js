import todoService from '../apis/todoService'; 

// Create
// export const createTodo = todo => async dispatch => {
//     const createdTodo = todoService.post("/todos", todo); 

//     dispatch({
//         type: 'CREATE_TODO',
//         payload: createTodo 
//     })
// }

// // Read
// export const getTodos = () => async dispatch => {
//     const fetchedTodos = await todoService.get('/todos'); 

//     dispatch({
//         type: 'FETCH_TODOS', 
//         payload: fetchedTodos
//     }); 
// }

// // Update
// export const updateTodos = (id, todo) => async dispatch => {
//     const updatedTodo = await todoService.put(`/todos/${id}`, todo); 

//     dispatch({
//         type: 'UPDATE_TODO',
//         payload: updatedTodo
//     }); 
// }

// // Delete
// export const deleteTodo = id => async dispatch => {
//     await todoService.delete(`/todos/${id}`); 
    
//     dispatch({
//         type: 'DELETE_TODO',
//         payload: id
//     }); 
// }


// pre-backend testing - to be removed later after backend is set up 
// Create
export const createTodo = todo => {
    // console.log("Creating todo"); 
    return {
        type: 'CREATE_TODO', 
        payload: todo
    }
}

// Read
export const getTodos = () => (dispatch, getState) => {
    return {
        type: 'FETCH_TODOS', 
        payload: getState()
    }
}

// Update
export const updateTodos = (id, todo) => {
    return ({
        type: 'UPDATE_TODO',
        payload: todo
    }); 
}

// Delete
export const deleteTodo = id => {
    return ({
        type: 'DELETE_TODO',
        payload: id
    }); 
}
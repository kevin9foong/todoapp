import React from 'react'; 
import { connect } from 'react-redux'; 

import CreateTodo from './CreateTodo'; 
import TodoItem from './TodoItem'; 

class TodoList extends React.Component {
    renderTodos = () => this.props.todos.map(
        todo => {
            return (
                <TodoItem todo={todo} key={todo.id} />
            )
        }
    )

    render() {
        return (
            <>
                <h2>Todo List</h2>
                <div className="ui left aligned container">
                    <div className="ui huge list">
                        {this.renderTodos()}
                    </div>
                </div>
                <CreateTodo />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: Object.values(state.todos)
    };
}

export default connect(mapStateToProps)(TodoList); 




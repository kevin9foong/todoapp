import React from 'react'; 
import { connect } from 'react-redux'; 

import CreateTodo from './CreateTodo'; 

class TodoList extends React.Component {
    renderTodos = () => this.props.todos.map(
        todo => {
            return (
                <div className="item" key={todo.id}>
                    <i className="large middle aligned circle outline" /> 
                    <div className="content">
                        {todo.content}
                    </div>
                </div>
            )
        }
    )

    render() {
        console.log(this.renderTodos()); 
        return (
            <div>
                <h2>Todo List</h2>
                <div className="ui celled list">
                    {this.renderTodos()}
                </div>
                <CreateTodo />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: Object.values(state.todos)
    };
}

export default connect(mapStateToProps)(TodoList); 




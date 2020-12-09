import React from 'react'; 
import { connect } from 'react-redux'; 

import { updateTodo, deleteTodo } from '../actions/index'; 
class TodoItem extends React.Component {
    state = { content: this.props.todo.content, timeoutId: null }

    updateStateAndDebounceUpdateTodo(content) {
        if (this.state.timeoutId) { 
            clearTimeout(this.state.timeoutId)
        } 
        const timeoutId = setTimeout(() => this.props.updateTodo(this.props.todo.id, 
                {...this.props.todo, content: content}), 1000); 
        this.setState({content, timeoutId}); 
    }

    render() {
        return (
            <div className="item">
                <div className="center aligned content">
                    <div className="ui checkbox">
                    <input 
                        type="checkbox" 
                        name="example" 
                        checked={this.props.todo.checked} 
                        onChange={() => this.props.updateTodo(this.props.todo.id, {...this.props.todo, checked: !this.props.todo.checked})} />
                        <label>
                        <div className="ui input">
                            <input 
                                    type="text" 
                                    value = {this.state.content} 
                                    onChange={(e) => this.updateStateAndDebounceUpdateTodo(e.target.value)} />
                        </div>
                        </label>
                    </div> 
                    <div className="right floated content">
                        {/* <i className="grey edit icon" /> */}
                        <i className="red minus circle icon" onClick={() => this.props.deleteTodo(this.props.todo.id)} />
                    </div>
                </div>
        </div>
        )}; 
}

export default connect(null, { updateTodo, deleteTodo })(TodoItem); 
import React from 'react'; 
import { connect } from 'react-redux'; 

import { createTodo } from '../actions';

class CreateTodo extends React.Component {
    state = { content: "" }; 

    render() {
        return (
            <div>
                <div className="ui input">
                    <input 
                        type="text" 
                        placeholder="Enter todo here..." 
                        value={this.state.content} 
                        onChange={(e) => this.setState({content: e.target.value})}
                    />
                </div>
                <button className="ui primary button" onClick={() => {this.props.createTodo(this.state.content)}}>
                    Create Todo
                </button>
            </div> 
        ); 
    }
}

export default connect(null, {createTodo})(CreateTodo); 


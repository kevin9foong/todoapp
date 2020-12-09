import React from 'react'; 
import { connect } from 'react-redux'; 

import { createTodo } from '../actions';

const foo = {
    id: 1, 
    content: 'Hello world!'
}

class CreateTodo extends React.Component {

    render() {
        return (
            <div>
                <div className="ui input">
                    <input type="text" placeholder="Enter todo here..." />
                </div>
                <button className="ui primary button" onClick={() => {this.props.createTodo(foo)}}>
                    Create Todo
                </button>
            </div> 
        ); 
    }
}

export default connect(null, {createTodo})(CreateTodo); 


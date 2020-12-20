import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todo extends Component {
    
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem delTodo={this.props.delTodo} markComplete={this.props.markComplete} key={todo.id} todo={todo}/>
        ));
    }
}
// PropTypes
Todo.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired, 
}

export default Todo;
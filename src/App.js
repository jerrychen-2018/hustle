import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from "./components/layout/Header";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import axios from "axios";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Example TODO item. Click the checkbox to mark an item as finished.",
        completed: false
      }
    ]
  }

  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/todos?_limit=15")
  //     .then(res => this.setState({todos: res.data }))
  // }
  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos[this.state.todos.length - 1].id + 1,
      title: title,
      completed: false
    }
    // axios.post("https://jsonplaceholder.typicode.com/todos", {
    //   title: title,
    //   completed: false
    // })
    //   .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  // Delete Todo
  delTodo = (id) => {
    // axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    //   .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  // Toggle box
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }
  render() {
    return (
    <Router>
      <div>
        <div className="container">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              <AddTodo addTodo={this.addTodo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
    </Router>
  );
  }
  
}

export default App;

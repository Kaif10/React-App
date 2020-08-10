  
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import About from './components/pages/About';
import { v4 as uuidv4} from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  //fetchdata
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

 
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };


  //Delete Todo
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  
 //add Todo
  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuidv4();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  //Home and about page layout
  render() {
    return (
      <Router>
  
        <div className="App">
          <div className="container">
            <Header />

            <Route
              exact
              path="/"

    

              render=
       
              {props => (
                <React.Fragment>
                <div>
                  <h1 style = {chores}>Daily chores</h1>
                </div>
                  
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          
          </div>
        </div>
      </Router>
    );
  }
}


const chores= 
{fontFamily: "Gill Sans",
color: 'darkblue',
textDecoration: 'underline'
}




export default App;

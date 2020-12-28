import logo from './logo.svg';
import './App.css';
import react, { Component } from 'react';
import Headers from './Component/Layout/Headers';
import Todos from './Component/Todos'
import AddTodo from "./Component/AddTodo";
import uuid from 'react-uuid';


class App extends Component {

  state = {
    todos: [
      {
        id: uuid(),
        title: " i need to meet God",
        Status: false

      },
      {
        id: uuid,
        title: " i need to GO to  Kashi",
        Status: false

      },
      {
        id: uuid,
        title: " i need to meet Kalabharava ",
        Status: false

      }


    ]


  };

  MarkCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {

        if (todo.id === id) {
          todo.Status = !todo.Status

        }
        return todo;

      })
    })

  }

  delTodos = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]

    }

    );


  }

  addTodo1 = (title) => {

    console.log(title);

    const newTodo1 = {
      id: uuid(),
      title,
      Status: false

    }
    console.log(title);
    this.setState({ todos: [...this.state.todos, newTodo1] });
  }


  render() {
    console.log(this.state.todos)

    return (
      <div className="App">
        <Headers />
        <AddTodo addTodo1={this.addTodo1} />
        <Todos todos={this.state.todos} MarkCompleted={this.MarkCompleted} delTodos={this.delTodos} />
      </div>
    );
  }
}

export default App;

// 57:  minutes

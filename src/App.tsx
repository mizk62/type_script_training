import React from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
// import logo from './logo.svg';
import './App.css';

interface State {
  todos: any[];
}

class App extends React.Component<{},State> {

  constructor(props:State) {
    super(props);

    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}/>
        <ul>
          {this.state.todos.map(({ text }, index) => (
            <li key={index}>
              <Todo text={text}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleSubmit = (text:string) => {
    const newTodo ={text}
    const newTodos = [...this.state.todos, newTodo]
    this.setState({ todos: newTodos})
  }


}

export default App;

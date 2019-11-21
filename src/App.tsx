import React from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
// import logo from './logo.svg';
import './App.css';


const App: React.FC = () => {
  return (
    <div>
      <Form />
      <ul>
        <li>
          <Todo />
        </li>
      </ul>
    </div>
  );
}

export default App;

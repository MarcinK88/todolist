import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Textbox from './components/Textbox';
import Element from './components/Element';

function App() {
  const [todolist, setTodolist] = useState([]);
  const saveTodo = (e) => {
    setTodolist(
    [
      ...todolist,
      'tu bedzie trzeba cos dodac (nowy elelemt)'
    ] );
    // setTodolist(todolist.push('tu cos dodac'));
    console.log(e);
  }
  return (
    <div>
      <div className="card text-center">
        <div className="card-header font-weight-bold">
          Todo List
       </div>
       <div className="card-body">
         <Textbox saveTodo={saveTodo} />
         {todolist.map((element) => <Element {...element} />)}
         {/* <Element /> */}
       </div>
      </div>
    </div>
  );
}

export default App;

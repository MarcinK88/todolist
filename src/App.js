import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Textbox from './components/Textbox';
import Element from './components/Element';
import { render } from '@testing-library/react';

function App() {
  const [todolist, setTodolist] = useState([]);
  const saveTodo = (e) => {
    e.preventDefault();
    setTodolist(
      [
        ...todolist,
        e.currentTarget.elements[0].value
      ]);

    console.log(todolist);

  }

  const deleteElement = (e) => {
    console.log(e.target.id);
    todolist.splice(e.target.id, 1);
    showList();

  }

  const showList = function () {
    return (
      <div>
        {todolist.map((txt, index) => <Element id={index} text={txt} delete={deleteElement} />)}
      </div>
    )
  }



  return (
    <div>
      <div className="card text-center">
        <div className="card-header font-weight-bold">
          Todo List
       </div>
        <div className="card-body">
          <Textbox saveTodo={saveTodo} />
          {/* {todolist.map((element) => <Element {...element} />)} */}

          {/* {todolist.map((txt, index) => <Element id={index} text={txt} delete={deleteElement} />)} */}
          {showList()}

          {/* <div>{todolist.map(item  => { return {...item}}  )}</div> */}
          {/* <Element /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Textbox from './components/Textbox';
import Element from './components/Element';

function App() {
  const [todolist, setTodolist] = useState([]);
  const saveTodo = (e) => {
    e.preventDefault();
    setTodolist(
    [
      ...todolist,
      e.currentTarget.elements[0].value
    ] );

    console.log(todolist);
    
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
          <ul>
         {todolist.map((txt, index) => <li id={index}> {txt}</li>)}
         </ul>
         {/* <div>{todolist.map(item  => { return {...item}}  )}</div> */}
         {/* <Element /> */}
       </div>
      </div>
    </div>
  );
}

export default App;

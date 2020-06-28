import React from 'react';
import logo from './logo.svg';
import './App.css';
import Textbox from './components/Textbox';
import Element from './components/Element';

function App() {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header font-weight-bold">
          Todo List
       </div>
       <div className="card-body">
         <Textbox />
         {/* <Element /> */}
       </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Element from '.././Element';

export default function Textbox(props) {


    return (
        <div id="list">
            <form onSubmit={props.saveTodo}>
                <div className="form-group">
                    <input type="text" placeholder="add task" />
                    <button type="submit" className="btn btn-primary" >add task</button>
                </div>
            </form>
        </div>
    )
}

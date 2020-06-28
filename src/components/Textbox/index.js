import React from 'react';
import Element from '.././Element';

export default function Textbox(props) {


    return (
        <div id="list">
            <form onSubmit={props.saveTodo}>
            <input type="text" />
            <button type="submit" >send</button>
            </form>
        </div>
    )
}

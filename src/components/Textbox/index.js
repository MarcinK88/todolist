import React from 'react';
import Element from '.././Element';

export default function Textbox() {


    return (
        <div id="list">
            <input type="text" onKeyDown={saveTodo} />
        </div>
    )
}

function saveTodo(e) {

    if (e.which === 13) {
        console.log(e.target.value);
        e.target.value = "";
        var list = document.querySelector("#list");

        var element = document.createElement('Element');
        // list.appendChild(document.("test"));
        console.log(list);


    }

    // console.log(list);
    // list.appendChild(element);

}
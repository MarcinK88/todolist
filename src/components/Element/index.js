import React from 'react';

export default function Element(props) {


    var isMarked = false;


    const done = function (e) {

        if (!isMarked) {
            e.target.parentNode.parentNode.style.textDecoration = 'line-through';
            isMarked = !isMarked;
        } else { 
            e.target.parentNode.parentNode.style.textDecoration = 'none';
            isMarked = !isMarked;
        }
    }



    return (
        <tr>
            <td>{props.id+1}.</td><td>{props.text}</td> 
            <td><button className="btn btn-success" onClick={done}>done</button></td>
            <td><button className="btn btn-danger" onClick={props.delete} id={props.id}>delete</button></td>

        </tr>
    )


}
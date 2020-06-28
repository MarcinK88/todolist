import React from 'react';

export default function Element(props) {

    const done = function () {
    }

    return (
        <div>
            <div>{props.text} <button onClick={done}>zrobione</button><button onClick={props.delete} id={props.id}>usuń</button></div>
            
        </div>
    )


}
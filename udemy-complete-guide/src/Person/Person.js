import React from 'react';
import './Person.css'

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click} >I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <p>{props.counter}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
};

export default Person;
import React from 'react';
import ReactDOM from 'react-dom';

const Person = (props) => {
    return(
        <div class="person">
            <h2>{props.data.name}</h2>
            <p>{props.data.email}</p>
            <p>{props.data.role}</p>
        </div>
    )
   
}

export default Person;
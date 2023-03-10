import React from 'react';

export default function Avater(props) {
    return (
        <div className='profile'>
            <img 
            className='photo'
            src={props.image} alt="avater" />
            <h1>{props.name}</h1>
            <p>{props.title}</p>
        </div>
    );
}


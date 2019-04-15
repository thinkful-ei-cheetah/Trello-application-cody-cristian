import React from 'react';
import './Card.css';
function Cards(props){
    return(
        <div className="Card">
        {props.children}
        {props.title}
        {props.content}
        </div>
    )
}
export default Cards
import React from 'react';
import Cards from './Card.js' 
function List(props){
    return(
        <section className="List">
          <header className="List-header">
            {props.header}
          </header>
          <div className="List-cards">
            {props.cards}
          </div>
        </section>
        
       
    )
}
export default List
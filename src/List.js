import React from 'react';
import Cards from './Card.js' 
import './List.css';
function List(props){
    return(
        <section className="List">
          <header className="List-header">
            {props.header}
          </header>
          <div className="List-cards">
          {props.cards.map((card)=>
            <Cards key={card.id} title={card.title} content={card.content} />
    )}
            
          </div>
        </section>
        
       
    )
}
export default List
import React from 'react';
import Cards from './Card.js' 
function List(props){
    return(
        <section className="List">
        <header className="List-header">
        {props.children}
        </header>
        <div className="List-cards">
        <Cards>
        <h3>Hahaha</h3>
        <p>this is workin</p>
        </Cards>
        <Cards>
          <h3>lahahah</h3>
          <p>bllssh</p>
        </Cards>
        </div>
        </section>
        
       
    )
}
export default List
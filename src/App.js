import React, { Component } from 'react';
import STORE from './Store.js';
import Cards from './Card.js'
import List from './List.js' ;
import './App.css';

class App extends Component {
  STORE; 


    render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-List">
          <List header="test number 2" cards={<Cards title="test 1" content="please work" />} />
        </div>
      </main>
    );
  }
}

const listHeaders = STORE.lists.map(header => < List key={header.id} header={header.header} cardIds={header.cardIds} />)



export default App;

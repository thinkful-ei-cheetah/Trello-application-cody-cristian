import React, { Component } from 'react';
import List from './List.js' 
import './App.css';

class App extends Component {
  render() {
    return (
      <main >
        <List className='List-header'>
          <h2>First list</h2>
        </List>
      </main>
    );
  }
}

export default App;

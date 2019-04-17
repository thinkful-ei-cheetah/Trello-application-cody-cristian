import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Card.js'
import List from './List'
import STORE from './Store.js'
import App from './App';
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cards/>,div)
});
it('renders the UI as expected', () => {
  const tree = renderer
   .create(<Cards />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });
// list.js
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <List key={STORE.lists.id} header='test' cards={STORE.lists.map((id) => <Cards title={id.title} content={id.content} /> )} />,div)
  });
  it('renders the UI as expected', () => {
    const tree = renderer
     .create(<List key={STORE.lists.id} header='test' cards={STORE.lists.map((id) => <Cards title={id.title} content={id.content} />)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
    
    // Binds the identifier to 'this' keyword, so that the buttons actually work

    this.addSomeBeer = this.addSomeBeer.bind(this);
    this.addSomeRice = this.addSomeRice.bind(this);
    this.addSomeChicken = this.addSomeChicken.bind(this);
    this.addSomeOnions = this.addSomeOnions.bind(this);
  }
  
  // Creates the products, and adds a random amount of the products to the shopping list

  addSomeBeer(){
    this.setState({ items: [...this.state.items, {id: 5, value: "Beer", qty: Math.floor(Math.random() * 10) + 1, unit: "ltr"}]})
  }

  addSomeRice(){
      this.setState({ items: [...this.state.items, {id: 6, value: "Rice", qty: Math.floor(Math.random() * 10) + 1, unit: "kg"}]});
  }

  addSomeChicken(){
    this.setState({ items: [...this.state.items, {id: 7, value: "Chicken", qty: Math.floor(Math.random() * 500) + 100, unit: "g"}]});
}

addSomeOnions(){
  this.setState({ items: [...this.state.items, {id: 8, value: "Onions", qty: Math.floor(Math.random() * 10) + 1, unit: "pcs"}]});
}
  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button>Click me!</button>
    
    // Creates the buttons for the products
    
      <button onClick={ this.addSomeBeer }>Beer</button>
      <button onClick={ this.addSomeRice }>Rice</button>
      <button onClick={ this.addSomeChicken }>Chicken</button>
      <button onClick={ this.addSomeOnions }>Onions</button>
    </div>
  }
}

export default App;

import React from 'react';
import SearchV from './components/SearchV';
import data from './data.json'
import './logo.css';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: ""
    }
  }

  onSearchFieldChange = (event) => {
    console.log('Event');
    console.log(event.target.value);
    this.setState({productSearchString: event.target.value});
  }

  render()
  {
    return (
      <>
      <div className= 'logo'>Amazon</div><input type="text" onChange={this.onSearchFieldChange} value={this.state.productSearchString}/>
      <SearchV
      items={ this.state.items.filter((item) => item.product.includes(this.state.productSearchString)) }
      />
      </>
    )
  }
}

export default App;
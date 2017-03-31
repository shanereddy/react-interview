import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';
import Facet from '../src/components/Facet';
import Api from './api';

class App extends Component {

  /**
   * TIP:
   *  - this.state = {...}
   *  - this.someFunction = this.someFunction.bind(this)
   * */

  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      cart: [],
      facetSelected: null
    }
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
  componentDidMount() {
    Api.getShoes().then((shoes) => {
      this.setState({
        shoes: shoes
      });
    });
  }

  // IDEA: Change to ES6 format
  handleShoeSelect(shoe) {
    this.setState({ cart: this.state.cart.concat(shoe) })
  }

  handleFacetSelect(brand) {
    let selected = null
    if (this.state.facetSelected !== brand) {
      selected = brand;
    }
    this.setState({facetSelected: selected})
  }

  render() {
    return (
      <div>
        <NavBar title="My App Store"/>

        <div className="row">

          <div className="col s3">
            <Facet items={this.state.shoes} onFacetSelect={this.handleFacetSelect}/>
          </div>

          <div className="col s6">
            <ShoeList shoes={this.state.shoes} onShoeSelect={this.handleShoeSelect} />
          </div>

          <div className="col s3">
            <CartSummary cart={this.state.cart}/>
          </div>

        </div>
      </div>

    );
  }
}

export default App;

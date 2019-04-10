import React, {Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      tomato: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render () {
    return (
      <Aux>
        <div>Build Controls</div>
        <Burger ingredients={this.state.ingredients}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
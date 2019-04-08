import React, {Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 1,
      tomato: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
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
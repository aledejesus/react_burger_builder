import React, {Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      tomato: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  addIngredientHandler = (type) => {
      return 'yes';
  };

  removeIngredientHandler = (type) => {
    return 'yes';
  };

  changeIngredientAmountHandler = (type, amount) => {
    return 'yes'
  };

  render () {
    return (
      <Aux>
        <BuildControls
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          changeIngredientAmount={this.changeIngredientAmountHandler} />
        <Burger ingredients={this.state.ingredients} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
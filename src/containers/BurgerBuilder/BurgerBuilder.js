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
    this.setState((state, props) => {
      const ingredientsCopy = {...state.ingredients};
      ingredientsCopy[type] += 1;
      return {ingredients: ingredientsCopy};
    });
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      this.setState((state, props) => {
        const ingredientsCopy = {...state.ingredients};
        ingredientsCopy[type] -= 1;
        return {ingredients: ingredientsCopy};
      });
    }
  };

  changeIngredientAmountHandler = (type, amount) => {
    amount = parseInt(amount);
    if (amount >= 0) {
      this.setState((state, props) => {
        const ingredientsCopy = {...state.ingredients};
        ingredientsCopy[type] = amount;
        return {ingredients: ingredientsCopy};
      });
    }
  };

  render () {
    const disabledLessButtons = {...this.state.ingredients};

    for (let ing in this.state.ingredients) {
      if (this.state.ingredients[ing] > 0) {
        disabledLessButtons[ing] = false;
      }
      else {
        disabledLessButtons[ing] = true;
      }
    }
    return (
      <Aux>
        <BuildControls
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          changeIngredientAmount={this.changeIngredientAmountHandler}
          disabledLessButtons={disabledLessButtons} />
        <Burger ingredients={this.state.ingredients} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
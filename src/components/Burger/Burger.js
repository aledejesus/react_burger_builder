import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
  const buildMessage = (
    <p className={classes['build-message']}>
      Select your ingredients from the list
    </p>);

  const ingredientClasses = ['bread-top'];

  for (let ing in props.ingredients) {
    for (let i = 0; i < props.ingredients[ing]; i++) {
      ingredientClasses.push(ing);
    }
  }

  ingredientClasses.push('bread-bottom');

  const burgerIngredients = ingredientClasses.map(
    (cssClass, index) => <BurgerIngredient key={index} type={cssClass} />);

  if (burgerIngredients.length === 2) {
    burgerIngredients.splice(1, 0, buildMessage);
    console.log(burgerIngredients);
  }

  return (
    <div className={classes['burger']}>
      {burgerIngredients}
    </div>
  )
};

export default burger;
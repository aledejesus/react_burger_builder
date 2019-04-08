import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
  const ingredientClasses = ['bread-top'];

  for (let ing in props.ingredients) {
    for (let i = 0; i < props.ingredients[ing]; i++) {
      ingredientClasses.push(ing);
    }
  }

  ingredientClasses.push('bread-bottom');

  const burgerIngredients = ingredientClasses.map(
    (cssClass, index) => <BurgerIngredient key={index} type={cssClass} />);

  return (
    <div className={classes['burger']}>
      {burgerIngredients}
    </div>
  )
};

export default burger;
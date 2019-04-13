import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
  const buildMessage = (
    <p key="1" className={classes['build-message']}>
      Select your ingredients from the list
    </p>);

  const ingredientClasses = ['bread-top'];

  for (let ing in props.ingredients) {
    for (let i = 0; i < props.ingredients[ing]; i++) {
      ingredientClasses.push(ing);
    }
  }

  ingredientClasses.push('bread-bottom');

  if (ingredientClasses.length === 2) {
    ingredientClasses.splice(1, 0, buildMessage);
  }

  const burgerIngredients = ingredientClasses.map(
    (cssClass, index) => {
      if (typeof cssClass !== 'string') {
        // this is for the build message
        return cssClass;
      }
      else {
        return <BurgerIngredient key={index} type={cssClass} />;
      }
    }
  );

  return (
    <div className={classes['burger']}>
      {burgerIngredients}
    </div>
  )
};

export default burger;
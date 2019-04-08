import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';

const burgerIngredient = (props) => {
  let ingredient = null;

  if (classes.hasOwnProperty(props.type)) {
    const ingredientClasses = [
        classes['ingredient'], classes[props.type]].join(' ');
    ingredient = <div className={ingredientClasses}></div>;
  }

  return ingredient;
};

burgerIngredient.propTypes = {
  'type': PropTypes.string.isRequired
};

export default burgerIngredient;
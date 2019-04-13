import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from '../BuildControl/BuildControl'

const buildControls = (props) => {
  const controls = [];

  for (let ing in props.ingredients) {
    controls.push(
      <BuildControl
        key={ing}
        controlName={ing}
        value={props.ingredients[ing]}
        addIngredient={() => props.addIngredient(ing)}
        removeIngredient={() => props.removeIngredient(ing)}
        changeIngredientAmount={props.changeIngredientAmount} />);
  }

  return (
    <div className={classes['build-controls']}>
      {controls}
    </div>
  );
};

export default buildControls;
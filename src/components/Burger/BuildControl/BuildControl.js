import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => (
  <div className={classes['build-control']}>
    <span>{props.controlName}</span>
    <button onClick={props.addIngredient}>+</button>
    <input type="number" min="0" value={props.value} onChange={props.changeIngredientAmount}/>
    <button onClick={props.removeIngredient} disabled={props.disabledLessButton}>-</button>
  </div>
);

export default buildControl;
import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => (
  <div className={classes['build-control']}>
    <span>{props.controlName}</span>
    <button onClick={props.addIngredient}>+</button>
    <input type="number" min="0" value={props.value}/>
    <button onClick={props.removeIngredient}>-</button>
  </div>
);

export default buildControl;
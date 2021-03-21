import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:"Salad", type:"salad"},
    {label:"Meat", type:"meat"},
    {label:"Bacon", type:"bacon"},
    {label:"Chesse", type:"cheese"},
    
]

const BuildControls=(props)=>{

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: Rs <strong>{props.price}</strong></p>
            {controls.map(ctrl=>{
                return <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label}
                        added={()=>props.ingredientAdded(ctrl.type)}
                        remove={()=>props.ingredientRemove(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}/>
            })}

        </div>
    )

}

export default BuildControls;

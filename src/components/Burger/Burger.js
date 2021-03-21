import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger =(props)=>{
    
    const otherIngredients=[];
    Object.entries(props.ingredient).map(([key,value])=>{
        while(value--){
            otherIngredients.push(key);
        }
    })
    let transformIngredients=otherIngredients
    .map((ingredient,index)=>{return <BurgerIngredient key={index} type={ingredient} />});

    if(transformIngredients.length===0){
        transformIngredients=<p>please add some ingredient!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient key={-1} type='bread-top'/>
            {transformIngredients}
            <BurgerIngredient key={-2} type='bread-bottom'/>

        </div>
    )
    


}

export default Burger;
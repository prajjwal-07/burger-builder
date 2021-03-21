import react,{Component} from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
const Ingredient_Price={
    salad:5,
    meat:10,
    bacon:5,
    cheese:5,
}
class BurgerBuilder extends Component{
    state={
        ingredient:{
            salad:0,
            meat:0,
            bacon:0,
            cheese:0,
        },
        totalPrice:100,
    }
    addIngredientHandler=(type)=>{
        const updatedIngredient={
            ...this.state.ingredient,
        }
        updatedIngredient[type]++;
        let updatedTotalPrice=this.state.totalPrice+Ingredient_Price[type];
        this.setState({
            totalPrice:updatedTotalPrice,
            ingredient:updatedIngredient
        });
    }
    removeIngredientHandler=(type)=>{
        const updatedIngredient={
            ...this.state.ingredient,
        }
        if(updatedIngredient[type]===0)
        return;
        updatedIngredient[type]--;
        let updatedTotalPrice=this.state.totalPrice-Ingredient_Price[type];
        this.setState({
            totalPrice:updatedTotalPrice,
            ingredient:updatedIngredient
        });
    }

    render(){
        const disableInfo={
            ...this.state.ingredient,
        }
        for(let key in disableInfo)
        {
            disableInfo[key]=disableInfo[key]===0
        }
        return(
            
            <Wrapper>
               <Burger ingredient={this.state.ingredient}/>
               <BuildControls 
               ingredientAdded={this.addIngredientHandler}
               ingredientRemove={this.removeIngredientHandler}
               disabled={disableInfo}
               price={this.state.totalPrice}/>
            </Wrapper>
        )
    }
}

export default BurgerBuilder;
import React, {Component, Fragment} from 'react';
import Burger from "../../components/Burger/Burger";


import './BurgerBuilder.css';
import BurgerController from "../../components/BurgerController/BurgerController";
const INGREDIENTS=[
    {name: 'Meat',price: 50,image: '../../images/meat.jpg'},
    {name: 'Cheese',price: 20,image: '../../images/cheese.jpg'},
    {name: 'Bacon',price: 30,image: '../../images/bacon.jpg'},
    {name: 'Salad',price: 5,image: '../../images/salad.jpg'}
];

class BurgerBuilder extends Component {
    state={
        ingredients:[
            {name: 'Meat',count: 0},
            {name: 'Cheese',count: 0},
            {name: 'Bacon',count: 0},
            {name: 'Salad',count: 0},
        ],
        totalPrice: 20
    };

    addIngredients = (index) => {
        const oldCount=this.state.ingredients[index].count;
        const newCount=oldCount+1;
        const count={...this.state.ingredients};
        count[index].count=newCount;

        const cost=this.state.totalPrice;
        const newCost=cost+INGREDIENTS[index].price;

        this.setState({ingredients: count,totalPrice:newCost});
    };

    removeIngredients=(index)=>{
        const oldCount=this.state.ingredients[index].count;
        const newCount=oldCount-1;
        const count={...this.state.ingredients};
        count[index].count=newCount;

        const cost=this.state.totalPrice;
        const newCost=cost-INGREDIENTS[index].price;

        this.setState({ingredients: count,totalPrice:newCost});
    };

    counter=(index)=>{
         return this.state.ingredients[index].count;
    };

    disabled=(index)=>{
         return this.state.ingredients[index].count===0;
};

    render() {
        // let disables=false;
        // for(let i in this.state.ingredients){
        //     disables=this.state.ingredients[i].count===0;
        // }
        return (
            <Fragment>
                <Burger
                    ingredients={this.state.ingredients}
                />
                <BurgerController
                    ingredients={INGREDIENTS}
                    count={this.counter}
                    add={this.addIngredients}
                    remove={this.removeIngredients}
                    price={this.state.totalPrice}
                    disables={this.disabled}
                />
            </Fragment>
        );
    }
}

export default BurgerBuilder;
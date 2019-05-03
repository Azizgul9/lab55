import React from 'react';
import Ingredient from "../Ingredients/Ingredients";


const Burger = ({ingredients}) => {
    const ingredientComponents=[];
   for(const ingredient in ingredients){
       const iCount=ingredients[ingredient].count;
       for(let i=0;i<iCount;i++){
        ingredientComponents.push(<Ingredient key={ingredients[ingredient].name+i} type={ingredients[ingredient].name}/>);
       }
   }
    return <div className={"Burger"}>
        <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
        </div>
        {ingredientComponents}
        <div className={"BreadBottom"}></div>
    </div>;
};

export default Burger;
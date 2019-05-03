import React from 'react';

const BurgerController = ({ingredients,count,add,remove}) => {
    ingredients.map(ingredient=>{
       return <div>
           <img src={ingredients[ingredient].image} alt={ingredients[ingredient].name}/>
           <span>{ingredients[ingredient].name}</span>
           <span>{()=>count([ingredient])}</span>
           <button onClick={()=>add([ingredient])}>ADD</button>
           <button onClick={()=>remove([ingredient])}>DELETE</button>
       </div>
    });
};

export default BurgerController;
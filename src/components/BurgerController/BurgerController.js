import React from 'react';

import './BurgerController.css';

const BurgerController = ({ingredients,count,add,remove,price,disables}) => {
    const menues = ingredients.map((ingredient, index) => (
            <div key={ingredient.name + index} >
                <div style={{float:'left'}}>
                    <span>{ingredient.name}</span>
                </div>
                <div style={{float:'right'}}>
                    <span>x{count(index)}</span>
                    <button onClick={() => add(index)}>ADD</button>
                    <button onClick={() => remove(index)} disabled={disables(index)}>DELETE</button>
                </div>
            </div>
        )
    );
    return(
        <div className={"menues"}>
            <h3>Total Order Cost :{price}</h3>
            {menues}
        </div>
    );
};

export default BurgerController;


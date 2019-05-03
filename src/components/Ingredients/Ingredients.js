import React from 'react';

const Ingredients = ({type}) => {
        switch(type){
            case 'Meat':
                return <div className={"Meat"}/>;
            case 'Bacon':
                return <div className={"Bacon"}/>;
            case 'Salad':
                return <div className={"Salad"}/>;
            case 'Cheese':
                return <div className={"Cheese"}/> ;
            default:
                return null;
        }
};

export default Ingredients;
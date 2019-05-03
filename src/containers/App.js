import React, {Component, Fragment} from 'react';
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

class App extends Component {
    render() {
        return <Fragment>
            <BurgerBuilder/>
        </Fragment>;
    }
}

export default App;
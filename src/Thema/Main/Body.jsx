import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import Homepage from '../Components/Homepage/Homepage';



function Body() {
    return (
        <div>
            <Switch>

                <Route path="/test" exact> <Homepage />  </Route>


            </Switch>
        </div>
    )
}

export default Body;

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import Users from './pages/Users'



function Routes() {
    return (
        <div>
            {/* // simplified own */}
            <Route path="/about" component={About} />

            <Route path="/users">
                <Users />
            </Route>

            <Route exact path="/">
                <Home />
            </Route>
        </div>
    )
}

export default Routes

import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Body from './Main/Body'
import Header from './Main/Header'
function Index() {
    return (
        <Router>
            <Header />
            <Body />
        </Router>

    )
}

export default Index
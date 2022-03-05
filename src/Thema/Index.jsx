import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Body from './Main/Body'
import Footer from './Main/Footer';
import Header from './Main/Header'
function Index() {
    return (
        <Router>
            <Header />
            <Body />
            <Footer />
        </Router>

    )
}

export default Index
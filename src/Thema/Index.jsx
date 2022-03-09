import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Landing from './Components/Landing/Landing';
import LandingFooter from './Components/Landing/LandingFooter';
import Body from './Main/Body'
import Footer from './Main/Footer';
import Header from './Main/Header'
function Index() {
    const [state, setState] = useState("1")
    return (

        <div>
            {
                state === '0' ?
                    <Router>
                        <Header />
                        <Body />
                        <Footer />
                    </Router>
                    :
                    <Router>
                        <Landing />
                        <LandingFooter />
                    </Router>
            }
        </div>

    )
}

export default Index
import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import LandingHeader from './Components/Landing/LandingHeader';
import Landing from './Components/Landing/Landing';
import LandingFooter from './Components/Landing/LandingFooter';
import Body from './Main/Body'
import Footer from './Main/Footer';
import Header from './Main/Header'
function Index() {
    const [state, setState] = useState("1")
    function onChange() {
        setState("0")
    }
    function landing() {
        setState("1")
    }
    return (

        <div>
            {
                state === '0' ?
                    <Router>
                        <Header landing={landing} />
                        <Body />
                        <Footer />
                    </Router>
                    :
                    <Router>
                        <LandingHeader onChange={onChange} />
                        <Landing />
                        <LandingFooter />
                    </Router>
            }
        </div>

    )
}

export default Index
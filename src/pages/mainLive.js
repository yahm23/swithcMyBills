import React from 'react'
import { Route, Switch} from "react-router-dom";
import ContactUs from './contactUs'
import HowItWorks from './howItWorks'
import LandingPage from './landingPage'
import OurApp from './ourApp'
import AboutUs from './aboutUs'
import SearchResults from './searchResults'
import PageNotFound from './pageNotFound'
import NavbarTop from '../structural/navbar';

export default function MainLive() {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <Switch>
                <Route path='/' exact component={LandingPage}/>
                <Route path='/contact' component ={ContactUs}/>
                <Route path='/how-it-works' component ={HowItWorks}/>
                <Route path='/our-app' component ={OurApp}/>
                <Route path='/search/:address/:lat/:lng' component ={SearchResults}/>
                <Route path='/about-us' component ={AboutUs}/>
                <Route component ={PageNotFound}/>
            </Switch>
            {/* <Footer></Footer> */}
        </div>
    )
}

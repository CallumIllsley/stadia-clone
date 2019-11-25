import React from 'react'
import Styles from './landing.module.css'
import Nav from '../../Nav/Nav'
import BG from '../../../Assets/bg.jpg'
import LandingHeader from '../Landing/LandingHeader'

function Landing() { 
    return (
        <div className={Styles.mainContainer}>
            <img className={Styles.BG}src={BG}></img>
            <Nav className={Styles.nav}/>
            <div className={Styles.headerContainer}>
                <LandingHeader/>
            </div>
        </div>
    )
}

export default Landing
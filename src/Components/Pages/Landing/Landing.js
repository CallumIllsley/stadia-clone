import React from 'react'
import Styles from './landing.module.css'
import Nav from '../../Nav/Nav'

function Landing() { 
    return (
        <div className={Styles.mainContainer}>
            <Nav/>
        </div>
    )
}

export default Landing
import React from 'react'
import Styles from './landing.module.css'
import Button from '@material-ui/core/Button'

function InfoPanel() { 
    return ( 
        <div className={Styles.infoContainer}>
            <div className={Styles.infoNav}>
                <Button className={`${Styles.signUp} ${Styles.btn}`}>Sign Up!</Button>
                <Button className={`${Styles.about} ${Styles.btn}`}>Learn More!</Button>
            </div>
        </div>
    )
}

export default InfoPanel
import React from 'react'
import Styles from './nav.module.css'
import Button from '@material-ui/core/Button'
import { activePage } from '../../Redux/Actions/Nav'
import { useSelector, useDispatch } from 'react-redux'

function Nav() { 
    const currentPage = useSelector(state => state.Nav.activePage)
    const dispatch = useDispatch()
    console.log(currentPage)

    return ( 
        <div className={Styles.navContainer}>
            <div className={Styles.navButtons}>
                <Button
                    size='small'
                    className={currentPage === 'Home' ? `${Styles.navButton} ${Styles.active}` : `${Styles.navButton}`} 
                    onClick={() => {
                        dispatch(activePage('Home'))
                        console.log(currentPage)
                    }}
                    >Home
                </Button>
                <Button 
                    size='small'
                    className={currentPage === 'About' ? `${Styles.navButton} ${Styles.active}` : `${Styles.navButton}`} 
                    onClick={() => dispatch(activePage('About'))}
                    >About
                </Button>
                <Button size='small' className={`${Styles.login}`} >Login</Button>
            </div>
        </div>
    )
}

export default Nav
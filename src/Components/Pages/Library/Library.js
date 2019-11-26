import React, { useEffect } from 'react'
import Styles from './library.module.css'
import Nav2 from '../../Nav2/Nav2'
import { useDispatch, useSelector } from 'react-redux'
import { activePage, showNav } from '../../../Redux/Actions/Nav'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { animated, useSpring } from 'react-spring'
import LibraryNav from './LibraryNav'
import CardView from './CardView'

function Library() {
    const dispatch = useDispatch()
    const viewNav = useSelector(state => state.Nav.navVis)
    const menuAnim = useSpring({
        opacity: 1,
        delay: 1200,
        from: {opacity: 0.1}
    })

    useEffect(() => {
        dispatch(activePage('Library'))
    })

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.nav}>
                <Nav2/>
            </div>
            <LibraryNav/>
                {!viewNav  
                    ? <animated.div style={menuAnim} className={Styles.navMenu}>
                        <MenuOutlinedIcon  onClick={() => dispatch(showNav(true))} className={Styles.navIcon}/>
                      </animated.div>
                    : null
                }
            <div className={Styles.gamesContainer}>
                <CardView/>
            </div>  
        </div>
    )
}

export default Library
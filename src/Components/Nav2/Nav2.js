import React from 'react'
import Styles from './nav2.module.css'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import { activePage, showNav }  from '../../Redux/Actions/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { animated, useTransition } from 'react-spring'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

function Nav2() { 
    const dispatch = useDispatch()
    const active = useSelector(state => state.Nav.activePage)
    const viewNav = useSelector(state => state.Nav.navVis)
    const transitions = useTransition(viewNav, null, {
        from: { transform: 'translateX(-100vw)', opacity: 0.1 }, 
        enter: { transform: 'translateX(0)', opacity: 1},
        leave: { transform: 'translateX(-10vw)', opacity: 0.1}
    })

    return transitions.map(({item, key, props}) => 
            item ? <animated.div key={key} style={props} className={Styles.navWrapper}>
                        <div className={Styles.navItem} onClick={() => dispatch(showNav(false))}>
                            <MenuOutlinedIcon className={Styles.navIcon}/>
                        </div>
                        <div className={active === 'Home' ? `${Styles.navItem} ${Styles.active}` : `${Styles.navItem}`} onClick={() => dispatch(activePage('Home'))}>
                            <HomeOutlinedIcon className={Styles.navIcon}/>
                        </div>
                        <div className={active === 'Library' ? `${Styles.navItem} ${Styles.active}` : `${Styles.navItem}`} onClick={() => dispatch(activePage('Library'))}>
                            <LibraryBooksOutlinedIcon className={Styles.navIcon}/>
                        </div>
                        <div className={active === 'Profile' ? `${Styles.navItem} ${Styles.active}` : `${Styles.navItem}`} onClick={() => dispatch(activePage('Profile'))}>
                            <PermIdentityOutlinedIcon className={Styles.navIcon}/>
                        </div>
                    </animated.div>
                :  null
    )
}

export default Nav2
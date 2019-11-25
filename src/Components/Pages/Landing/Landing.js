import React, { useRef } from 'react'
import Styles from './landing.module.css'
import Nav from '../../Nav/Nav'
import LandingHeader from '../Landing/LandingHeader'
import Fab from '@material-ui/core/Fab'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link, animateScroll as Scroll, scrollSpy, scroller, Element } from 'react-scroll'
import Steam from '../../../Assets/steam.jpg'
import Origin from '../../../Assets/origin.jpg'
import BattleNet from '../../../Assets/battlenet.jpg'
import EpicGames from '../../../Assets/epicgames.jpg'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
 
function Landing() { 
    const platformAnim = useSpring({ 
        opacity: 1, transform: 'scale(1)',
        reset: true, 
        from: {opacity: 0.1, transform: 'scale(0.1'}
    })
    
    const [ref, inView] = useInView({ 
        threshold: 0
    })

    return (
        <div className={Styles.mainContainer}>
            <Nav className={Styles.nav}/>
            <div className={Styles.headerContainer}>
                <LandingHeader/>
                <Link smooth={true} duration={500} to='platform'>
                    <Fab size='small'className={Styles.viewGames} color='secondary'>
                        <ExpandMoreIcon/>
                    </Fab>
                </Link>
            </div>
                <h1 className={Styles.platformsHeader}>All of your favourite platforms.</h1>
                <Element className={Styles.platformsContainer} name='platform'>
                    <div ref={ref} className={Styles.platforms}>
                        <animated.img style={inView ? platformAnim : null} className={Styles.platformImg} onClick={() => window.open('https://store.steampowered.com/')} src={Steam}/>
                        <animated.img style={inView ? platformAnim : null} className={Styles.platformImg} onClick={() => window.open('https://www.origin.com/')} src={Origin}/>
                        <animated.img style={inView ? platformAnim : null} className={Styles.platformImg} onClick={() => window.open('http://blizzard.com/')} src={BattleNet}/>
                        <animated.img style={inView ? platformAnim : null} className={Styles.platformImg} onClick={() => window.open('https://epicgames.com/')} src={EpicGames}/>
                    </div>
                </Element>
        </div>
    )
}

export default Landing
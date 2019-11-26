import React from 'react'
import Styles from './library.module.css'
import Fab from '@material-ui/core/Fab'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function GameCard({name, about, image}) { 

    const [active, setActive] = React.useState(false)

    return ( 
        <div className={Styles.gameCard} onMouseOver={() => setActive(true)}  onMouseLeave={() => setActive(false)} >
            {
                active 
                    ? <div className={Styles.gameCardInfo} >
                        <h1 className={Styles.gameCardName}>{name}</h1>
                        <h2 className={Styles.gameCardAbout}>{about}</h2>
                        <div className={Styles.play}>
                            <Fab color='secondary' onClick={() => console.log('working')}>
                                <PlayArrowIcon/>
                            </Fab>
                        </div>
                      </div>
                    : console.log('notactive')
                }
                <img  className={active ? `${Styles.gameCardImage} ${Styles.activeCardImage}` : `${Styles.gameCardImage}`} src={image}/>
        </div>
    )
}

export default GameCard
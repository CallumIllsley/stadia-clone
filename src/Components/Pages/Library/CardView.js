import React from 'react'
import Styles from './library.module.css'
import GameCard from './GameCard'
import { gamesList } from '../../../tempgameslist'


function CardView() { 
    const games = gamesList

    return (
        games.map((game) => {
            return (
                <GameCard name={game.name} about={game.about} image={game.image}/>
            )
        })
    )
}

export default CardView
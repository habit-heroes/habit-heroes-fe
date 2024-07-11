import './Streaks.css'
import StreaksCard from '../StreaksCard/StreaksCard'
import React from 'react'

export default function Streaks({streaks}) {
    return (
        <div className='streaks'>
            <h1>Streaks</h1>
            <ul className='streak-list'>
                {streaks.map((streak, index) => (
                    <li key={index}>
                        <StreaksCard streak={streak} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
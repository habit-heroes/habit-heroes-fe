import './Streaks.css'
import StreaksCard from '../StreaksCard/StreaksCard'
import React from 'react'

export default function Streaks({streaks}) {
    return (
        <div className='streaks'>
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
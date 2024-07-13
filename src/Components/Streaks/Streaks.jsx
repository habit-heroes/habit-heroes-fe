import './Streaks.css'
import StreaksCard from '../StreaksCard/StreaksCard'
import React from 'react'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUserStreaks } from "../../app/streaksSlice"

export default function Streaks() {
    const streaks = useSelector((state) => state.streaks.streaks)
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.streaks.loading);
  const error = useSelector((state) => state.streaks.error);

    useEffect(() => {
        if (user && user.id) {
            dispatch(fetchUserStreaks(user.id));
        }
    }, [dispatch, user])

    if (loading) {
        return <p>Loading Streaks...</p>;
      }
    
      if (error) {
        return <p>Error: {error}</p>;
      }

    return (
      <div className="streaks">
        <h1>Streaks</h1>
        <ul className="streak-list">
          {streaks.data && streaks.data.length > 0 ? (
            streaks.data.map((streak, index) => (
              <li className='streak-li' key={index}>
                <StreaksCard streak={streak} />
              </li>
            ))
          ) : (
            <p>No streaks yet</p>
          )}
        </ul>
      </div>
    );
  }
import React from 'react'
import './singleSong.scss'
import { getDate } from '../../utilities/getDate'
import { getTimeDuration } from '../../utilities/getTimeDuration'

const SingleSong = ({ song }) => {
  console.log(song)
  const { added_at, track } = song

  return (
    <ul className='single-track'>
      <li className='title__container'>
        <img src={track?.album?.images[0]?.url} alt='song logo' />
        <div>
          <p className='title'>{track?.name}</p>
          <p className='singer'>{track?.artists[0]?.name}</p>
        </div>
      </li>
      <li className='album-name'>
        <p>{track?.album?.name}</p>
      </li>
      <li className='date-added'>{getDate(added_at)}</li>
      <li className='song-duration'>{getTimeDuration(track?.duration_ms)}</li>
    </ul>
  )
}

export default SingleSong

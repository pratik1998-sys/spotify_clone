import React from 'react'
import './trackList.scss'
import track from '../../img/track.png'
import { BsFillVolumeUpFill, BsMusicNoteList } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa'

const TrackList = () => {
  return (
    <div className='trackList_container'>
      <hr style={{ color: '#848484' }} />
      <div className='title'>
        <img src={track} alt='track-logo' />
        <p>
          Sample Name
          <span>Artist</span>
        </p>
      </div>
      <div className='controls'>
        <i>
          <BsFillVolumeUpFill />
        </i>
        <input type='range' />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  )
}

export default TrackList

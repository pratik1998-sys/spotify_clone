import React from 'react'
import './songRow.css'

const SongRow = ({ track }) => {
  //console.log(track)
  return (
    <div className='songRow'>
      <img
        src={track?.album?.images[0]?.url}
        alt='song logo'
        className='songRow__album'
      />
      <div className='songRow__info'>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(', ')}
          {track.album.name}
        </p>
      </div>
    </div>
  )
}

export default SongRow

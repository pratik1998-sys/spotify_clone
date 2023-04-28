import React from 'react'
import { useSelector } from 'react-redux'
import './banner.scss'

const Banner = () => {
  const { currentPlaylistDetails } = useSelector((state) => state.userPlaylist)
  //console.log(currentPlaylistDetails)
  const { images, name, id, tracks, owner } = currentPlaylistDetails

  return (
    <div className='banner__container'>
      <div className='img__container'>
        <img src={images[0]?.url} alt='playlist' />
      </div>
      <div className='playlist__details'>
        <h4>Playlist</h4>
        <h1>{name}</h1>
        <div className=''>
          <h4>{owner.display_name}</h4>
          <div />
          <h4>{tracks.total} songs</h4>
        </div>
      </div>
      <div className='bottom__layer'></div>
    </div>
  )
}

export default Banner

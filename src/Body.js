import React from 'react'
import './body.css'
import Header from './Header'
import { useDataLayerValues } from './DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SongRow from './SongRow'

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValues()
  return (
    <div className='body'>
      <Header />
      <div className='body__info'>
        <img
          src={discover_weekly?.images[0]?.url}
          alt='discover weekly image'
        />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilledIcon fontSize='large' className='body__shuffle' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>
        {/*List of songs*/}
        {discover_weekly?.tracks.items.map((item) => {
          //console.log(item)
          return <SongRow track={item.track} key={item.added_at} />
        })}
      </div>
    </div>
  )
}

export default Body

import React from 'react'
import { useDataLayerValues } from './DataLayer'
import './player.css'
import Body from './Body'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Player = ({ spotify }) => {
  const [{ user }] = useDataLayerValues()

  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  )
}

export default Player

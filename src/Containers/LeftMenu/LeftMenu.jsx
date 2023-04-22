import React from 'react'
import './leftMenu.scss'
import { FaSpotify } from 'react-icons/fa'
import { Menu, MenuPlaylist } from '../index'
import { menuItems } from '../../utilities/menuItems'

const LeftMenu = () => {
  return (
    <div className='left_menu'>
      <div className='logo_container'>
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
      </div>
      <Menu title='Menu' menuItems={menuItems} />
      <MenuPlaylist />
    </div>
  )
}

export default LeftMenu

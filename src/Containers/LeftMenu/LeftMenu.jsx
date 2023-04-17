import React from 'react'
import './leftMenu.scss'
import { FaSpotify } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { Menu, MenuPlaylist, TrackList } from '../index'
import { menuItems } from '../../utilities/menuItems'

const LeftMenu = () => {
  return (
    <div className='left_menu'>
      <div className='logo_container'>
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <BsThreeDots />
        </i>
      </div>
      <div className='search_box'>
        <input type='text' placeholder='Search...' />
        <i className='search_icon'>
          <BiSearch />
        </i>
      </div>
      <Menu title='Menu' menuItems={menuItems} />
      <MenuPlaylist />
      <TrackList />
    </div>
  )
}

export default LeftMenu

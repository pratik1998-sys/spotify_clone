import React from 'react'
import './menuPlaylist.scss'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
import { playlistItems } from '../../utilities/playlistItems'

const MenuPlaylist = () => {
  return (
    <div className='menuPlaylist_container'>
      <div className='title'>
        <p>Playlists</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className='playList_items'>
        <ul>
          {playlistItems.map((item) => {
            return (
              <li key={item.id}>
                <i className='list'>
                  <BsMusicNoteList />
                </i>
                <p>{item.name}</p>
                <i className='trash'>
                  <BsTrash />
                </i>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MenuPlaylist

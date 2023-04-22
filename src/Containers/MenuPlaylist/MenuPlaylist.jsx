import React, { useEffect } from 'react'
import './menuPlaylist.scss'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
import { playlistItems } from '../../utilities/playlistItems'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const MenuPlaylist = () => {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.userLogin)

  const url = 'https://api.spotify.com/v1/me/playlists'

  const getAllPlaylists = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      return error.message
    }
  }

  useEffect(() => {
    getAllPlaylists(url)
  }, [])

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

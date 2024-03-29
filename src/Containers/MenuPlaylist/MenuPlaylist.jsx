import React, { useEffect, useState } from 'react'
import './menuPlaylist.scss'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserPlaylist,
  setCurrentPlaylistDetails,
} from '../../features/userPlaylistSlice'
import { Link } from 'react-router-dom'

const MenuPlaylist = () => {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.userLogin)
  const { playlists, isLoading, isError, error } = useSelector(
    (state) => state.userPlaylist
  )
  const [currentPlaylistName, setCurrentPlaylistName] = useState('')

  useEffect(() => {
    if (token) dispatch(getUserPlaylist(token))
  }, [token, dispatch])

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>{error}</div>

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
          {playlists?.items?.map((item) => {
            return (
              <li
                key={item.id}
                className={currentPlaylistName === item.name ? 'active' : ''}
                onClick={() => {
                  setCurrentPlaylistName(item.name)
                  dispatch(setCurrentPlaylistDetails(item.id))
                }}
              >
                <Link to={`/playlist/${item.id}`}>
                  <i className='list'>
                    <BsMusicNoteList />
                  </i>
                  <p>{item.name}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MenuPlaylist

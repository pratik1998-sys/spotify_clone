import React, { useEffect, useState } from 'react'
import './playlist.scss'
import UserWrapper from '../../HOC/UserWrapper'
import { useSelector, useDispatch } from 'react-redux'
import { Banner } from '../index'
import { useParams } from 'react-router-dom'
import { getCurrentPlaylist } from '../../features/playListSlice'
import { MdOutlineWatchLater } from 'react-icons/md'

const Playlist = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.userLogin)
  const { currentPlaylist, isLoading, isError, error } = useSelector(
    (state) => state.playlist
  )
  //console.log(currentPlaylist)

  useEffect(() => {
    dispatch(getCurrentPlaylist({ token, id }))
  }, [id, dispatch, token])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{error}</div>
  if (currentPlaylist)
    return (
      <div className='playlist'>
        <div className='playlist__container'>
          <Banner id={id} />
          <div className='playbutton'></div>
          <div className='songs__container'>
            <div className='headers'>
              <ul>
                <li>Title</li>
                <li>Album</li>
                <li>Date Added</li>
                <li>
                  <i>
                    <MdOutlineWatchLater />
                  </i>
                </li>
              </ul>
            </div>
            <ul className='songs'>
              {currentPlaylist?.items?.map((song) => {
                return <li key={song?.track?.id}>{song?.track?.name}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default UserWrapper(Playlist)

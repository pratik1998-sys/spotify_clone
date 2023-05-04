import React, { useEffect } from 'react'
import './home.scss'
import UserWrapper from '../../HOC/UserWrapper'
import { useSelector, useDispatch } from 'react-redux'
import { getTopTracks, getTopArtists } from '../../features/homeSlice'
import { SingleCard } from '../../Components'
import { AiFillPlayCircle } from 'react-icons/ai'

const Home = () => {
  const { token } = useSelector((state) => state.userLogin)
  const { topTracks, topArtists, isLoading, IsError, error } = useSelector(
    (state) => state.home
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopTracks({ token }))
    dispatch(getTopArtists({ token }))
  }, [token, dispatch])
  if (isLoading) return <div>Loading...</div>
  if (IsError) return <div>{error}</div>
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='top__tracks'>
          <h2>Your Top Tracks</h2>
          <ul className='tracks__container'>
            {topTracks?.items?.map((item) => {
              return (
                <li className='single__track' key={item.id}>
                  <SingleCard item={item} type='track' />
                  <AiFillPlayCircle className='play-button' />
                </li>
              )
            })}
          </ul>
        </div>
        <div className='top__artists'>
          <h2>Your Top Artists</h2>
          <ul className='artist__container'>
            {topArtists?.items?.map((item) => {
              return (
                <li className='single__artist' key={item.id}>
                  <SingleCard item={item} type='artist' />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserWrapper(Home)

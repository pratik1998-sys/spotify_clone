import React from 'react'
import './userWrapper.scss'
import { useSelector } from 'react-redux'

const UserWrapper = (Component) =>
  function HOC() {
    const { user, isLoading, isError, error } = useSelector(
      (state) => state.userLogin
    )
    //console.log(user)

    if (isLoading) return <div>Loading user deatails...</div>
    if (isError) return <div>{error}</div>
    return (
      <div className='user_wrapper'>
        <div className='user'>
          <div className='user__container'>
            <img src={user?.images[0]?.url} alt='' />
            <h4>{user?.display_name}</h4>
          </div>
        </div>
        <Component />
      </div>
    )
  }

export default UserWrapper

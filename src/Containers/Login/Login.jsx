import React from 'react'
import spotify from '../../img/spotify_logo.png'
import './login.scss'

const Login = () => {
  const clickHandler = () => {
    const clientId = '03ec98cd761a462a86b37e1ccd6b41dd'
    const redirectUrl = 'http://localhost:3000/'
    const apiUrl = 'https://accounts.spotify.com/authorize'
    const scope = [
      'user-read-email',
      'user-read-private',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-playback-position',
      'user-read-recently-played',
      'user-top-read',
      'playlist-read-private',
      'playlist-read-collaborative',
      'playlist-modify-private',
      'playlist-modify-public',
    ]
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      ' '
    )}&response_type=token&show_dialog=true`
  }

  return (
    <div className='login'>
      <div className='login__container'>
        <img src={spotify} alt='' />
        <button onClick={clickHandler}>Connect</button>
      </div>
    </div>
  )
}

export default Login

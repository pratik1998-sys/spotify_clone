import React, { useEffect } from 'react'
import './login.css'
import { loginUrl } from './spotify'

const Login = () => {
  return (
    <div className='login'>
      {/* spotify logo */}
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'
        alt='spotify logo'
      />
      {/* spotify login option */}
      <a href={loginUrl}>Login to Spotify</a>
    </div>
  )
}

export default Login

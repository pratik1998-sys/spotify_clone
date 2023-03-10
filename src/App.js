import { useEffect, useState } from 'react'
import './App.css'
import Login from './Login'
import { getAccessToken } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useDataLayerValues } from './DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useDataLayerValues()

  useEffect(() => {
    const hash = getAccessToken()
    window.location.hash = ''
    const token = hash.access_token
    if (token) {
      //console.log(token)
      dispatch({ type: 'SET_TOKEN', token: token })
      spotify.setAccessToken(token)
      spotify.getMe().then((user) => dispatch({ type: 'SET_USER', user: user }))
      spotify.getUserPlaylists().then((userPlaylists) => {
        dispatch({ type: 'SET_PLAYLISTS', userPlaylists: userPlaylists })
      })
      spotify.getPlaylist('00A8Xy1FR8GDlEwX7iJOKm').then((response) => {
        // console.log(response)
        dispatch({ type: 'SET_DISCOVER_WEEKLY', discover_weekly: response })
      })
    }
  }, [])
  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  )
}

export default App

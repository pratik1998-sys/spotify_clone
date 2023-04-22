import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import {
  LeftMenu,
  Home,
  Login,
  Search,
  Library,
  Player,
} from './Containers/index'
import { setToken } from './features/userLoginSlice'

function App() {
  const { token } = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1]
      //console.log(token)
      dispatch(setToken(token))
    }
  }, [token, dispatch])

  if (!token) return <Login />
  if (token)
    return (
      <main className='app'>
        <div className='background' />
        <BrowserRouter>
          <LeftMenu />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/search' exact element={<Search />} />
            <Route path='/library' exact element={<Library />} />
          </Routes>
          <Player />
        </BrowserRouter>
      </main>
    )
}

export default App

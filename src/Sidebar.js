import React from 'react'
import './sidebar.css'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@mui/icons-material/Home'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import { useDataLayerValues } from './DataLayer'

const Sidebar = () => {
  const [{ playLists }] = useDataLayerValues()
  return (
    <div className='sidebar'>
      <img
        className='logo'
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'
        alt='spotify logo'
      />
      <SidebarOptions icon={<HomeIcon />} title='Home' />
      <SidebarOptions icon={<SearchOutlinedIcon />} title='Search' />
      <SidebarOptions icon={<LibraryMusicIcon />} title='Library' />
      <br />
      <strong className='sidebar__title'>PLAYLIST</strong>
      <hr />
      {playLists?.items?.map((playlist) => {
        return <SidebarOptions key={playlist.id} title={playlist.name} />
      })}
    </div>
  )
}

export default Sidebar

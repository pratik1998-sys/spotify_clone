import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from 'react-icons/fa'
import { BsFillHouseFill, BsJournalAlbum } from 'react-icons/bs'
import { BiPulse } from 'react-icons/bi'

export const menuItems = [
  { id: 1, icon: <BsFillHouseFill />, title: 'Home' },
  { id: 2, icon: <BiPulse />, title: 'Discover' },
  { id: 3, icon: <FaBroadcastTower />, title: 'Radio' },
  { id: 4, icon: <FaMicrophoneAlt />, title: 'Artist' },
  { id: 5, icon: <BsJournalAlbum />, title: 'Albums' },
  { id: 6, icon: <FaPodcast />, title: 'Podcasts' },
]

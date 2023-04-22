import { FaSearch } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'
import { BiLibrary } from 'react-icons/bi'

export const menuItems = [
  { id: 1, icon: <BsFillHouseFill />, title: 'Home', link: '/' },
  { id: 2, icon: <FaSearch />, title: 'Search', link: '/search' },
  { id: 3, icon: <BiLibrary />, title: 'Library', link: '/library' },
]

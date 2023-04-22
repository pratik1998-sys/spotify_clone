import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

const Menu = ({ title, menuItems }) => {
  const [currentMenu, setCurrentMenu] = useState('Home')

  return (
    <div className='menu_container'>
      <p className='title'>{title}</p>
      <ul>
        {menuItems.map((item) => {
          return (
            <li
              className={currentMenu === item.title ? 'active' : ''}
              key={item.id}
              onClick={(e) => {
                setCurrentMenu(item.title)
              }}
            >
              <Link to={item.link}>
                <i>{item.icon}</i>
                <p>{item.title}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Menu

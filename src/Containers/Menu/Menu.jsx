import React from 'react'
import './menu.scss'

const Menu = ({ title, menuItems }) => {
  return (
    <div className='menu_container'>
      <p className='title'>{title}</p>
      <ul>
        {menuItems.map((item) => {
          return (
            <li className='' key={item.id}>
              <a href=''>
                <i>{item.icon}</i>
                <p>{item.title}</p>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Menu

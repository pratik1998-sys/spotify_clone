import React from 'react'
import './sidebarOption.css'

const SidebarOptions = ({ title, icon }) => {
  return (
    <div className='sidebarOption'>
      <div>{icon}</div>
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarOptions

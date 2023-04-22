import React from 'react'
import { FaCheck, FaEllipsisH, FaHeadphones } from 'react-icons/fa'
import artist from '../../img/artist.jpg'
import check from '../../img/check.png'
import './banner.scss'

const Banner = () => {
  return (
    <div className='banner__container'>
      <div className='background-img'>
        <img src={artist} alt='background img' />
      </div>
      <div className='banner__content'>
        <div className='breadCrump'>
          <p>
            Home <span> /Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className='artist'>
          <div className='left'>
            <div className='name'>
              <h2>A-Ha</h2>
              <img src={check} alt='check icon' />
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              11,112,134 <span>Monthly Listeners</span>
            </p>
          </div>
          <div className='right'>
            <a href=''>Play</a>
            <a href=''>
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>
      <div className='bottom__layer'></div>
    </div>
  )
}

export default Banner

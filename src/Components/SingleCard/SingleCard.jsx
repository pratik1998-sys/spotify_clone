import React from 'react'
import './singleCard.scss'

const SingleCard = ({ item, type }) => {
  if (type === 'artist') {
    const { images, name } = item

    return (
      <div className='item__container'>
        <div className='img__container'>
          <img src={images[0]?.url} alt={name} />
        </div>
        <div className='description'>
          <p>{name}</p>
        </div>
      </div>
    )
  }
  if (type === 'track') {
    const { album, name, artists } = item
    return (
      <div className='item__container'>
        <div className='img__container'>
          <img src={album?.images[0]?.url} alt={name} />
        </div>
        <div className='description'>
          <p>
            {name.slice(0, 12)}
            {name.length > 12 ? '...' : ''}
          </p>
          <p>
            {artists[0]?.name.slice(0, 16)}
            {artists[0]?.name.length > 16 ? '...' : ''}
          </p>
        </div>
      </div>
    )
  }
}

export default SingleCard

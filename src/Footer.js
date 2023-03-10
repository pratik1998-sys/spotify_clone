import React from 'react'
import './footer.css'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import { Grid, Slider } from '@mui/material'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img
          src='https://www.clipartmax.com/png/small/110-1104884_bollywood-songs-v2-android.png'
          alt='song_logo'
          className='song__logo'
        />
        <div className='song__info'>
          <h4>Dirty Dancer</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className='volume__slider' />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer

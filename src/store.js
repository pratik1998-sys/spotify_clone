import { configureStore } from '@reduxjs/toolkit'
import playListReducer from './features/playListSlice'
import userLoginReducer from './features/userLoginSlice'
import userPlaylistReducer from './features/userPlaylistSlice'
import homeReducer from './features/homeSlice'

const store = configureStore({
  reducer: {
    playlist: playListReducer,
    userLogin: userLoginReducer,
    userPlaylist: userPlaylistReducer,
    home: homeReducer,
  },
})

export default store

import { configureStore } from '@reduxjs/toolkit'
import playListReducer from './features/playListSlice'
import userLoginReducer from './features/userLoginSlice'
import userPlaylistReducer from './features/userPlaylistSlice'

const store = configureStore({
  reducer: {
    playList: playListReducer,
    userLogin: userLoginReducer,
    userPlaylist: userPlaylistReducer,
  },
})

export default store

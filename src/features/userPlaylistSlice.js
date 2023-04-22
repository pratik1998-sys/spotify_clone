import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  playlists: [],
  isLoading: false,
  isError: false,
}

const userPlaylistSlice = createSlice({
  name: 'userPlaylistSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: {},
})

// Extract the action creators object and the reducer
const { actions, reducer } = userPlaylistSlice
// Extract and export each action creator by name
export const {} = actions
// Export the reducer, either as a default or named export
export default reducer

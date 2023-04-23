import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  currentPlaylist: {},
  isLoading: false,
  isError: false,
  error: '',
}

export const getCurrentPlaylist = createAsyncThunk(
  'userPlaylist/getCurrentPlaylist',
  async ({ token, id }) => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${id}/tracks?offset=0&limit=100&locale=en-US,en;q=0.9,hi;q=0.8`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

const playListSlice = createSlice({
  name: 'playList',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentPlaylist.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(getCurrentPlaylist.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.currentPlaylist = action.payload
    })
    builder.addCase(getCurrentPlaylist.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.payload
    })
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = playListSlice
// Extract and export each action creator by name
export const {} = actions
// Export the reducer, either as a default or named export
export default reducer

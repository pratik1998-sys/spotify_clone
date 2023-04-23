import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://api.spotify.com/v1/me/playlists'

const initialState = {
  playlists: [],
  currentPlaylistDetails: {},
  isLoading: true,
  isError: false,
  error: '',
}

export const getUserPlaylist = createAsyncThunk(
  'userPlaylist/getUserPlaylist',
  async (token) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      // console.log(response.data)
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

const userPlaylistSlice = createSlice({
  name: 'userPlaylist',
  initialState: initialState,
  reducers: {
    setCurrentPlaylistDetails: (state, action) => {
      state.currentPlaylistDetails = state.playlists.items.filter(
        (playlist) => playlist.id === action.payload
      )[0]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserPlaylist.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(getUserPlaylist.fulfilled, (state, action) => {
      state.isLoading = false
      state.playlists = action.payload
    })
    builder.addCase(getUserPlaylist.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.payload
    })
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = userPlaylistSlice
// Extract and export each action creator by name
export const { setCurrentPlaylistDetails } = actions
// Export the reducer, either as a default or named export
export default reducer

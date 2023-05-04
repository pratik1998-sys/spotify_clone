import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  topTracks: [],
  topArtists: [],
  isLoading: false,
  IsError: false,
  error: '',
}

export const getTopTracks = createAsyncThunk(
  'home/getTopTracks',
  async ({ token }) => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      //console.log(response)
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

export const getTopArtists = createAsyncThunk(
  'home/getTopArtists',
  async ({ token }) => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/me/top/artists?limit=50&offset=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      //console.log(response)
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getTopTracks.pending, (state, action) => {
      state.isLoading = true
      state.IsError = false
    })
    builder.addCase(getTopTracks.fulfilled, (state, action) => {
      state.isLoading = false
      state.IsError = false
      state.topTracks = action.payload
    })
    builder.addCase(getTopTracks.rejected, (state, action) => {
      state.isLoading = false
      state.IsError = true
      console.log(action.payload)
      state.error = action.payload
    })
    builder.addCase(getTopArtists.pending, (state, action) => {
      state.isLoading = true
      state.IsError = false
    })
    builder.addCase(getTopArtists.fulfilled, (state, action) => {
      state.isLoading = false
      state.IsError = false
      state.topArtists = action.payload
    })
    builder.addCase(getTopArtists.rejected, (state, action) => {
      state.isLoading = false
      state.IsError = true
      state.error = action.payload
    })
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = homeSlice
// Extract and export each action creator by name
export const {} = actions
// Export the reducer, either as a default or named export
export default reducer

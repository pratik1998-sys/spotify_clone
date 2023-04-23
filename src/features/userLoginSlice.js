import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  token: null,
  user: {},
  isLoading: false,
  isError: false,
  error: false,
}

export const getUserDetails = createAsyncThunk(
  'userLogin/getUserDetails',
  async (token) => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.isLoading = false
      //console.log(action.payload)
      state.user = action.payload
    })
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.payload
    })
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = userLoginSlice
// Extract and export each action creator by name
export const { setToken } = actions
// Export the reducer, either as a default or named export
export default reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  token: null,
}

const userLoginSlice = createSlice({
  name: 'userLoginSlice',
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
  extraReducers: {},
})

// Extract the action creators object and the reducer
const { actions, reducer } = userLoginSlice
// Extract and export each action creator by name
export const { setToken } = actions
// Export the reducer, either as a default or named export
export default reducer

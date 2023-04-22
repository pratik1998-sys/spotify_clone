import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  songs: [],
}

const postsSlice = createSlice({
  name: 'playList',
  initialState: initialState,
  reducers: {},
  extraReducers: {},
})

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice
// Extract and export each action creator by name
export const { createPost, updatePost, deletePost } = actions
// Export the reducer, either as a default or named export
export default reducer

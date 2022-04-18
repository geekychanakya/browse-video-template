import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  url: '',
  videos: [],
  error: ''
}

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    fetchVideos(state, action) {
      state.url = action.payload.url
      state.videos = action.payload.videos
      state.error = action.payload.error
    }
  }
})

export const videosActions = videosSlice.actions
export default videosSlice.reducer

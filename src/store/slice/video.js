import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  video: [],
  error: ''
}

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    fetchVideo(state, action) {
      state.video = action.payload.video
      state.error = action.payload.error
    }
  }
})

export const videoActions = videoSlice.actions
export default videoSlice.reducer

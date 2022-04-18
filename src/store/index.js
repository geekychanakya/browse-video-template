import { configureStore } from "@reduxjs/toolkit"
import videosReducer from './slice/videos'
import authReducer from './slice/auth'
import videoReducer from './slice/video'

const store = configureStore({
  reducer: {
    videos: videosReducer,
    auth: authReducer,
    video: videoReducer
  }
})

export default store

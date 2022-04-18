import { videoActions } from '../slice/video'

export const fetchCurrentVideo = (id) => {
  return async (dispatch, getState) => {
    const currId = parseInt(id)
    const videoList = getState().videos.videos
    try {
      const video = videoList.filter(vid => vid.id === currId)
      dispatch(videoActions.fetchVideo({ video: video[0] }))
    } catch (error) {
      dispatch(videoActions.fetchVideo({
        error: error.message
      }))
    }
  }
}

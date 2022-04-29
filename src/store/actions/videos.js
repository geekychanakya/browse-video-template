import { videosActions } from '../slice/videos'
const { REACT_APP_PEXELS_KEY, REACT_APP_PEXELS_BASE } = process.env

const fetchData = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': REACT_APP_PEXELS_KEY,
      'Content-Type': 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error('Error fetching data!!')
  }
  const data = await response.json()
  return data
}

export const fetchVideoData = () => {
  return async (dispatch) => {
    try {
      // fetch 15 videos initially
      const videos = await fetchData(`${REACT_APP_PEXELS_BASE}/videos/search?query=Nature&size=medium&page=1&per_page=15`)
      dispatch(videosActions.fetchVideos(videos))
    } catch (error) {
      dispatch(videosActions.fetchVideos({
        url: '404 Not found!',
        error: error.message
      }))
    }
  }
}

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Link, Outlet } from 'react-router-dom'
import { fetchVideoData } from '../store/actions/videos'
import { fetchCurrentVideo } from '../store/actions/video'
import loading from '../ui/loading.png'
import play from '../ui/play.png'

const Videos = ({ authorized }) => {
  const dispatch = useDispatch()
  const videoList = useSelector(state => state.videos)

  // initially the app will render showing 10 videos
  useEffect(() => {
    dispatch(fetchVideoData())
  }, [dispatch])

  const displayThumbnail = (video) => {
    const { id, video_pictures, user } = video
    return <Link
      to={`/videos/${id}`}
      key={id}
      onClick={() => fetchCurrent(id)}
    >
      <img src={video_pictures[0].picture} alt={user.name} />
    </Link>
  }

  const fetchCurrent = async (id) => {
    await dispatch(fetchCurrentVideo(id))
  }

  if (!authorized.username && !authorized.loginToken) {
    return <Navigate to='/login' />
  }

  return (
    <div className='flexbox-section'>
      {
        !videoList.url
        ? <div className='flexbox-loader'>
          <img className='loading' src={loading} alt='loading' />
          <h2>Loading Videos...</h2>
        </div>
        : <div className='flexbox-items'>
          {
            videoList.error
            ? <div className='flexbox-404'>
                <h2>{videoList.error}</h2>
                <h1>{videoList.url}</h1>
              </div>
            : <div className='flexbox-videos'>
              {videoList.videos.map((video) => {
                return (
                  <div key={video.id} className='flexbox-video'>
                    <div key={video.id} className='flexbox-thumbnail'>
                      { displayThumbnail(video) }
                      <div className='flexbox-author'>
                        <span>Author: </span>
                        <div><strong>{video.user.name}</strong></div>
                      </div>
                      <div className='flexbox-play'>
                        <img src={play} alt='play' />
                      </div>
                      <Outlet />
                    </div>
                  </div>
                )
              })}
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Videos

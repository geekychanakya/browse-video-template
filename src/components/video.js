import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Player from './player'
import Comment from './comment'

const Video = ({ authorized }) => {
  const currentVideo = useSelector(state => state.video)

  const displayVideo = (videos) => {
    let fileWidth = Math.max.apply(Math, videos.map((vid) => vid.width));
    const video = videos.filter(vid => vid.width === fileWidth);
    return <Player video={video[0]} />
  }

  if (!authorized.username && !authorized.loginToken) {
    return <Navigate to='/login' />
  }

  const { id, user, video_files } = currentVideo.video
  return (
    <div className='flexbox-section'>
      <div className='flexbox-videos'>
        <div key={id} className='flexbox-video'>
          <div className='flexbox-author'>
            <span>Author: </span>
            <span><strong>{user.name}</strong></span>
          </div>
          <div className='display-video'>
            {displayVideo(video_files)}
          </div>
          <Comment />
        </div>
      </div>
    </div>
  )
}

export default Video

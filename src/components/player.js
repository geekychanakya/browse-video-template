import ReactPlayer from 'react-player'

const Player = ({ video }) => {
  return <ReactPlayer playing controls url={video.link} />
}

export default Player

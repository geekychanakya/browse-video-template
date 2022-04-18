import { useState } from 'react'
import '../ui/style/switch.css'

const Comment = () => {
  const [ishidden, setIshidden] = useState(false)
  const [comment, setComment] = useState('')

  const toggleComment = (ev) => {
    setIshidden(ev.target.checked)
  }

  const updateComment = (e) => {
    setComment(e.target.value)
  }

  const saveComment = () => {
    alert(comment)
  }

  return (
    <div className='flexbox-comments'>
      <div className='comments-toggler'>
        <label className="switch">
          <input type="checkbox" onChange={(e) => toggleComment(e)} />
          <span className="slider"></span>
        </label> 
        <span className='text'>Hide / Show comments</span>
      </div>
      <div className={`comments ${ishidden ? 'hidden' : ''}`}>
        <input type="text" placeholder='Enter your comment' onChange={(e) => updateComment(e)} />
        <button className={`comment-btn ${!comment ? 'disabled' : ''}`} disabled={!comment} onClick={() => saveComment()}>Post</button>
      </div>
    </div>
  )
}

export default Comment

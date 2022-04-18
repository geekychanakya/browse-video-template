import { useDispatch } from 'react-redux'
import { deleteAuthorization } from '../store/actions/auth'

const Logout = () => {
  const dispatch = useDispatch()

  const sendReq = async () => {
    await dispatch(deleteAuthorization())
  }

  return (
    <div className='flexbox-logout'>
      <button className='logout-btn' onClick={() => sendReq()}>Log Out</button>
    </div>
  )
}

export default Logout

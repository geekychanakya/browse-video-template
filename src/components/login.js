import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuthorization } from '../store/actions/auth'
import user from '../ui/user.png'
import password from '../ui/password.png'
import login from '../ui/login.png'

const Login = ({ authorized }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (authorized.username && authorized.loginToken) {
      navigate('/videos')
    }
  }, [authorized.username, authorized.loginToken, navigate])

  const base_inputs = {
    username: '',
    password: ''
  };
  const [data, setData] = useState(base_inputs)

  const updateLogin = (e) => {
    const newObj = {
      ...data,
      [e.target.name]: e.target.value
    }
    setData(newObj)
  }

  const sendReq = async (data) => {
    await dispatch(getAuthorization(data))
  }

  return (
    <div className='flexbox-login'>
      <div className='login-logo'>
        <img src={login} alt='Login' />
      </div>
      <div className='flexbox-user'>
        <input type='text' placeholder='Enter username' name='username' onChange={(e) => updateLogin(e)} className='user'/>
        <span className='input-icon'>
          <img src={user} alt='User' height='20' />
        </span>
      </div>
      <div className='flexbox-password'>
        <input type='password' placeholder='Enter password' name='password' onChange={(e) => updateLogin(e)} className='password'/>
        <span className='input-icon'>
          <img src={password} alt='Password' height='20' />
        </span>
      </div>
      <button className='login-btn' onClick={() => sendReq(data)}>Login</button>
      <div className='login-error'>{authorized.loginError}</div>
    </div>
  )
}

export default Login

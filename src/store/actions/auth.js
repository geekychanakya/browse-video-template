import { authActions } from '../slice/auth'

const query = (user, pass) => {
  return new Promise((resolve, reject) => {
    if (user !== 'admin') {
      reject(new Error('Invalid Username'))
    } else if (pass !== '123456') {
      reject(new Error('Invalid Password'))
    } else {
      resolve()
    }
  })
}

export const getAuthorization = ({ username, password }) => {
  return async (dispatch) => {
    query(username, password)
      .then(() => dispatch(authActions.fetchAuthorization({
        username: 'admin',
        token: 'Iq3P02sBCDyNCYIBaD6ef7oTEgZVyi3U'
      })))
      .catch((err) => dispatch(authActions.fetchAuthorization({
        error: err.message
      })))
  }
}

export const deleteAuthorization = () => {
  return async (dispatch) => {
    dispatch(authActions.fetchAuthorization({
      username: '',
      token: ''
    }))
  }
}


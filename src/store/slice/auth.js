import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  username: '',
  loginToken: '',
  loginError: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchAuthorization(state, action) {
      state.username = action.payload.username
      state.loginToken = action.payload.token
      state.loginError = action.payload.error
    }
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer

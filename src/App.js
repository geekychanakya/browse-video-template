import { useSelector } from 'react-redux'
import Videos from './components/videos';
import Video from './components/video';
import Login from './components/login';
import Logout from './components/logout'
import './ui/style/App.css';
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const loginState = useSelector(state => state.auth)
  const location = useLocation();

  return (
    <div className="App flexbox-container">
      <div className='flexbox-header'>
        { location.pathname !== '/login' && location.pathname !== '/' ? <Logout /> : null }
      </div>
      <Routes>
        <Route path='/' element={<Login authorized={loginState} />} />
        <Route path='/login' element={<Login authorized={loginState} />} />
        <Route path='/videos' element={<Videos authorized={loginState} />} />
        <Route path='/videos/:videoId' element={<Video authorized={loginState} />} />
        <Route
          path='*'
          element={
            <div>
              <h1>404</h1>
              <h2>There's nothing here!</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

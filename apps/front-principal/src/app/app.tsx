import * as React from 'react';
import { useEffect } from 'react';
import { Link,useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import './app.scss';
import Home from './views/home/component';
import Chat from './views/chat/component';
import Profile from './views/profile/component';
import Config from './views/config/component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faGear,
  faArrowAltCircleRight,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from './hooks/auth';

const FrontAuth = React.lazy(() => import('front-auth/Module'));

export function App() {

const { haveToken } = useAuth();
const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
  if (!haveToken) {
    navigate('/login');
  }
}, [haveToken, navigate]);


useEffect(() => {
    if (!haveToken) {
      navigate('/login');
    }
    else if(location.pathname=='/login') {
      navigate('/chat')
    }
  }, [haveToken, navigate]);



  return (
    <div className="main-container">
    {haveToken ? (
      <>
        <div className="sidebar" role="navigation">
          <h2 className="logo">❤️</h2>
          <ul>
            <Link to="/home">
              <li>
                <FontAwesomeIcon icon={faHouse} />
              </li>
            </Link>
            <Link to="/chat">
              <li>
                <FontAwesomeIcon icon={faMessage} />
              </li>
            </Link>
            <Link to="/profile">
              <li>
                <FontAwesomeIcon icon={faUser} />
              </li>
            </Link>
            <Link to="/config">
              <li>
                <FontAwesomeIcon icon={faGear} />
              </li>
            </Link>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/config" element={<Config />} />
          </Routes>
        </div>
      </>
    ) : (
      <div className="login">
        <FrontAuth></FrontAuth>
      </div>
    )}
  </div>
  );
}

export default App;

<Route path="/login" element={<FrontAuth />} />

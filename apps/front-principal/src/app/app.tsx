import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
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

const FrontAuth = React.lazy(() => import('front-auth/Module'));

const logged = true;

export function App() {
  return (
    <div className="main-container">
      {logged ? (
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
              <Link to="/login">
                <li>
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </li>
              </Link>
            </ul>
          </div>
          <div className="content">
            <Routes>
            <Route path="/" element={<FrontAuth />} />
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

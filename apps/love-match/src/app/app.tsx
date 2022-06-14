import './app.scss';
import { Route, Routes, Link } from 'react-router-dom';
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
import Login from './views/login/component';

const logged = false;

const App = () => {
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
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/config" element={<Config />} />
            </Routes>
          </div>
        </>
      ) : (
        <div className="login">
          <Login></Login>
        </div>
      )}
    </div>
  );
};

export default App;

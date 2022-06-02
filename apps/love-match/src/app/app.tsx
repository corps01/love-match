import './app.scss';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './views/home/component';
import Profile from './views/profile/component';
import Config from './views/config/component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
      <div className="header-container" role="navigation">
        <div className='header'>
        <h2>❤️ love-match</h2>
        <ul>
          <li>
          <FontAwesomeIcon icon={faCoffee} />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/config">Config</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="router">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/config" element={<Config />} />
          </Routes>
        </div>
      </div>
      </div>
  );
};

export default App;

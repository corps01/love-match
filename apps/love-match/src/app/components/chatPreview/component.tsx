import { useState } from 'react';
import './style.scss';

const ChatPreview = () => {

  const [currentChat, setCurrentChat] = useState()

  return (
    <div className="ChatPreview" onClick={()=>setCurrentChat}>
      <div className="profile-img">
        <img src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg" />
      </div>
      <div className="preview-texts">
        <div className="preview-header">
          <p className='chat-name'>Name</p>
          <p className='chat-time'>Justo Ahora</p>
        </div>
        <div className="preview-message">
          <p>
            I have to give a presentation on global warming on Friday, and I am
            so nervous.
          </p>
          <p className='unread-count'>3</p>
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;

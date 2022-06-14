import ChatPreview from '../chatPreview/component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const ChatSidebar = () => {
  return (
    <div className="chat-sidebar">
      <div className="card-header">
        <h3>Chats</h3>
        <div className="search-bar">
          <input type="text" placeholder='Search Users'/>
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </div>
      </div>
      <div className="chats-container">
        <ChatPreview></ChatPreview>
        <ChatPreview></ChatPreview>
        <ChatPreview></ChatPreview>
        <ChatPreview></ChatPreview>
        <ChatPreview></ChatPreview>
        <ChatPreview></ChatPreview>
        <ChatPreview></ChatPreview>
        <ChatPreview></ChatPreview>
        <ChatPreview></ChatPreview>
        <ChatPreview></ChatPreview>
      </div>
    </div>
  );
};

export default ChatSidebar;

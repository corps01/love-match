import ChatSidebar from "../../components/chatSidebar/component";
import ChatHeader from "../../components/chatHeader/component";
import ChatContent from "../../components/chatContent/component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "./styles.scss"


const Chat = () => {
  return ( <>
  <ChatSidebar/>
  <div className="chat-container">
    <ChatHeader/>
    <ChatContent/>
    <div className="chat-input">
    <input type="text" placeholder="Escribe aqui tu mensaje..."></input>
    <FontAwesomeIcon className="send-icon" icon={faArrowUp} />
    </div>
  </div>
  </> );
}

export default Chat;

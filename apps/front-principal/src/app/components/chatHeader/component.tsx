import './styles.scss';

const ChatHeader = () => {
  return ( <div className="chat-header">
    <div className="profile-img">
        <img src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg" />
      </div>
      <div className='chat-contact-info'>
        <h2>Nombre</h2>
        <p>Status</p>
      </div>
  </div> );
}

export default ChatHeader;

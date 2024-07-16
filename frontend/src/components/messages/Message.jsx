import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePicture = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
  const shakeClass = message.shouldShake ? 'shake' : '';
  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-6 md:w-10 rounded-full'>
          <img src={profilePicture} alt='user avatar' />
        </div>
      </div>
      <div
        className={`chat-bubble min-h-[2.5em] text-white text-sm md:text-md ${shakeClass} ${bubbleBgColor}`}
      >
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>
        {new Date(message.createdAt).toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
    </div>
  );
};

export default Message;

import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

 function ChatMessages({chatMessages}){
        const chatMessagesRef = useRef(null);

        useEffect(()=>{
          const containerElem= chatMessagesRef.current;
          if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        },[chatMessages]);
        return(
          <div className="chat-messages-container" ref={chatMessagesRef}>
          {chatMessages.map((ChatMessages)=>{
                return (
                  <ChatMessage 
                    message={ChatMessages.message}
                    sender = {ChatMessages.sender}
                    key= {ChatMessages.id}
                  />
                )
              })}
          </div>
        );

      }

export default ChatMessages;
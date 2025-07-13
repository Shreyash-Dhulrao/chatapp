import MessageReceive from '../loader/message-receive';
import { chats } from '../../../chat';
import NullProfile from '../../assets/uploads/profile/NullProfile.jpg';
import { useState } from 'react';

const Message = ({ userData }) => {
    const [isTyping, setIstyping] = useState(true);
    const myId = 'user1';
    const userId = 'usern';
    const chatSend = chats.map(c => c.map((e) => {
        if(e.from === myId){
            return e;
        }
    }));

    const chatReceive = chats.map(c => c.map((e) => {
        if(e.from === userId){
            return e;
        }
    }));


    console.log(chatSend);
    console.log(chatReceive);

    const messages = chatSend?.messages || [];

    const allMessages = messages
        .map(msg => ({
            ...msg,
            timestamp: new Date(`${msg.date} ${msg.time}`)
        }))
        .sort((a, b) => a.timestamp - b.timestamp);
    return (
        <div className='w-full p-2 flex flex-col gap-2 h-[83%] overflow-y-scroll'>
            <div className="head flex items-center justify-center top-0 sticky">
                <button className='bg-white px-5 py-1 rounded-md cursor-pointer'>
                    {allMessages.length > 0 ? allMessages[0].date : 'No Messages'}
                </button>
            </div>

            <div className="main w-full flex flex-col gap-2 overflow-none">
                {allMessages.map((msg, index) => {
                    const isUser = msg.from == userData.id;
                    const isMe = msg.from == myId;

                    if (isUser) {
                        return (
                            <div key={index} className="flex w-full items-start justify-start">
                                <div className='h-full flex items-end me-2'>
                                    <button className='bg-violet-500 w-8 h-8 items-center justify-center flex rounded-full text-white cursor-pointer'>
                                        <img
                                            src={userData.profile || NullProfile}
                                            className='rounded-full object-cover w-full h-full'
                                            alt="Profile"
                                        />
                                    </button>
                                </div>
                                <div className="receive flex flex-col gap-2 rounded-t-xl rounded-br-xl rounded-bl-sm bg-white px-5 py-3 w-fit max-w-[85%]">
                                    <p>{msg.text}</p>
                                    <p className='text-xs tracking-wide text-zinc-600 text-start'>
                                        {msg.date} {msg.time}
                                    </p>
                                </div>
                            </div>
                        );
                    }

                    if (isMe) {
                        return (
                            <div key={index} className="flex w-full items-end justify-end">
                                <div className="send flex flex-col gap-2 rounded-t-xl rounded-bl-xl rounded-br-sm bg-violet-500 text-white px-5 py-3 w-fit max-w-[85%]">
                                    <p>{msg.text}</p>
                                    <p className='text-xs tracking-wide text-zinc-300 text-end'>
                                        {msg.date} {msg.time}
                                    </p>
                                </div>
                            </div>
                        );
                    } 

                    if (isTyping) {
                        return (
                            <div className="flex w-full items-start justify-start">
                                <div className='h-full flex items-end me-2'>
                                    <button className='bg-violet-500 w-8 h-8 items-center justify-center flex rounded-full text-white cursor-pointer'>
                                        <img
                                            src={userData.profile || NullProfile}
                                            className='rounded-full object-cover w-full h-full'
                                            alt="Profile"
                                        />
                                    </button>
                                </div>
                                <div className="receive flex flex-col gap-2 rounded-t-xl rounded-br-xl rounded-bl-sm bg-white px-5 py-3 w-fit max-w-[85%]">
                                    <MessageReceive />
                                </div>
                            </div>
                        )
                    }
                    else return null;
                })}

                {/* Optional loading/typing animation */}
            </div>
        </div>
    );
};

export default Message;

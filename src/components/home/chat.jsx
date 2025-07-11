import React from 'react'
import Header from '../../components/chat/header'
import Message from '../../components/chat/message'
import MessageInput from '../../components/chat/message-input'
import { useSelector } from 'react-redux'

const chat = () => {
  let userChats = useSelector(state => state.userchats.value);
  return (
    <div className='w-[100%] h-[100%]'>
      <Header userData={userChats} />
      <Message userData={userChats} />
      <MessageInput />
    </div>
  )
}

export default chat

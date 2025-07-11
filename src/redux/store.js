import { configureStore } from '@reduxjs/toolkit'
import toggleInformation from '../features/home/toggleInfo'
import userChatReducer from '../features/home/userChats'

export default configureStore({
  reducer: {
    toggleinfo : toggleInformation,
    userchats : userChatReducer

  }
})
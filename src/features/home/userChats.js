import { createSlice } from '@reduxjs/toolkit'

export const userChat = createSlice({
  name: 'counter',
  initialState: {
    value: [{
        id: null,
        profile: null, 
        name: null,
        lastActive: null,
        isFriend: true
    }]
  },
  reducers: {
    userCard: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { userCard } = userChat.actions

export default userChat.reducer
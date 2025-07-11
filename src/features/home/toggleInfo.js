import { createSlice } from '@reduxjs/toolkit'

export const toggleInfo = createSlice({
  name: 'counter',
  initialState: {
    value: false
  },
  reducers: {
    toggleState: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { toggleState } = toggleInfo.actions

export default toggleInfo.reducer
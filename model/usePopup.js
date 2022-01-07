import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

const slice = createSlice({
  name: 'popup',
  initialState: {
    Content: null,
  },
  reducers: {
    setContent: (state, action) => {
      state.Content = action.payload
    },
  },
})

export const popupReducer = slice.reducer
const {setContent} = slice.actions

export default () => {
  const dispatch = useDispatch()
  const popup = useSelector(state => state.popup)

  return { 
    Content: popup.Content,
    showAsPopup: (Content) => dispatch(setContent(Content)),
    hidePopup: () => dispatch(setContent(null)),
  }
}
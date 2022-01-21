import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { makeEnum } from '../utils/lang'

export const Popups = makeEnum('How', 'Why', 'Contact', 'Music', 'SiteMenu', 'WhoIsBubbles', 'Thanks')

const slice = createSlice({
  name: 'popup',
  initialState: {
    popupId: null,
  },
  reducers: {
    setPopupId: (state, action) => {
      state.popupId = action.payload
    },
  },
})

export const popupReducer = slice.reducer
const a = slice.actions

export default function usePopup() {
  const dispatch = useDispatch()
  const popup = useSelector(state => state.popup)

  return { 
    ...popup,
    showPopup: (id) => dispatch(a.setPopupId(id)),
    hidePopup: () => dispatch(a.setPopupId(null)),
  }
}
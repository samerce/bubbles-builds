import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { makeEnum } from '../utils/lang'

export const Popups = makeEnum(
  'How', 'Why', 'Contact', 'Music', 'SiteMenu', 'WhoIsBubbles', 'Thanks', 'NavIntro', 'Alert'
)

const slice = createSlice({
  name: 'popup',
  initialState: {
    popupId: undefined,
    popupProps: undefined,
  },
  reducers: {
    setPopup: (state, action) => {
      state.popupId = action.payload.id
      state.popupProps = action.payload.props
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
    showPopup: (id, props) => dispatch(a.setPopup({id, props})),
    hidePopup: () => dispatch(a.setPopup({})),
  }
}
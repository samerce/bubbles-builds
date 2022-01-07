import { configureStore } from '@reduxjs/toolkit'
import { navReducer } from './useNav'
import { popupReducer } from './usePopup'

export default configureStore({
  reducer: {
    nav: navReducer,
    popup: popupReducer,
  },
})
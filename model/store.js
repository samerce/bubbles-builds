import { configureStore } from '@reduxjs/toolkit'
import { navReducer } from './useNav'
import { popupReducer } from './usePopup'

const Store = configureStore({
  reducer: {
    nav: navReducer,
    popup: popupReducer,
  },
})
export default Store
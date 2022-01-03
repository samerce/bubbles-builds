import { configureStore } from '@reduxjs/toolkit'
import { navReducer } from './useNav'

export default configureStore({
  reducer: {
    nav: navReducer,
  },
})
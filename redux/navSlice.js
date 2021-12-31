import { createSlice } from '@reduxjs/toolkit'

export const NavMenu = {
  SiteMap: 'SiteMap',
  Email: 'Email',
  Music: 'Music',
}

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    left: {}, // { text: String, action: Function }
    right: {}, // { text: String, action: Function }
    activeMenu: null, // NavMenu
  },
  reducers: {
    setNavLeft: (state, action) => {
      state.left = action.payload || {}
    },
    setNavRight: (state, action) => {
      state.right = action.payload || {}
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload
    },
  },
})

export const { setNavLeft, setNavRight, setActiveMenu } = navSlice.actions
export default navSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { makeEnum } from '../utils/lang'

export const NavMenu = makeEnum('SiteMap', 'Email', 'Music')

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    // { 
    //    text: button string
    //    target: element to scroll to
    //    icon: button icon, defaults to back for left, forward for right
    // }
    left: {}, 
    right: {},
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

export const navReducer = navSlice.reducer
const {setNavLeft, setNavRight, setActiveMenu} = navSlice.actions

export default () => {
  const dispatch = useDispatch()
  const nav = useSelector(state => state.nav)

  return { 
    nav, 
    setNavLeft: (left) => dispatch(setNavLeft(left)),
    setNavRight: (right) => dispatch(setNavRight(right)),
    setActiveMenu: (menu) => dispatch(setActiveMenu(menu)),
  }
}
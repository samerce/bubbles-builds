import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { makeEnum } from '../utils/lang'

export const NavMenu = makeEnum('SiteMap', 'Email', 'Music')

const slice = createSlice({
  name: 'nav',
  initialState: {
    how: null, 
    why: null,
    activeMenu: null, // NavMenu
    pageTitle: 'Bubbles Builds',
  },
  reducers: {
    setHow: (state, action) => {
      state.how = action.payload || {}
    },
    setWhy: (state, action) => {
      state.why = action.payload || {}
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload
    },
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload
    },
  },
})

export const navReducer = slice.reducer
const a = slice.actions

export default () => {
  const dispatch = useDispatch()
  const nav = useSelector(state => state.nav)

  return { 
    nav, 
    setActiveMenu: (menu) => dispatch(a.setActiveMenu(menu)),
    setPageTitle: (title) => dispatch(a.setPageTitle(title)),
    onAppearPage: (id, pageTitle, howConfig, whyConfig) => {
      dispatch(a.setPageTitle(pageTitle))
      dispatch(a.setHow(howConfig))
      dispatch(a.setWhy(whyConfig))
      window.location = '#' + id
    },
  }
}
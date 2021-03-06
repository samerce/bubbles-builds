import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { makeEnum } from '../utils/lang'

const slice = createSlice({
  name: 'nav',
  initialState: {
    page: {
      id: 'bio',
      title: 'Bubbles Builds',
      index: 0,
      how: null,
      why: null,
    },
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const navReducer = slice.reducer
const a = slice.actions

export default function useNav() {
  const dispatch = useDispatch()
  const nav = useSelector(state => state.nav)

  return { 
    ...nav, 
    setPage: (page) => dispatch(a.setPage(page)),
    pageDidAppear: (page) => {
      dispatch(a.setPage(page))
    },
  }
}
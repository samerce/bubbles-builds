import React from 'react'
import '../styles/global.css'
import store from '../model/store'
import { Provider } from 'react-redux'

export default function App({Component, pageProps}) { return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)}

// if (!process.browser) React.useLayoutEffect = React.useEffect

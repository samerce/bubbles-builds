import '../styles/global.css'
import store from '../model/store'
import { Provider } from 'react-redux'
import dynamic from 'next/dynamic'

dynamic(() => import('../utils/window'), {ssr: false})

export default ({Component, pageProps}) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

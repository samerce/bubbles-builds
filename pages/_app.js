import '../styles/global.css'
import store from '../model/store'
import { Provider } from 'react-redux'

export default ({Component, pageProps}) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

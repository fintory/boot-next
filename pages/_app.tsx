import type { AppProps } from 'next/app'
import { Provider, RootStore } from '../store'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider value={RootStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App

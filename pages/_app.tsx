import type { AppProps } from 'next/app'
import { useObserver } from 'mobx-react'
import { Provider, RootStore } from '../store'

const App = ({ Component, pageProps }: AppProps) => {
  return useObserver(() => (
    <Provider value={RootStore}>
      <Component {...pageProps} />
    </Provider>
  ))
}

export default App

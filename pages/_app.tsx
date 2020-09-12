import type { AppProps } from 'next/app'
import { useProvider, useCreateStore } from 'mobx-store-provider'
import { RootStore } from '../store'

const App = ({ Component, pageProps }: AppProps) => {
  const applicationStore = useCreateStore(() => RootStore)
  const Provider = useProvider()

  return (
    <Provider value={applicationStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App

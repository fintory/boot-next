import React, { Fragment } from 'react'
import type { AppProps } from 'next/app'
import { useProvider, useCreateStore } from 'mobx-store-provider'
import { RootStore } from '../store'
import GlobalStyle from '../utils/globalStyle'

const App = ({ Component, pageProps }: AppProps) => {
  const applicationStore = useCreateStore(() => RootStore)
  const Provider = useProvider()

  return (
    <Fragment>
      <GlobalStyle />
      <Provider value={applicationStore}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  )
}

export default App

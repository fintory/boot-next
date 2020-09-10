/* eslint-disable no-underscore-dangle, no-console */
import React, { useContext } from 'react'
import { applySnapshot, Instance, types, onSnapshot } from 'mobx-state-tree'
import { ApplicationStore } from './models/Application'

const RootModel = types.model({
  applicationStore: ApplicationStore,
})

export const RootStore = RootModel.create({
  applicationStore: { currentDate: Date.now() },
})

onSnapshot(RootStore, (snapshot) => console.log(snapshot))

export type RootInstance = Instance<typeof RootModel>
let store: RootInstance | undefined

const RootStoreContext = React.createContext<null | RootInstance>(null)

export const { Provider } = RootStoreContext

export function useMst() {
  const rootContext = useContext(RootStoreContext)
  if (rootContext === null)
    throw new Error('Store cannot be null, please add a context provider')
  return rootContext
}

export function initializeStore(snapshot = null) {
  const _store = RootStore

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
  if (snapshot) applySnapshot(_store, snapshot)

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store

  // Create the store once in the client
  if (!store) store = _store

  return store
}

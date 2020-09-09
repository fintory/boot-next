import { types, Instance, getSnapshot, applySnapshot } from 'mobx-state-tree'

export const ApplicationStore = types
  .model('ApplicationStore', {
    currentDate: Date.now(),
  })
  .actions((self) => {
    let initialState = {}
    return {
      afterCreate: () => {
        initialState = getSnapshot(self)
      },
      reset: () => {
        applySnapshot(self, initialState)
      },
    }
  })

export type ApplicationStoreInstance = Instance<typeof ApplicationStore>

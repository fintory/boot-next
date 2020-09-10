import { types, Instance } from 'mobx-state-tree'

export const ApplicationStore = types
  .model({
    currentDate: types.Date,
  })
  .views((self) => ({
    get formattedDate() {
      return self.currentDate.toLocaleDateString('de', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
  }))
  .actions((self) => ({
    increaseByOneDay() {
      self.currentDate.setDate(self.currentDate.getDate() + 1)
    },
  }))

export type ApplicationStoreType = Instance<typeof ApplicationStore>

import { types, Instance } from 'mobx-state-tree'

export const ApplicationStore = types.model({
  currentDate: types.Date,
})

export type AutosearchStore = Instance<typeof ApplicationStore>

import { atom } from 'recoil'

export const quoteMethodState = atom({
  key: 'quoteMethodState',
  default: 'scratch',
})

export const quoteCategoryState = atom({
  key: 'quoteCategoryState',
  default: 'architecture',
})

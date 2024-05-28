
import { createAction } from 'redux-actions'
import appData from '../data/appData.jsx'

export const pullData = createAction('pull data', () => Promise.resolve(appData))
export const cachePage = createAction('cache page', (page) => Promise.resolve({ success: true, page }))

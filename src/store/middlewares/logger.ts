import { createLogger } from 'redux-logger'

export const logger = createLogger({
  collapsed: true,
  logErrors: true,
  diff: true,
})

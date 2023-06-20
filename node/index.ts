import type {
  ClientsConfig,
  ServiceContext,
  RecorderState,
  Cached,
} from '@vtex/api'
import { LRUCache, method, Service } from '@vtex/api'

import { Clients } from './clients'
import { validate, getter } from './middlewares'

const TIMEOUT_MS = 800
const memoryCache = new LRUCache<string, Cached>({ max: 1 })

metrics.trackCache('keywordFetcher', memoryCache)

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    status: {
      memoryCache,
    },
  },
}

declare global {
  type Context = ServiceContext<Clients, State>
  interface State extends RecorderState {
    keyword: string
  }
}
export default new Service({
  clients,
  routes: {
    keywordFetcher: method({
      GET: [validate, getter],
    }),
  },
})

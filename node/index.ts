import type {
  ClientsConfig,
  ServiceContext,
  RecorderState,
  Cached,
} from '@vtex/api'
import { LRUCache, method, Service } from '@vtex/api'

import { Clients } from './clients'
import {
  keywordValidate,
  keywordGetter,
  xmlGetter,
  xmlValidate,
  versionGetter,
  sitemapGetter,
} from './middlewares'

const TIMEOUT_MS = 80000
const memoryCache = new LRUCache<string, Cached>({ max: 50 })

metrics.trackCache('keywordFetcher', memoryCache)
metrics.trackCache('xmlFetcher', memoryCache)
metrics.trackCache('sitemapFetcher', memoryCache)

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 50,
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
    versionFetcher: method({
      GET: [versionGetter],
    }),
    keywordFetcher: method({
      GET: [keywordValidate, keywordGetter],
    }),
    sitemapFetcher: method({
      GET: [sitemapGetter],
    }),
    xmlFetcher: method({
      GET: [xmlValidate, xmlGetter],
    }),
  },
})

import { IOClients } from '@vtex/api'

import KeywordFetcher from './keywordFetcher'

export class Clients extends IOClients {
  public get keywordFetcher() {
    return this.getOrSet('KeywordFetcher', KeywordFetcher)
  }
}

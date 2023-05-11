import { IOClients } from '@vtex/api'

import keywordFetcher from './keywordFetcher'

export class Clients extends IOClients {
  public get keywordFetcher() {
    return this.getOrSet('keywordFetcher', keywordFetcher)
  }
}

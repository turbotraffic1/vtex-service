import { IOClients } from '@vtex/api'

import KeywordFetcher from './keywordFetcher'
import XmlFetcher from './xmlFetcher'

export class Clients extends IOClients {
  public get keywordFetcher() {
    return this.getOrSet('KeywordFetcher', KeywordFetcher)
  }

  public get xmlFetcher() {
    return this.getOrSet('XmlFetcher', XmlFetcher)
  }
}

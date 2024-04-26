import { IOClients } from '@vtex/api'

import KeywordFetcher from './keywordFetcher'
import XmlFetcher from './xmlFetcher'
import SitemapFetcher from './sitemapFetcher'

export class Clients extends IOClients {
  public get keywordFetcher() {
    return this.getOrSet('KeywordFetcher', KeywordFetcher)
  }

  public get xmlFetcher() {
    return this.getOrSet('XmlFetcher', XmlFetcher)
  }

  public get sitemapFetcher() {
    return this.getOrSet('SitemapFetcher', SitemapFetcher)
  }
}

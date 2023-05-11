import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

interface getHtml {
  data: string;
}
export default class keywordFetcher extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://api.turbotraffic.com/', context, options)
  }

  public async getHtml(keyword: string): Promise<getHtml> {
  return await this.http.get(`find-link?keyword=${keyword}&brand=${this.context.account}`,{
    metric: 'keyword-get'
  })
  }
}
import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

interface GetHtml {
  data: string
}
export default class KeywordFetcher extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://api.turbotraffic.com/', context, options)
  }

  public async getHtml(keyword: string): Promise<GetHtml> {
    const get = await this.http.get(
      `find-link?keyword=${keyword}&brand=${this.context.account}`,
      {
        metric: 'keyword-get',
      }
    )

    return get
  }
}

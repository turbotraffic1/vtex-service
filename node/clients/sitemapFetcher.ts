import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

interface GetHtml {
  data: string
  errorRedirectUrl: string
  success: boolean
}
export default class SitemapFetcher extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://api.turbotraffic.com/', context, options)
  }

  public async getSitemapHtml(): Promise<GetHtml> {
    const get = await this.http.get(
      `consult/sitemap/html?brand=${this.context.account}`,
      {
        metric: 'sitemap-get',
      }
    )

    return get
  }
}

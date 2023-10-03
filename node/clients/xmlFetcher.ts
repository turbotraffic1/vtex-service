import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

interface GetXml {
  success: boolean
  xmls: string
}
export default class XmlFetcher extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://api.turbotraffic.com/', context, options)
  }

  public async getXml(number: number): Promise<GetXml> {
    const get = await this.http.get(
      `consult/xmls?brand=${this.context.account}&number=${number}`,
      {
        metric: 'xml-get',
      }
    )

    return get
  }
}

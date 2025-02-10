export async function xmlGetter(ctx: Context, next: () => Promise<unknown>) {
  const {
    vtex: {
      route: { params },
    },
    clients: { xmlFetcher: fetch },
    response,
    header,
  } = ctx

  const { index } = params

  try {
    const xml = await fetch.getXml(Number(index))

    if (xml) {
      ctx.body = xml
      ctx.set({
        'Cache-Control': 'private, no-store, max-age=0, must-revalidate',
        'Content-Type': 'application/xml',
        Pragma: 'no-cache',
        Expires: '0',
      })
    } else {
      response.status = 301
      response.set('Location', `https://${header['x-forwarded-host']}`)
      ctx.body = ''
    }
  } catch (error) {
    response.status = 301
    response.set('Location', `https://${header['x-forwarded-host']}`)
    ctx.body = ''
  }

  await next()
}

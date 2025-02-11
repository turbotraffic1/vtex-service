export async function keywordGetter(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    vtex: {
      route: { params },
    },
    clients: { keywordFetcher: fetch },
    response,
    header,
  } = ctx

  const { keyword } = params

  if (typeof keyword === 'string') {
    try {
      const { data, errorRedirectUrl, success, isTemporal } =
        await fetch.getHtml(keyword)

      if (!success) {
        if (isTemporal) {
          response.status = 302
          response.set('Location', errorRedirectUrl)
          ctx.body = ''
        } else {
          response.status = 301
          response.set('Location', errorRedirectUrl)
          ctx.body = ''
        }
      } else {
        ctx.body = data
        response.set(
          'Cache-Control',
          'private, no-store, max-age=0, must-revalidate'
        )
        response.set('Pragma', 'no-cache')
        response.set('Expires', '0')
      }
    } catch (error) {
      response.status = 301
      response.set('Location', `https://${header['x-forwarded-host']}`)
      ctx.body = ''

      return
    }
  }

  await next()
}

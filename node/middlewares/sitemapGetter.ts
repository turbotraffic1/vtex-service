export async function sitemapGetter(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { sitemapFetcher: fetch },
    response,
    header,
  } = ctx

  try {
    const { data, errorRedirectUrl, success } = await fetch.getSitemapHtml()

    if (!success) {
      response.status = 301
      response.set('Location', errorRedirectUrl)
      ctx.body = ''
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
  }

  await next()
}

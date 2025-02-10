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
      response.redirect(errorRedirectUrl)
      response.set('Status', '301')
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
    response.redirect(`https://${header['x-forwarded-host']}`)
  }

  await next()
}

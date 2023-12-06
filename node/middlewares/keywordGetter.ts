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
      const { data, errorRedirectUrl, success } = await fetch.getHtml(keyword)

      if (!success) {
        response.redirect(errorRedirectUrl)
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
  }

  await next()
}

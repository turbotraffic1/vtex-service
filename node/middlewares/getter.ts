export async function getter(ctx: Context, next: () => Promise<unknown>) {
  const {
    vtex: {
      route: { params },
    },
    clients: { keywordFetcher: fetch },
    response,
    header,
  } = ctx

  const { keyword } = params
  let redirectTo = null

  if (typeof keyword === 'string') {
    try {
      const { data, errorRedirectUrl } = await fetch.getHtml(keyword)

      redirectTo = errorRedirectUrl
      ctx.body = data
      response.set(
        'Cache-Control',
        'private, no-store, max-age=0, must-revalidate'
      )
      response.set('Pragma', 'no-cache')
      response.set('Expires', '0')
    } catch (error) {
      if (redirectTo) {
        response.redirect(redirectTo)
      } else {
        response.redirect(`https://${header['x-forwarded-host']}`)
      }
    }
  }

  await next()
}

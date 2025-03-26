export async function keywordValidate(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    vtex: {
      route: { params },
    },
    response,
    header,
  } = ctx

  const { keyword } = params

  if (!keyword || keyword === 's') {
    response.status = 301
    response.set('Location', `https://${header['x-forwarded-host']}`)
    ctx.body = ''

    return
  }

  if (typeof keyword !== 'string') {
    response.status = 301
    response.set('Location', `https://${header['x-forwarded-host']}`)
    ctx.body = ''

    return
  }

  const regex = /^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/
  const validKeyword = regex.test(keyword)

  if (!validKeyword) {
    response.status = 301
    response.set('Location', `https://${header['x-forwarded-host']}`)
    ctx.body = ''

    return
  }

  await next()
}

export async function validate(ctx: Context, next: () => Promise<unknown>) {
  const {
    vtex: {
      route: { params },
    },
    response,
    header,
  } = ctx

  const { keyword } = params

  if (!keyword) {
    return response.redirect(`https//:${header['x-forwarded-host']}`)
  }

  if (typeof keyword !== 'string') {
    return response.redirect(`https://${header['x-forwarded-host']}`)
  }

  const regex = /^[a-zA-Z]+(-[a-zA-Z]+)+$/
  const validKeyword = regex.test(keyword)

  if (!validKeyword) {
    return response.redirect(`https://${header['x-forwarded-host']}`)
  }

  await next()
}

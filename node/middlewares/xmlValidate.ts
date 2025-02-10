export async function xmlValidate(ctx: Context, next: () => Promise<unknown>) {
  const {
    vtex: {
      route: { params },
    },
    response,
    header,
  } = ctx

  const { index } = params

  if (!index || !Number(index)) {
    response.status = 301
    response.set('Location', `https://${header['x-forwarded-host']}`)
    ctx.body = ''

    return
  }

  await next()
}

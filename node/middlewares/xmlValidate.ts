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
    return response.redirect(`https://${header['x-forwarded-host']}`)
  }

  await next()
}

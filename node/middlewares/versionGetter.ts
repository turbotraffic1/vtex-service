export async function versionGetter(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const { response, header } = ctx

  try {
    const appID = process.env.VTEX_APP_ID

    if (!appID) {
      throw new Error('version not found')
    }

    const versionMatch = appID.match(/@([\d.]+)/)
    const appVersion = versionMatch ? versionMatch[1] : 'version not found'

    ctx.body = appVersion
  } catch (error) {
    response.redirect(`https://${header['x-forwarded-host']}`)
  }

  await next()
}

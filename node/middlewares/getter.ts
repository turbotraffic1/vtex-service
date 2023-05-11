export async function getter(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
    clients: { keywordFetcher: fetch },
    response,
    header
  } = ctx
  const { keyword } = params

if(typeof keyword === 'string'){
 try {
  const { data } = await fetch.getHtml(keyword)
  ctx.body = data
  response.set('Cache-Control', 'private, no-store, max-age=0, must-revalidate')
  response.set('Pragma', 'no-cache')
  response.set('Expires', '0')

 } catch (error) {
  response.redirect(`${header['x-forwarded-host']}/${keyword}`)
  
 }
}

  await next()
}

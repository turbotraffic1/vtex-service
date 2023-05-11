export async function validate(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
    response,
    header
  } = ctx

  const { keyword } = params

  if (!keyword) {
    response.redirect(`${header['x-forwarded-host']}/${keyword}`)
    return

  }

  if (typeof keyword !== 'string') {
    response.redirect(`${header['x-forwarded-host']}/${keyword}`)
    return
  }

  const regex = /^[a-zA-Z]+(-[a-zA-Z]+)+$/;
  const validKeyword = regex.test(keyword);

  if(!validKeyword){
    response.redirect(`${header['x-forwarded-host']}/${keyword}`)
    return
  }

  await next()

}

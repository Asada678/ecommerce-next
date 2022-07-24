import { NextApiRequest, NextApiResponse } from 'next'
import { SHOPIFY_CHECKOUT_ID_COOKIE, SHOPIFY_CHECKOUT_URL_COOKIE } from '@framework/const'

export default function checkout(request: NextApiRequest, response: NextApiResponse) {
  const { cookies } = request
  const checkoutUrl = cookies[SHOPIFY_CHECKOUT_URL_COOKIE]

  if (checkoutUrl) {
    // response.setHeader(
    //   'Set-Cookie',
    //   `${SHOPIFY_CHECKOUT_ID_COOKIE}=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    // )
    response.redirect(checkoutUrl)
  } else {
    response.redirect('/')
  }
}

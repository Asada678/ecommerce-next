import { ApiFetcherOptions, ApiFetcherResults } from '@common/types/api'
import { API_URL, STOREFRONT_TOKEN } from '@framework/const'

const fetchApi = async <T>({ query, variables }: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  // const url = "https://jsonplaceholder.typicode.com/todos";
  // const url = 'http://localhost:4000/graphql'

  const mode = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN!,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }
  const res = await fetch(API_URL!, mode)
  const { data, errors } = await res.json()

  if (errors) {
    throw new Error(errors[0].message ?? errors.message)
  }
  return { data }
}

export default fetchApi

const getAllProductsPathsQuery = `
  query getAllProductsPaths($first: Int = 250) {
    products(first: $first) {
      edges {
        node {
          handle
          id
          title
        }
      }
    }
  }
`

export default getAllProductsPathsQuery

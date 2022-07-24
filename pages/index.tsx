import type { InferGetStaticPropsType } from 'next'
import { getAllProducts } from '@framework/product'
import { getConfig } from '@framework/api/config'
import { ProductCard } from '@components/product'
import { Grid, Hero, Marquee } from '@components/ui'

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  }
}

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Lorem ipsum dolor sit amet"
        description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam sit excepturi incidunt repellat consequuntur quaerat error mollitia. Alias consequatur, fugiat placeat corporis odit modi adipisci sint suscipit eum facere."
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
    </>
  )
}

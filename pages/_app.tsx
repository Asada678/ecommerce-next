import '@assets/main.css'
import '../styles/globals.css'
import 'keen-slider/keen-slider.min.css'
import type { AppProps } from 'next/app'
import React, { FC } from 'react'
import { Layout } from '@components/common'
import { UIProvider, useUI } from '@components/ui/context'

type MyProp = {
  children: React.ReactNode
}

const Noop: FC<MyProp> = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: FC<MyProp> } }) {
  // const Layout = Component.Layout ?? Noop
  const ui = useUI()
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}

export default MyApp

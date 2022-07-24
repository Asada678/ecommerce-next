import { FC } from 'react'
import { Navbar, Footer } from '@components/common'
import style from './Layout.module.css'
import { Sidebar } from '@components/ui'
import { CartSidebar } from '@components/cart'
import { useUI } from '@components/ui/context'
import { ApiProvider } from '@framework'

type MyProp = {
  children: React.ReactNode
}

const Layout: FC<MyProp> = (props) => {
  const { isSidebarOpen, closeSidebar } = useUI()

  return (
    <ApiProvider>
      <div className={style.root}>
        <Navbar />
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
          <CartSidebar />
        </Sidebar>
        <main className="fit">{props.children}</main>
        <Footer />
      </div>
    </ApiProvider>
  )
}

export default Layout

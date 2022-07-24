import { FC } from 'react'
import { Container } from '@components/ui'
import Link from 'next/link'
import style from './Navbar.module.css'
import { UserNav } from '@components/common'

const Navbar: FC = () => {
  return (
    <Container>
      <div className={style.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={style.logo}>Next Store</a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={style.link}>All</a>
            </Link>
            <Link href="/">
              <a className={style.link}>Clothes</a>
            </Link>
            <Link href="/">
              <a className={style.link}>Accessories</a>
            </Link>
            <Link href="/">
              <a className={style.link}>Shoes</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <UserNav />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar

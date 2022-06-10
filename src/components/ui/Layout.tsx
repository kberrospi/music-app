
import { FC, ReactNode } from 'react'
import { Navbar } from './Navbar'

interface Props {
  children: ReactNode
}

export const Layout:FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      { children }
    </>
  )
}

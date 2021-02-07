import * as React from 'react'
import { Link } from 'react-router-dom'

export type CustomLinkProps = {
  to: string
  children: React.ReactNode
}

export default function CustomLink({ to, children }: CustomLinkProps) {
  return (
    <Link className="text-indigo-200 hover:text-white" to={to}>
      {children}
    </Link>
  )
}

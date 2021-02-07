import * as React from 'react'

import Link from './Link'

export default function Navigation() {
  return (
    <nav className="bg-indigo-900 p-4">
      <ul className="flex">
        <li className="mr-6">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-6">
          <Link to="/shows">Shows</Link>
        </li>
      </ul>
    </nav>
  )
}

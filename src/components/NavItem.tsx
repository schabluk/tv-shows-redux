import * as React from 'react'
import { NavLink } from 'react-router-dom'

export type ListItemProps = {
  label: string
  to: string
}

export default function ListItem({ label, to = '/' }: ListItemProps) {
  return (
    <li>
      <NavLink
        className="px-8 py-4 block text-gray-800 hover:bg-gray-400 focus:outline-none focus:bg-gray-500 transition duration-150 ease-in-out"
        activeClassName="bg-gray-500"
        to={to}
      >
        {label}
      </NavLink>
    </li>
  )
}

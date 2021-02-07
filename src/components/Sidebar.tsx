import * as React from 'react'

import NavItem from './NavItem'

export type SidebarProps = {
  items: any[]
}

export default function Sidebar({ items = [] }: SidebarProps) {
  return (
    <ul
      className="h-full flex-initial bg-gray-300"
      style={{ minWidth: '200px' }}
    >
      {items &&
        items.map(({ label, path }, key) => (
          <NavItem key={key} label={label} to={path} />
        ))}
    </ul>
  )
}

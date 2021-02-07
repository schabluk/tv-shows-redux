import React from 'react'
import { useParams, Outlet } from 'react-router-dom'
import { useErrorHandler } from 'react-error-boundary'
import { useDispatch, useSelector } from 'react-redux'

import ListItem from '../components/ListItem'
import actions from '../store/actions'
import selectors from '../store/selectors'
import type { ApplicationStore as Store } from '../types'

const commonStyle = 'h-full flex-auto flex'
const pendingStyle = `${commonStyle} flex justify-center items-center text-xl`

export default function Shows() {
  const { title } = useParams()
  const dispatch = useDispatch()
  const { shows, error } = useSelector((store: Store) => store.shows)
  const isLoading = useSelector(selectors.shows.isLoading)

  React.useEffect(() => {
    dispatch(actions.shows.showsGet(title))
  }, [title])

  useErrorHandler(error)

  if (!shows) return null
  if (isLoading)
    return <div className={`${pendingStyle} bg-blue-300`}>Loading...</div>

  return (
    <div className={`${commonStyle} bg-white`}>
      <div className="flex-1 overflow-y-scroll">
        {Boolean(shows.length) ? (
          <ul>
            {shows.map(({ show }) => (
              <ListItem key={show.id} {...show} />
            ))}
          </ul>
        ) : (
          <div className="flex h-full bg-gray-100 items-center justify-center">
            No results found for "{title}"
          </div>
        )}
      </div>
      <Outlet />
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import { useErrorHandler } from 'react-error-boundary'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

import actions from '../store/actions'
import selectors from '../store/selectors'
import type { ApplicationStore as Store } from '../types'

function useAsyncDispatch() {
  return useDispatch<any>()
}

const commonStyle = 'flex-1'
const pendingStyle = `${commonStyle} flex justify-center items-center text-xl`

export default function ShowContainer() {
  const { id } = useParams()
  const dispatch = useAsyncDispatch()
  const onReject = useErrorHandler()
  const { title } = useSelector((store: Store) => store.title)
  const isLoading = useSelector(selectors.shows.isLoading)

  React.useEffect(() => {
    console.log({ id })
    dispatch(actions.title.titleGet(parseInt(id, 10)))
      .then(unwrapResult)
      .catch(onReject)
  }, [id])

  if (!title) return null
  if (isLoading)
    return <div className={`${pendingStyle} bg-blue-300`}>Loading...</div>

  const { name, summary, image } = title

  return (
    <div className={`${commonStyle} bg-white`}>
      <div className="w-full h-full overflow-hidden bg-gray-100 flex flex-col">
        <div
          className="w-full bg-contain bg-top"
          style={{
            minHeight: '300px',
            backgroundImage: `url(${image && image.original})`,
          }}
        />
        <div className="flex-1 px-6 py-4">
          <div className="font-bold text-3xl mb-2">{name}</div>
          <div
            className="text-gray-700 text-xl"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
      </div>
    </div>
  )
}

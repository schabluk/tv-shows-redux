import * as React from 'react'
import { FallbackProps } from 'react-error-boundary'

export default function ErrorFallback(props: FallbackProps) {
  const { error, resetErrorBoundary } = props

  return (
    <div className="bg-red-50 p-4 flex-1 flex flex-col justify-center items-center">
      <h1 className="text-xl mt-4 text-red-800">Something went wrong</h1>
      <code className="my-4">{error?.message}</code>
      <button
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  )
}

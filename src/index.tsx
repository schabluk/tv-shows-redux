import * as React from 'react'
import { render } from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { useMediaQuery } from 'beautiful-react-hooks'
import { useDispatch } from 'react-redux'

import NotFound from './components/NotFound'
import Fallback from './components/Fallback'
import HomePage from './components/Home'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import LayoutDesktop from './layout/LayoutDesktop'
import LayoutMobile from './layout/LayoutMobile'
import Placeholder from './screens/Placeholder'
import Shows from './screens/Shows'
import Title from './screens/Title'

import { store } from './store'
import actions from './store/actions'
import { movies } from './initial'
import './index.css'

function App() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const dispatch = useDispatch()

  const shows = (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => dispatch(actions.shows.default())}
    >
      <Shows />
    </ErrorBoundary>
  )

  const title = (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => dispatch(actions.title.default())}
    >
      <Title />
    </ErrorBoundary>
  )

  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        {isDesktop ? (
          <Route path="shows" element={<LayoutDesktop movies={movies} />}>
            <Route path="/" element={<Placeholder />} />
            <Route path=":title" element={shows}>
              <Route path="/" element={<Placeholder />} />
              <Route path="show/:id" element={title} />
            </Route>
          </Route>
        ) : (
          <Route path="shows" element={<LayoutMobile />}>
            <Route path="/" element={<Sidebar items={movies} />} />
            <Route path=":title" element={shows} />
            <Route path=":title/show/:id" element={title} />
          </Route>
        )}
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}

render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

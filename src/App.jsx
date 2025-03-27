import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const TopBar = lazy(() => import('./components/TopBar/TopBar'))
const NavBar = lazy(() => import('./components/NavBar/NavBar'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))

const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <TopBar />
        <NavBar />
      </Suspense>

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

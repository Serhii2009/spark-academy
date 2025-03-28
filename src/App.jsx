import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const TopBar = lazy(() => import('./components/TopBar/TopBar'))
const NavBar = lazy(() => import('./components/NavBar/NavBar'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const CoursesPage = lazy(() => import('./pages/CoursesPage/CoursesPage'))
const DetailedCoursesPage = lazy(() =>
  import('./pages/DetailedCoursesPage/DetailedCoursesPage')
)
const TestPage = lazy(() => import('./pages/TestPage/TestPage'))

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
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/detailedcourses" element={<DetailedCoursesPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

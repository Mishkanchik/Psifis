import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import HomePage from './pages/HomePage'
import SpecialistsPage from './pages/SpecialistsPage'
import SpecialistProfilePage from './pages/SpecialistProfilePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/specialists" element={<SpecialistsPage />} />
              <Route path="/specialist/:id" element={<SpecialistProfilePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App

import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Heart, MapPin, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToMap = () => {
    if (location.pathname === '/') {
      const mapSection = document.getElementById('map')
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate('/', { state: { scrollToMap: true } })
    }
  }

  const navItems = [
    { path: '/', label: 'Головна' },
    { path: '/specialists', label: 'Спеціалісти' },
    { path: '/about', label: 'Про нас' },
    { path: '/contact', label: 'Контакти' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {location.pathname === '/' ? (
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={scrollToTop}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center"
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Псифіс
              </span>
            </div>
          ) : (
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center"
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Псифіс
              </span>
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                  isActive(item.path)
                    ? 'text-primary-600'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToMap}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              title="Карта"
            >
              <MapPin className="w-5 h-5 text-slate-600" />
            </motion.button>
            <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Записатись на консультацію
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="pointer-events-none"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                style={{
                  transform: mobileMenuOpen ? 'translateY(0) rotate(45deg)' : 'translateY(-7px) rotate(0)',
                  transitionTimingFunction: 'cubic-bezier(0.5,0.85,0.25,1.1)',
                  transitionDuration: '300ms'
                }}
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                style={{
                  opacity: mobileMenuOpen ? '0' : '1',
                  transitionDuration: '300ms'
                }}
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                style={{
                  transform: mobileMenuOpen ? 'translateY(0) rotate(-45deg)' : 'translateY(7px) rotate(0)',
                  transitionTimingFunction: 'cubic-bezier(0.5,0.85,0.25,1.1)',
                  transitionDuration: '300ms'
                }}
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(item.path)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setMobileMenuOpen(false); scrollToMap(); }}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  title="Карта"
                >
                  <MapPin className="w-5 h-5 text-slate-600" />
                </motion.button>
                <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-primary py-3"
                  >
                    Записатись на консультацію
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navigation

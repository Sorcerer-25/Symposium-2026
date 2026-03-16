import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Registration from './components/Registration'
import Events from './components/Events'
import Contact from './components/Contact'

const sections = {
  home: Home,
  registration: Registration,
  events: Events,
  contact: Contact,
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const ActiveComponent = sections[activeSection]

  const handleNavClick = (section) => {
    setActiveSection(section)
    setSidebarOpen(false)
  }

  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* Mobile Hamburger */}
      <button
        id="mobile-menu-toggle"
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg glass text-slate-100 lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavClick}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="min-h-screen"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App

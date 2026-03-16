import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Code2, Gamepad2, Layers, Filter } from 'lucide-react'

const eventsData = [
  {
    id: 1,
    name: 'Code Sprint',
    type: 'Technical',
    description: 'Race against the clock to solve algorithmic challenges. Test your speed, accuracy, and problem-solving skills in this intense coding showdown.',
  },
  {
    id: 2,
    name: 'Hackathon 48hr',
    type: 'Technical',
    description: 'Build a working prototype in 48 hours. Teams of up to 4 compete to create innovative solutions to real-world problems.',
  },
  {
    id: 3,
    name: 'Paper Presentation',
    type: 'Technical',
    description: 'Present your research on emerging technologies. Best papers will be featured in the symposium journal.',
  },
  {
    id: 4,
    name: 'Technical Quiz',
    type: 'Technical',
    description: 'A rapid-fire quiz covering CS fundamentals, latest tech trends, and brain-teasing logical puzzles.',
  },
  {
    id: 5,
    name: 'Web Dev Challenge',
    type: 'Technical',
    description: 'Design and develop a stunning website from scratch within the given time limit. Creativity meets code!',
  },
  {
    id: 6,
    name: 'AI/ML Showcase',
    type: 'Technical',
    description: 'Demonstrate your AI or Machine Learning project. Judged on innovation, accuracy, and real-world applicability.',
  },
  {
    id: 7,
    name: 'Photography Contest',
    type: 'Non-Technical',
    description: 'Capture the essence of the symposium through your lens. On-spot theme reveal with creative freedom.',
  },
  {
    id: 8,
    name: 'Gaming Arena',
    type: 'Non-Technical',
    description: 'Compete in multiplayer gaming tournaments across popular titles. Bring your A-game and claim the throne.',
  },
  {
    id: 9,
    name: 'Treasure Hunt',
    type: 'Non-Technical',
    description: 'Solve cryptic clues and navigate the campus to find hidden treasures. Teamwork and wit are your best tools.',
  },
  {
    id: 10,
    name: 'Meme War',
    type: 'Non-Technical',
    description: 'Create the funniest and most relatable memes on given topics. Audience votes decide the winner!',
  },
  {
    id: 11,
    name: 'Short Film Festival',
    type: 'Non-Technical',
    description: 'Submit your short film (max 10 min) on any theme. Best films will be screened and awarded at the closing ceremony.',
  },
  {
    id: 12,
    name: 'Stand-up Comedy',
    type: 'Non-Technical',
    description: 'Got jokes? Take the stage and make the audience laugh. Clean humor only — the funnier, the better!',
  },
]

const filterTabs = ['All', 'Technical', 'Non-Technical']

function Events() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredEvents =
    activeFilter === 'All'
      ? eventsData
      : eventsData.filter((e) => e.type === activeFilter)

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2 flex items-center gap-3">
            <Layers size={32} className="text-blue-400" />
            Events
          </h1>
          <p className="text-slate-400">Explore our curated lineup of events and find your stage.</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 mb-8"
        >
          <Filter size={16} className="text-slate-500" />
          {filterTabs.map((tab) => (
            <button
              key={tab}
              id={`filter-${tab.toLowerCase().replace('-', '')}`}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeFilter === tab
                  ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredEvents.map((event, i) => (
            <motion.div
              layout
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl gradient-card border border-slate-800/60 p-6 flex flex-col group"
            >
              {/* Type Badge */}
              <div className="flex items-center gap-2 mb-4">
                {event.type === 'Technical' ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                    <Code2 size={12} /> Technical
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    <Gamepad2 size={12} /> Non-Technical
                  </span>
                )}
              </div>

              {/* Event Name */}
              <h3 className="text-lg font-bold text-slate-100 mb-2">{event.name}</h3>

              {/* Description */}
              <p className="text-sm text-slate-400 flex-1 leading-relaxed mb-5">{event.description}</p>

              {/* View Details Button */}
              <button
                id={`view-event-${event.id}`}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-700/60 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-200 cursor-pointer"
              >
                <Eye size={16} />
                View Details
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Events

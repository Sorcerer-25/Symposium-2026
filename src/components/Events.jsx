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
    <div className="min-h-screen py-16 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Layers size={14} /> Schedule
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Symposium <span className="text-gradient">Events</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            Push your boundaries and showcase your talent across our diverse lineup of flagship competitions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-12 glass p-2 rounded-2xl border-glass w-fit"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              id={`filter-${tab.toLowerCase().replace('-', '')}`}
              onClick={() => setActiveFilter(tab)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeFilter === tab
                  ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event, i) => (
            <motion.div
              layout
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative group rounded-3xl p-8 flex flex-col h-full glass border-glass transition-all duration-300 ${
                event.type === 'Technical' 
                  ? 'hover:glow-cyan hover:border-cyan-500/50' 
                  : 'hover:glow-violet hover:border-violet-500/50'
              }`}
            >
              {/* Decorative Background Glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 blur-[80px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                event.type === 'Technical' ? 'bg-cyan-400' : 'bg-violet-400'
              }`} />

              {/* Type Badge */}
              <div className="flex items-center justify-between mb-6">
                {event.type === 'Technical' ? (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                    <Code2 size={12} /> Tech
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-violet-400/10 text-violet-400 border border-violet-400/20">
                    <Gamepad2 size={12} /> Fun
                  </span>
                )}
                <span className="text-slate-600 font-mono text-xs">#0{event.id}</span>
              </div>

              {/* Event Name */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {event.name}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                {event.description}
              </p>

              {/* Action Button */}
              <button
                id={`view-event-${event.id}`}
                className={`mt-auto inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  event.type === 'Technical'
                    ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-violet-500 hover:text-white hover:border-violet-400 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                }`}
              >
                Explore Event
                <Eye size={18} className="transition-transform group-hover:scale-110" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Events

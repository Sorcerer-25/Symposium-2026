import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Code2, Gamepad2, Layers, Filter, X, Calendar, MapPin, Users, Clock } from 'lucide-react'

const filterTabs = ['All', 'Technical', 'Non-Technical']

function Events({ onNavigate, events }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const filteredEvents =
    activeFilter === 'All'
      ? events || []
      : (events || []).filter((e) => e.type === activeFilter)

  return (
    <div className="min-h-screen py-16 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Layers size={14} /> Schedule
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Symposium <span className="text-gradient-orange">Events</span>
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
                  ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.5)]'
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
                  ? 'hover:glow-orange hover:border-orange-600/50' 
                  : 'hover:glow-orange hover:border-orange-400/50'
              }`}
            >
              {/* Decorative Background Glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 blur-[80px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                event.type === 'Technical' ? 'bg-orange-600' : 'bg-orange-400'
              }`} />

              {/* Type Badge */}
              <div className="flex items-center justify-between mb-6">
                {event.type === 'Technical' ? (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-orange-600/10 text-orange-400 border border-orange-600/20">
                    <Code2 size={12} /> Tech
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-orange-400/10 text-amber-500 border border-orange-400/20">
                    <Gamepad2 size={12} /> Fun
                  </span>
                )}
                <span className="text-slate-600 font-mono text-xs">#0{event.id}</span>
              </div>

              {/* Event Name */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {event.name}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                {event.description}
              </p>

              {/* Action Button */}
              <button
                id={`view-event-${event.id}`}
                onClick={() => setSelectedEvent(event)}
                className={`mt-auto inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  event.type === 'Technical'
                    ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-orange-600 hover:text-white hover:border-orange-500 group-hover:shadow-[0_0_20px_rgba(234,88,12,0.3)]'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-400 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                }`}
              >
                Explore Event
                <Eye size={18} className="transition-transform group-hover:scale-110" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Event Modal Popup */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden glass z-10"
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full opacity-20 pointer-events-none ${
                selectedEvent.type === 'Technical' ? 'bg-orange-600' : 'bg-orange-400'
              }`} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20 cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Badges */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                {selectedEvent.type === 'Technical' ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-600/20">
                    <Code2 size={14} /> Technical
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full bg-orange-400/10 text-amber-500 border border-orange-400/20">
                    <Gamepad2 size={14} /> Non-Technical
                  </span>
                )}
                <span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest">
                  Event #0{selectedEvent.id}
                </span>
              </div>

              {/* Title & Description */}
              <div className="relative z-10 mb-8">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  {selectedEvent.name}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Event Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-0.5 uppercase tracking-wider">Date</p>
                    <p className="text-sm text-slate-200 font-bold">{selectedEvent.date || 'Oct 15, 2026'}</p>
                  </div>
                </div>
                
                <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-0.5 uppercase tracking-wider">Time</p>
                    <p className="text-sm text-slate-200 font-bold">{selectedEvent.time || '10:00 AM'}</p>
                  </div>
                </div>

                <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-0.5 uppercase tracking-wider">Venue</p>
                    <p className="text-sm text-slate-200 font-bold">{selectedEvent.venue || 'Main Auditorium'}</p>
                  </div>
                </div>

                <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-0.5 uppercase tracking-wider">Team Size</p>
                    <p className="text-sm text-slate-200 font-bold">{selectedEvent.teamSize || '1-4 Members'}</p>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 pt-6 border-t border-slate-800">
                <button
                  className="w-full sm:w-auto flex-1 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-1 cursor-pointer"
                  onClick={() => {
                    onNavigate?.('registration');
                    setSelectedEvent(null);
                  }}
                >
                  Register Now
                </button>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Events

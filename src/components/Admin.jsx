import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogIn, Edit2, Check, X, LogOut } from 'lucide-react'

function Admin({ events, setEvents }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const [editingEvent, setEditingEvent] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    if (email === 'admin1@gmail.com' && password === 'admin123') {
      setIsLoggedIn(true)
      setError('')
      setEmail('')
      setPassword('')
    } else {
      setError('Invalid email or password')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setEditingEvent(null)
  }

  const handleEditChange = (e, field) => {
    setEditingEvent({ ...editingEvent, [field]: e.target.value })
  }

  const handleSave = () => {
    const updatedEvents = events.map(ev => ev.id === editingEvent.id ? editingEvent : ev)
    setEvents(updatedEvents)
    setEditingEvent(null)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-16 px-6 bg-slate-950 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl glass relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />
          
          <div className="text-center mb-8 relative z-10">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
              <LogIn className="text-blue-400" size={32} />
            </div>
            <h2 className="text-3xl font-black text-white">Admin Login</h2>
            <p className="text-slate-400 mt-2 text-sm">Access the event dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 relative z-10">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-xl text-center">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="admin@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl mt-4 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] px-4"
            >
              Log In
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Event <span className="text-gradient hover:text-blue-400 transition-colors">Admin</span>
            </h1>
            <p className="text-slate-400 mt-2 text-lg">Manage and edit your events</p>
          </motion.div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <LogOut size={16} /> <span className="hidden sm:inline font-bold text-sm">Logout</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Event List */}
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            {events.map((event) => (
              <motion.div
                key={event.id}
                layoutId={`event-${event.id}`}
                className={`flex items-center justify-between p-5 rounded-2xl border transition-all cursor-pointer ${
                  editingEvent?.id === event.id 
                    ? 'bg-blue-500/10 border-blue-500/30' 
                    : 'bg-slate-900/50 border-slate-800 hover:bg-slate-800/50'
                }`}
                onClick={() => setEditingEvent({ ...event })}
              >
                <div>
                  <h3 className="text-lg font-bold text-white">{event.name}</h3>
                  <p className="text-sm text-slate-400">{event.type}</p>
                </div>
                <button
                  className={`p-2 rounded-xl transition-colors ${
                    editingEvent?.id === event.id ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Edit2 size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Edit Form */}
          <AnimatePresence mode="popLayout">
            {editingEvent ? (
              <motion.div
                key="edit-form"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 glass h-fit"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-black text-white">Edit Event</h3>
                  <button 
                    onClick={() => setEditingEvent(null)}
                    className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Event Name</label>
                    <input
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      value={editingEvent.name}
                      onChange={(e) => handleEditChange(e, 'name')}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Date</label>
                      <input
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        value={editingEvent.date}
                        onChange={(e) => handleEditChange(e, 'date')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Time</label>
                      <input
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        value={editingEvent.time}
                        onChange={(e) => handleEditChange(e, 'time')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Venue</label>
                      <input
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        value={editingEvent.venue}
                        onChange={(e) => handleEditChange(e, 'venue')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Team Size</label>
                      <input
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        value={editingEvent.teamSize}
                        onChange={(e) => handleEditChange(e, 'teamSize')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">About Event</label>
                    <textarea
                      rows={4}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      value={editingEvent.description}
                      onChange={(e) => handleEditChange(e, 'description')}
                    />
                  </div>

                  <button
                    onClick={handleSave}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl mt-4 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Check size={18} /> Save Changes
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden lg:flex flex-col items-center justify-center h-full border-2 border-dashed border-slate-800/50 rounded-3xl text-slate-500 p-8 text-center"
              >
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4">
                  <Edit2 size={24} className="text-slate-600" />
                </div>
                <p className="font-medium">Select an event from the list<br/>to edit its details</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Admin

import { motion } from 'framer-motion'
import {
  CalendarDays,
  MapPin,
  GraduationCap,
  IndianRupee,
  Code2,
  Gamepad2,
  Sparkles,
  ChevronRight,
  Users,
} from 'lucide-react'

const techEvents = [
  'Code Sprint',
  'Hackathon 48hr',
  'Paper Presentation',
  'Technical Quiz',
  'Web Dev Challenge',
  'AI/ML Showcase',
]

const nonTechEvents = [
  'Photography Contest',
  'Gaming Arena',
  'Treasure Hunt',
  'Meme War',
  'Short Film Festival',
  'Stand-up Comedy',
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== Hero Section ===== */}
      <section className="gradient-hero relative overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-indigo-700/15 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-32">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/20">
                <Sparkles size={12} /> Live Now
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-slate-100 mb-4">
              Tech<span className="text-gradient">Nexus</span> 2026
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-8">
              The flagship inter-collegiate symposium of the Department of Computer Science & Engineering.
            </p>
          </motion.div>

          {/* Info Pills */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {[
              { icon: GraduationCap, text: 'XYZ College of Engineering' },
              { icon: MapPin, text: 'Dept. of CSE' },
              { icon: CalendarDays, text: 'March 28–29, 2026' },
              { icon: IndianRupee, text: '₹250 / person' },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-slate-300"
              >
                <Icon size={16} className="text-blue-400" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
            <button
              id="hero-register-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Register Now <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ===== Event Lists ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-slate-100 mb-10 flex items-center gap-3"
        >
          <Users size={28} className="text-blue-400" />
          Event Lineup
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Events */}
          <motion.div
           {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl gradient-card border border-slate-800/60 p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Code2 size={20} className="text-cyan-400" />
              <h3 className="text-lg font-bold text-slate-100">Technical Events</h3>
            </div>
            <ul className="space-y-2">
              {techEvents.map((event, i) => (
                <li
                  key={event}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-slate-800/40 hover:bg-slate-800/70 transition-colors"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-md bg-cyan-400/10 text-cyan-400 text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-300">{event}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Non-Technical Events */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl gradient-card border border-slate-800/60 p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Gamepad2 size={20} className="text-amber-400" />
              <h3 className="text-lg font-bold text-slate-100">Non-Technical Events</h3>
            </div>
            <ul className="space-y-2">
              {nonTechEvents.map((event, i) => (
                <li
                  key={event}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-slate-800/40 hover:bg-slate-800/70 transition-colors"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-md bg-amber-400/10 text-amber-400 text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-300">{event}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="rounded-2xl glass glow-blue p-8 sm:p-10"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-4">About the Event</h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            <strong className="text-slate-200">TechNexus 2026</strong> is the annual inter-collegiate
            symposium organized by the Department of Computer Science & Engineering at XYZ College
            of Engineering. It brings together bright minds from across the state to compete, learn,
            and network through a curated mix of technical challenges and fun-filled non-technical
            activities. Whether you're a coder, a creative, or a curious learner — there's something
            for everyone. Join us for two days of innovation, competition, and unforgettable experiences!
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default Home

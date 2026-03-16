import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  User,
  Navigation,
  Bus,
  Train,
  Car,
  Globe,
  ExternalLink,
} from 'lucide-react'

/* ===== Event Coordinators ===== */
const eventCoordinators = [
  { name: 'Rahul Sharma', role: 'Code Sprint', phone: '+91 98765 43210', email: 'rahul.cs@xyzcollege.edu' },
  { name: 'Priya Nair', role: 'Hackathon 48hr', phone: '+91 98765 43211', email: 'priya.cs@xyzcollege.edu' },
  { name: 'Arun Kumar', role: 'Paper Presentation', phone: '+91 98765 43212', email: 'arun.cs@xyzcollege.edu' },
  { name: 'Sneha Reddy', role: 'Web Dev Challenge', phone: '+91 98765 43213', email: 'sneha.cs@xyzcollege.edu' },
  { name: 'Karthik M', role: 'Gaming Arena', phone: '+91 98765 43214', email: 'karthik.cs@xyzcollege.edu' },
  { name: 'Divya S', role: 'Photography Contest', phone: '+91 98765 43215', email: 'divya.cs@xyzcollege.edu' },
]

/* ===== Main Coordinators ===== */
const mainCoordinators = [
  { name: 'Dr. Lakshmi Venkatesh', role: 'Faculty Coordinator', phone: '+91 99876 54321', email: 'lakshmi.v@xyzcollege.edu' },
  { name: 'Arjun Patel', role: 'Student Coordinator', phone: '+91 99876 54322', email: 'arjun.p@xyzcollege.edu' },
  { name: 'Meera Krishnan', role: 'Student Co-coordinator', phone: '+91 99876 54323', email: 'meera.k@xyzcollege.edu' },
]

/* ===== How to Reach ===== */
const directions = [
  {
    icon: Train,
    mode: 'By Train',
    info: 'Nearest railway station: XYZ Junction (2 km). Auto-rickshaws and cabs available from the station to the campus.',
  },
  {
    icon: Bus,
    mode: 'By Bus',
    info: 'City bus routes 42, 56, and 78 stop at "XYZ College Gate". State transport buses from the central bus stand every 15 min.',
  },
  {
    icon: Car,
    mode: 'By Car / Cab',
    info: 'Located on NH-45, 8 km from the city center. Ample free parking available inside the campus. Search "XYZ College of Engineering" on Google Maps.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
}

function Contact() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2 flex items-center gap-3">
            <Phone size={32} className="text-blue-400" />
            Contact Us
          </h1>
          <p className="text-slate-400">
            Get in touch with our coordinators or find your way to the venue.
          </p>
        </motion.div>

        {/* ===== Main Coordinators ===== */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }} className="mb-12">
          <h2 className="text-xl font-bold text-slate-100 mb-5 flex items-center gap-2">
            <User size={20} className="text-violet-500" /> Main Coordinators
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainCoordinators.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl glass border border-slate-800/60 p-5 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mb-4">
                  <User size={18} className="text-white" />
                </div>
                <h3 className="text-base font-semibold text-slate-100">{c.name}</h3>
                <p className="text-xs text-blue-400 font-medium mb-3">{c.role}</p>
                <div className="space-y-1.5">
                  <a href={`tel:${c.phone}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                    <Phone size={14} /> {c.phone}
                  </a>
                  <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                    <Mail size={14} /> {c.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== Event Coordinators ===== */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mb-12">
          <h2 className="text-xl font-bold text-slate-100 mb-5 flex items-center gap-2">
            <Globe size={20} className="text-cyan-400" /> Individual Event Coordinators
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventCoordinators.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl gradient-card border border-slate-800/60 p-5 hover:border-cyan-500/30 transition-colors group"
              >
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 mb-3">
                  {c.role}
                </span>
                <h3 className="text-base font-semibold text-slate-100">{c.name}</h3>
                <div className="space-y-1.5 mt-2">
                  <a href={`tel:${c.phone}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                    <Phone size={14} /> {c.phone}
                  </a>
                  <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                    <Mail size={14} /> {c.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== How to Reach Us ===== */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }} className="mb-12">
          <h2 className="text-xl font-bold text-slate-100 mb-5 flex items-center gap-2">
            <Navigation size={20} className="text-emerald-400" /> How to Reach Us
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {directions.map((d) => {
              const Icon = d.icon
              return (
                <div key={d.mode} className="rounded-2xl glass border border-slate-800/60 p-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-emerald-400" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-100 mb-2">{d.mode}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{d.info}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* ===== Department Info & Map ===== */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Department Contact */}
            <div className="rounded-2xl glass glow-blue border border-slate-800/60 p-6">
              <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-blue-400" /> Venue & Department
              </h2>
              <div className="space-y-3 text-sm text-slate-400">
                <p className="text-slate-200 font-medium">Department of Computer Science & Engineering</p>
                <p>XYZ College of Engineering</p>
                <p>123 University Road, Tech City — 600 001</p>
                <p>Tamil Nadu, India</p>
                <div className="pt-3 border-t border-slate-800/60 space-y-1.5">
                  <a href="tel:+914412345678" className="flex items-center gap-2 hover:text-slate-200 transition-colors">
                    <Phone size={14} /> +91 44 1234 5678
                  </a>
                  <a href="mailto:cse@xyzcollege.edu" className="flex items-center gap-2 hover:text-slate-200 transition-colors">
                    <Mail size={14} /> cse@xyzcollege.edu
                  </a>
                  <a href="https://xyzcollege.edu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-200 transition-colors">
                    <ExternalLink size={14} /> xyzcollege.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-800/60">
              <iframe
                title="XYZ College of Engineering Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d80.123456!3d13.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sXYZ+College+of+Engineering!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="bg-slate-800"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
  Mail,
  Building2,
  BookOpen,
  Phone,
  ChevronRight,
  ChevronLeft,
  CreditCard,
  Check,
  Sparkles,
} from 'lucide-react'

const dummyEvents = [
  { id: 1, name: 'Code Sprint', type: 'Technical' },
  { id: 2, name: 'Hackathon 48hr', type: 'Technical' },
  { id: 3, name: 'Paper Presentation', type: 'Technical' },
  { id: 4, name: 'Technical Quiz', type: 'Technical' },
  { id: 5, name: 'Web Dev Challenge', type: 'Technical' },
  { id: 6, name: 'AI/ML Showcase', type: 'Technical' },
  { id: 7, name: 'Photography Contest', type: 'Non-Technical' },
  { id: 8, name: 'Gaming Arena', type: 'Non-Technical' },
  { id: 9, name: 'Treasure Hunt', type: 'Non-Technical' },
  { id: 10, name: 'Meme War', type: 'Non-Technical' },
  { id: 11, name: 'Short Film Festival', type: 'Non-Technical' },
  { id: 12, name: 'Stand-up Comedy', type: 'Non-Technical' },
]

const steps = ['Personal Info', 'Select Events', 'Review & Pay']

const fadeSlide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
}

function Registration() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: '',
    department: '',
    phone: '',
    selectedEvents: [],
  })

  const updateField = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  const toggleEvent = (id) =>
    setFormData((prev) => ({
      ...prev,
      selectedEvents: prev.selectedEvents.includes(id)
        ? prev.selectedEvents.filter((e) => e !== id)
        : [...prev.selectedEvents, id],
    }))

  const isStep0Valid = formData.fullName && formData.email && formData.college && formData.department && formData.phone;
  const isStep1Valid = formData.selectedEvents.length > 0;
  const currentStepValid = step === 0 ? isStep0Valid : step === 1 ? isStep1Valid : true;

  const isAllValid = isStep0Valid && isStep1Valid;

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2">Registration</h1>
          <p className="text-slate-400">Complete the form below to secure your spot.</p>
        </motion.div>

        {/* Step Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center mb-10"
        >
          {steps.map((label, i) => (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex items-center gap-2">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    i < step
                      ? 'bg-emerald-400/20 text-emerald-400'
                      : i === step
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {i < step ? <Check size={16} /> : i + 1}
                </div>
                <span
                  className={`text-sm font-medium hidden sm:block ${
                    i <= step ? 'text-slate-200' : 'text-slate-500'
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 mx-3">
                  <div className="h-0.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-500"
                      initial={{ width: '0%' }}
                      animate={{ width: i < step ? '100%' : '0%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Form Steps */}
        <div className="rounded-2xl glass border border-slate-800/60 p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="step0" {...fadeSlide} transition={{ duration: 0.3 }}>
                <h2 className="text-xl font-semibold text-slate-100 mb-6">Personal Information</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Full Name', field: 'fullName', icon: User, type: 'text', placeholder: 'John Doe' },
                    { label: 'Email Address', field: 'email', icon: Mail, type: 'email', placeholder: 'john@example.com' },
                    { label: 'College', field: 'college', icon: Building2, type: 'text', placeholder: 'XYZ College of Engineering' },
                    { label: 'Department', field: 'department', icon: BookOpen, type: 'text', placeholder: 'Computer Science' },
                    { label: 'Phone Number', field: 'phone', icon: Phone, type: 'tel', placeholder: '+91 98765 43210' },
                  ].map(({ label, field, icon: Icon, type, placeholder }) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
                      <div className="relative">
                        <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          id={`input-${field}`}
                          type={type}
                          value={formData[field]}
                          onChange={(e) => updateField(field, e.target.value)}
                          placeholder={placeholder}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-colors text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step1" {...fadeSlide} transition={{ duration: 0.3 }}>
                <h2 className="text-xl font-semibold text-slate-100 mb-2">Select Events</h2>
                <p className="text-sm text-slate-400 mb-6">
                  Choose the events you'd like to participate in.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {dummyEvents.map((event) => {
                    const selected = formData.selectedEvents.includes(event.id)
                    return (
                      <label
                        key={event.id}
                        className={`
                          flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200
                          ${selected
                            ? 'bg-blue-500/10 border-blue-500/40 shadow-sm shadow-blue-500/10'
                            : 'bg-slate-800/40 border-slate-700/40 hover:border-slate-600/60'
                          }
                        `}
                      >
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => toggleEvent(event.id)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border-2 transition-all ${
                            selected
                              ? 'bg-blue-500 border-blue-500'
                              : 'border-slate-600 bg-transparent'
                          }`}
                        >
                          {selected && <Check size={12} className="text-white" />}
                        </div>
                        <div>
                          <span className="text-sm text-slate-200 font-medium">{event.name}</span>
                          <span
                            className={`block text-xs mt-0.5 ${
                              event.type === 'Technical' ? 'text-cyan-400' : 'text-amber-400'
                            }`}
                          >
                            {event.type}
                          </span>
                        </div>
                      </label>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" {...fadeSlide} transition={{ duration: 0.3 }}>
                <h2 className="text-xl font-semibold text-slate-100 mb-6">Review & Pay</h2>
                <div className="space-y-4 mb-8">
                  <div className="rounded-xl bg-slate-800/50 p-4 space-y-2">
                    <Row label="Name" value={formData.fullName || '—'} />
                    <Row label="Email" value={formData.email || '—'} />
                    <Row label="College" value={formData.college || '—'} />
                    <Row label="Department" value={formData.department || '—'} />
                    <Row label="Phone" value={formData.phone || '—'} />
                  </div>
                  <div className="rounded-xl bg-slate-800/50 p-4">
                    <p className="text-sm text-slate-400 mb-2">Selected Events ({formData.selectedEvents.length})</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.selectedEvents.length > 0
                        ? formData.selectedEvents.map((id) => {
                            const ev = dummyEvents.find((e) => e.id === id)
                            return (
                              <span
                                key={id}
                                className="text-xs px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20 font-medium"
                              >
                                {ev?.name}
                              </span>
                            )
                          })
                        : <span className="text-sm text-slate-500">No events selected</span>
                      }
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-900/20 p-4 border border-blue-500/20 flex items-center justify-between">
                    <span className="text-sm text-slate-300">Total Amount</span>
                    <span className="text-xl font-bold text-blue-400">₹250</span>
                  </div>
                </div>

                <button
                  id="proceed-to-pay-btn"
                  disabled={!isAllValid}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    isAllValid
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                      : 'bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed opacity-60'
                  }`}
                >
                  <CreditCard size={18} />
                  Proceed to Pay — ₹250
                  <Sparkles size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-800/60">
            <button
              id="reg-back-btn"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                step === 0
                  ? 'text-slate-600 cursor-not-allowed'
                  : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              <ChevronLeft size={16} /> Back
            </button>
            {step < 2 && (
              <button
                id="reg-next-btn"
                onClick={() => {
                  if (currentStepValid) {
                    setStep((s) => Math.min(2, s + 1))
                  }
                }}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  currentStepValid
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 hover:shadow-blue-500/40'
                    : 'bg-slate-800 text-slate-500 border border-slate-700/50'
                }`}
              >
                Next <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-200 font-medium">{value}</span>
    </div>
  )
}

export default Registration

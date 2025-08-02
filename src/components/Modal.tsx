'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, User } from 'lucide-react';
import { useAppStore } from '@/store';

export default function Modal() {
  const { isModalOpen, setModalOpen } = useAppStore();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-primary-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-primary-navy">Join RewardsHealth</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 bg-accent-gray/20 hover:bg-accent-gray/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-primary-navy" />
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-navy/60" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-3 bg-accent-mint/20 border border-primary-teal/20 rounded-xl text-primary-navy placeholder-primary-navy/60 focus:outline-none focus:border-primary-teal"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-navy/60" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3 bg-accent-mint/20 border border-primary-teal/20 rounded-xl text-primary-navy placeholder-primary-navy/60 focus:outline-none focus:border-primary-teal"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-navy/60" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-3 bg-accent-mint/20 border border-primary-teal/20 rounded-xl text-primary-navy placeholder-primary-navy/60 focus:outline-none focus:border-primary-teal"
                />
              </div>

              <div className="space-y-3">
                <p className="text-sm text-primary-navy/80 font-medium">I'm interested in:</p>
                <div className="space-y-2">
                  {[
                    'Longevity Rewards Program',
                    'Stem Cell Therapy Information',
                    'Ambassador Opportunities'
                  ].map((option, index) => (
                    <label key={index} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-teal bg-accent-mint/20 border-primary-teal/20 rounded focus:ring-primary-teal"
                      />
                      <span className="text-sm text-primary-navy/80">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-teal hover:bg-primary-teal/90 text-primary-white py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                Get Started
              </button>
            </form>

            <p className="text-xs text-primary-navy/60 text-center mt-4">
              By submitting, you agree to our Terms of Service and Privacy Policy.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
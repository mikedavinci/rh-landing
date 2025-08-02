'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { useAppStore } from '@/store';

export default function HeroSection() {
  const { setModalOpen } = useAppStore();

  return (
    <section className="relative min-h-screen bg-gradient-navy-teal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-teal rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent-gold rounded-full blur-xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent-mint rounded-full blur-lg animate-float"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-white/10 backdrop-blur-sm border border-primary-white/20 rounded-full px-4 py-2 text-primary-white"
            >
              <Star className="w-4 h-4 text-accent-gold fill-current" />
              <span className="text-sm font-medium">Join the Movement</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-primary-white leading-tight"
            >
              JOIN THE
              <span className="block bg-gradient-to-r from-primary-teal to-accent-gold bg-clip-text text-transparent">
                LONGEVITY
              </span>
              <span className="block">MOVEMENT</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-primary-white/90 leading-relaxed max-w-2xl"
            >
              Earn rewards for living longer, moving better, and unlocking your body's true healing potential.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-primary-white/80 leading-relaxed max-w-2xl"
            >
              At RewardsHealth, we believe aging doesn't have to mean decline. We're part of a growing global movement that rewards people for taking charge of their health, extending their vitality, and helping others do the same.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => setModalOpen(true)}
                className="group bg-accent-gold hover:bg-accent-gold/90 text-primary-navy px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-primary-white/10 backdrop-blur-sm border border-primary-white/20 hover:bg-primary-white/20 text-primary-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Story
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-white/20"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-white">10K+</div>
                <div className="text-sm text-primary-white/70">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-white">95%</div>
                <div className="text-sm text-primary-white/70">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-white">$2M+</div>
                <div className="text-sm text-primary-white/70">Rewards Earned</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Person meditating in nature representing longevity and wellness"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-primary-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary-teal rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-primary-navy">Live Tracking</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-6 -right-6 bg-primary-white rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-navy">+$247</div>
                  <div className="text-xs text-primary-navy/70">This Week</div>
                </div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-teal/20 to-accent-gold/20 rounded-3xl blur-3xl transform scale-110"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-white/50 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
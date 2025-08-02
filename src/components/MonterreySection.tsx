'use client';

import { motion } from 'framer-motion';
import { MapPin, Award, Clock, DollarSign, Users, Shield } from 'lucide-react';

export default function MonterreySection() {
  const features = [
    {
      icon: Award,
      title: 'World-class infrastructure',
      description: 'State-of-the-art hospitals and research centers'
    },
    {
      icon: Users,
      title: 'Experienced physicians',
      description: 'Years of clinical practice in regenerative medicine'
    },
    {
      icon: DollarSign,
      title: 'Transparent pricing',
      description: 'Starting around $3,000—without insurance roadblocks'
    },
    {
      icon: Clock,
      title: 'Timely access',
      description: 'Advanced therapies without long delays'
    },
    {
      icon: Shield,
      title: 'COFEPRIS-approved',
      description: 'Mexico\'s top medical regulatory standard'
    }
  ];

  return (
    <section className="py-24 bg-gradient-teal-mint">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-primary-navy" />
            <span className="text-sm font-medium text-primary-navy">Medical Excellence</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-navy mb-6">
            ACCESS WORLD-CLASS
            <span className="block bg-gradient-to-r from-primary-navy to-primary-teal bg-clip-text text-transparent">
              HEALING IN MONTERREY
            </span>
          </h2>
          
          <p className="text-xl text-primary-navy/80 max-w-3xl mx-auto leading-relaxed">
            Monterrey is one of Latin America's most advanced medical cities—renowned for innovation, 
            quality care, and regenerative medicine leadership.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Modern medical facility in Monterrey"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            
            {/* Floating Stats */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-primary-white rounded-xl p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-teal">$3K</div>
                <div className="text-xs text-primary-navy/70">Starting Price</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-6 -left-6 bg-primary-navy rounded-xl p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gold">95%</div>
                <div className="text-xs text-primary-white/70">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-primary-navy/80 leading-relaxed">
                When it comes to stem cell therapy, Monterrey stands out as a premier destination 
                offering safe, regulated, and science-driven care. Patients travel from around the 
                world to receive treatment from highly trained physicians.
              </p>
              
              <p className="text-lg text-primary-navy/80 leading-relaxed">
                These are not experimental clinics, but legitimate centers of excellence delivering 
                care that rivals and often exceeds what's available in many traditional systems.
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary-navy mb-6">Why Monterrey?</h4>
              
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-primary-white/50 backdrop-blur-sm rounded-xl"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-navy rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary-navy mb-1">{feature.title}</h5>
                    <p className="text-primary-navy/70 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-primary-white/30 backdrop-blur-sm rounded-2xl p-8"
        >
          <p className="text-lg text-primary-navy/80 mb-8 max-w-3xl mx-auto">
            Monterrey offers not just access—but excellence. It represents a global shift toward 
            proactive, restorative, and affordable healing options for those ready to take control 
            of their health journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-navy hover:bg-primary-navy/90 text-primary-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="bg-primary-white/50 backdrop-blur-sm border border-primary-navy/20 hover:bg-primary-white/70 text-primary-navy px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              View Treatment Plans
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
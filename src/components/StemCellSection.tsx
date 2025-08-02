'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Microscope, Heart, Brain, Zap } from 'lucide-react';

export default function StemCellSection() {
  const conditions = [
    'Chronic joint and back pain',
    'Degenerative arthritis and injury recovery',
    'Cardiovascular and metabolic conditions',
    'Neurological and autoimmune disorders',
    'Long COVID recovery and systemic fatigue',
    'Hormonal balance and age-related decline'
  ];

  const benefits = [
    { icon: Heart, title: 'Cardiovascular Health', description: 'Restore heart function and circulation' },
    { icon: Brain, title: 'Neurological Support', description: 'Enhance cognitive function and neural repair' },
    { icon: Zap, title: 'Energy & Vitality', description: 'Boost cellular energy and reduce fatigue' },
  ];

  return (
    <section className="py-24 bg-primary-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent-mint rounded-full px-4 py-2 mb-6">
            <Microscope className="w-4 h-4 text-primary-teal" />
            <span className="text-sm font-medium text-primary-navy">Scientific Breakthrough</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-navy mb-6">
            THE HEALING POTENTIAL OF
            <span className="block bg-gradient-to-r from-primary-teal to-primary-navy bg-clip-text text-transparent">
              STEM CELLS
            </span>
          </h2>
          
          <p className="text-xl text-primary-navy/80 max-w-3xl mx-auto leading-relaxed">
            Regenerative therapies are no longer experimental. They're essential.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-primary-navy/80 leading-relaxed">
                For decades, stem cell research was confined to elite labs and tightly controlled studies. 
                Today, it's helping real people heal from real conditions—naturally and powerfully.
              </p>
              
              <p className="text-lg text-primary-navy/80 leading-relaxed">
                Stem cell therapy offers the potential to restore, repair, and rejuvenate. It works by 
                activating your body's own regenerative systems, targeting the root causes of pain, 
                degeneration, and dysfunction.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-accent-mint/30 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-teal rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-navy mb-1">{benefit.title}</h4>
                    <p className="text-primary-navy/70 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image & Conditions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6721018/pexels-photo-6721018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Scientific research and cellular healing"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              
              {/* Floating Element */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center shadow-lg"
              >
                <Microscope className="w-8 h-8 text-primary-navy" />
              </motion.div>
            </div>

            {/* Conditions List */}
            <div className="bg-primary-navy rounded-2xl p-8">
              <h4 className="text-xl font-bold text-primary-white mb-6">
                Conditions Stem Cell Therapy May Support:
              </h4>
              
              <div className="space-y-4">
                {conditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-teal flex-shrink-0" />
                    <span className="text-primary-white/90">{condition}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-primary-navy/80 mb-8 max-w-2xl mx-auto">
            These are not just "feel better" treatments—they are designed to help turn back the clock 
            on damage, pain, and inflammation. And when paired with lifestyle changes and movement, 
            the results can be transformative.
          </p>
          
          <button className="bg-primary-teal hover:bg-primary-teal/90 text-primary-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Learn More About Stem Cell Therapy
          </button>
        </motion.div>
      </div>
    </section>
  );
}